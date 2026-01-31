import {
	commands,
	ConfigurationChangeEvent,
	ExtensionContext,
	TextEditorDecorationType,
	workspace,
} from "vscode";
import { updateDecorationTypes } from "./decorations";
import { findAndJump } from "./findJump";
import { subscriptions as inlineInputSubscriptions } from "./inlineInput";
import { ExtensionConfig } from "./types";

export let extensionConfig: ExtensionConfig;

export const enum Const {
	EXTENSION_NAME = "findAndJump",
}

export abstract class Global {
	static letterDecorationType: TextEditorDecorationType;
}

export function activate(context: ExtensionContext) {
	extensionConfig = workspace.getConfiguration(
		Const.EXTENSION_NAME
	) as any as ExtensionConfig;
	updateDecorationTypes();
	const findAndJumpInstance = new findAndJump();

	context.subscriptions.push(
		commands.registerTextEditorCommand(
			`${Const.EXTENSION_NAME}.activateCharStart`,
			findAndJumpInstance.activateCharStart
		),
		commands.registerTextEditorCommand(
			`${Const.EXTENSION_NAME}.activateCharEnd`,
			findAndJumpInstance.activateCharEnd
		),
		commands.registerTextEditorCommand(
			`${Const.EXTENSION_NAME}.activateWordStart`,
			findAndJumpInstance.activateWordStart
		),
		commands.registerTextEditorCommand(
			`${Const.EXTENSION_NAME}.activateWordEnd`,
			findAndJumpInstance.activateWordEnd
		),
		commands.registerTextEditorCommand(
			`${Const.EXTENSION_NAME}.activateCharStartSelection`,
			findAndJumpInstance.activateCharStartSelection
		),
		commands.registerTextEditorCommand(
			`${Const.EXTENSION_NAME}.activateCharEndSelection`,
			findAndJumpInstance.activateCharEndSelection
		),
		commands.registerTextEditorCommand(
			`${Const.EXTENSION_NAME}.activateWordStartSelection`,
			findAndJumpInstance.activateWordStartSelection
		),
		commands.registerTextEditorCommand(
			`${Const.EXTENSION_NAME}.activateWordEndSelection`,
			findAndJumpInstance.activateWordEndSelection
		),
		commands.registerTextEditorCommand(
			`${Const.EXTENSION_NAME}.cancel`,
			findAndJumpInstance.cancel
		),
		commands.registerTextEditorCommand(
			`${Const.EXTENSION_NAME}.backspace`,
			findAndJumpInstance.backspace
		)
	);

	function updateConfig(e: ConfigurationChangeEvent): void {
		if (!e.affectsConfiguration(Const.EXTENSION_NAME)) {
			return;
		}

		extensionConfig = workspace.getConfiguration(
			Const.EXTENSION_NAME
		) as any as ExtensionConfig;
		updateDecorationTypes();
		findAndJumpInstance.cancel();
	}

	context.subscriptions.push(
		workspace.onDidChangeConfiguration(updateConfig)
	);
}

export function deactivate(): void {
	const subscriptions = [...inlineInputSubscriptions];

	subscriptions.forEach((subscription) => subscription.dispose());
}
