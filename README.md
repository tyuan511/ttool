oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @tyuan511/ttool
$ ttool COMMAND
running command...
$ ttool (--version)
@tyuan511/ttool/0.0.2 darwin-x64 node-v14.20.0
$ ttool --help [COMMAND]
USAGE
  $ ttool COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ttool git [METHOD]`](#ttool-git-method)
* [`ttool help [COMMAND]`](#ttool-help-command)
* [`ttool plugins`](#ttool-plugins)
* [`ttool plugins:install PLUGIN...`](#ttool-pluginsinstall-plugin)
* [`ttool plugins:inspect PLUGIN...`](#ttool-pluginsinspect-plugin)
* [`ttool plugins:install PLUGIN...`](#ttool-pluginsinstall-plugin-1)
* [`ttool plugins:link PLUGIN`](#ttool-pluginslink-plugin)
* [`ttool plugins:uninstall PLUGIN...`](#ttool-pluginsuninstall-plugin)
* [`ttool plugins:uninstall PLUGIN...`](#ttool-pluginsuninstall-plugin-1)
* [`ttool plugins:uninstall PLUGIN...`](#ttool-pluginsuninstall-plugin-2)
* [`ttool plugins update`](#ttool-plugins-update)

## `ttool git [METHOD]`

describe the command here

```
USAGE
  $ ttool git [METHOD]

DESCRIPTION
  describe the command here

EXAMPLES
  $ ttool git
```

_See code: [dist/commands/git.ts](https://github.com/tyuan511/ttool/blob/v0.0.2/dist/commands/git.ts)_

## `ttool help [COMMAND]`

Display help for ttool.

```
USAGE
  $ ttool help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for ttool.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.14/src/commands/help.ts)_

## `ttool plugins`

List installed plugins.

```
USAGE
  $ ttool plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ ttool plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.1/src/commands/plugins/index.ts)_

## `ttool plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ ttool plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ ttool plugins add

EXAMPLES
  $ ttool plugins:install myplugin 

  $ ttool plugins:install https://github.com/someuser/someplugin

  $ ttool plugins:install someuser/someplugin
```

## `ttool plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ ttool plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ ttool plugins:inspect myplugin
```

## `ttool plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ ttool plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ ttool plugins add

EXAMPLES
  $ ttool plugins:install myplugin 

  $ ttool plugins:install https://github.com/someuser/someplugin

  $ ttool plugins:install someuser/someplugin
```

## `ttool plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ ttool plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ ttool plugins:link myplugin
```

## `ttool plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ttool plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ttool plugins unlink
  $ ttool plugins remove
```

## `ttool plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ttool plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ttool plugins unlink
  $ ttool plugins remove
```

## `ttool plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ttool plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ttool plugins unlink
  $ ttool plugins remove
```

## `ttool plugins update`

Update installed plugins.

```
USAGE
  $ ttool plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
