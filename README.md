> This is a fork of https://github.com/leokayson/vscode-find-jump.

Find-Jump works when you type a sequence of characters so that it can narrow down the location to where you want to jump.

![Demo gif](https://raw.githubusercontent.com/msafi/xvsc/master/findAndJump/demoFiles/demo.gif)

## How to use Find-Jump

When you activate Find-Jump in different mode, you'll see a blinking red light in the status bar indicating that Find-Jump is active and is receiving your input (see gif above). Now you can start typing the characters to where you want to jump. Usually 3 to 5 characters should be enough to narrow down the location, but your own workflow may vary.

A few things to note:

* The jump character is always a single letter. Sometimes the jump character needs to be pressed with the SHIFT key, which would be indicated on the jump location like `⇧z`
* Pressing the arrow keys or the enter key will exit Find-Jump

<!-- COMMANDS_START -->

## Commands

| Command                             | Default Keybind |
| ----------------------------------- | --------------- |
| findAndJump.activateCharStart          | alt+j s         |
| findAndJump.activateCharEnd            | alt+j e         |
| findAndJump.activateWordStart          | ctrl+j s        |
| findAndJump.activateWordEnd            | ctrl+j e        |
| findAndJump.activateCharStartSelection | alt+shift+j s   |
| findAndJump.activateCharEndSelection   | alt+shift+j e   |
| findAndJump.activateWordStartSelection | ctrl+shift+j s  |
| findAndJump.activateWordEndSelection   | ctrl+shift+j e  |

<!-- COMMANDS_END -->

<!-- SETTINGS_START -->

## Settings

| Setting                           | Default                      | Description                                                                                                                                                                                               |
| --------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| findAndJump.jumpChars                | "abcedf..."                  | Use custom alphabet for jump chars. The order is important. Default value is assigned with qwerty keyboard in mind (Particularly, home row keys `A B C D E ...` put up front).                         |
| findAndJump.excludeNextChars         | **3**                  | Letters are used to type text where to go but also as symbols for quick jump. This setting controls how many next character of the current match will be excluded from being used as a symbol for a jump. |
| findAndJump.positionAbsolute         | **true**               | When enabled - position decorations on top of the editor text (without shifting text).                                                                                                                    |
| findAndJump.onlyVisibleRanges        | **true**               | When enabled - will search only in visible text in editor.                                                                                                                                                |
| findAndJump.dimWhenActive            | **true**               | When enabled - will show code as grayscale to see matches more easily.                                                                                                                                    |
| findAndJump.activateToToggle         | **true**               | When enabled - will toggle active state for default `findAndJump.activate*` commands.                                                                                                                      |
| findAndJump.letterBackground         | "\#4169E1"                   | Background color of the extension&#39;s main decoration: letter to jump.                                                                                                                                  |
| findAndJump.letterForeground         | "\#ffffff"                   | Color of the extension's main decoration: letter to jump.                                                                                                                                                 |
| findAndJump.matchBackground          | "editor.selectionBackground" |                                                                                                                                                                                                           |
| findAndJump.matchForeground          | "editorWarning.foreground"   |                                                                                                                                                                                                           |
| findAndJump.scrollbarMatchForeground | "\#4169E1"                   | Color of the matches in the scrollbar area.                                                                                                                                                               |
| findAndJump.light                    | \{\}                         | Overwrite colors for light themes.                                                                                                                                                                        |

<!-- SETTINGS_END -->

> Color settings support referencing [Theme Color Id](https://code.visualstudio.com/api/references/theme-color).
