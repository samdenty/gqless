# @gqless/cli

Create a typed gqless client from a graphql endpoint

[![Version](https://img.shields.io/npm/v/@gqless/cli.svg)](https://npmjs.org/package/@oclif/example-multi-ts)
[![Downloads/week](https://img.shields.io/npm/dw/@gqless/cli.svg)](https://npmjs.org/package/@oclif/example-multi-ts)
[![License](https://img.shields.io/npm/l/@oclif/example-multi-ts.svg)](https://github.com/oclif/example-multi-ts/blob/master/package.json)

<!-- toc -->
* [@gqless/cli](#gqlesscli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @gqless/cli
$ gqless COMMAND
running command...
$ gqless (-v|--version|version)
@gqless/cli/0.0.1-alpha.15 linux-x64 node-v12.4.0
$ gqless --help [COMMAND]
USAGE
  $ gqless COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`gqless generate OUTPUT_DIR`](#gqless-generate-output_dir)
* [`gqless help [COMMAND]`](#gqless-help-command)

## `gqless generate OUTPUT_DIR`

generate a client from a GraphQL endpoint

```
USAGE
  $ gqless generate OUTPUT_DIR

OPTIONS
  -h, --help        show CLI help
  -t, --typescript  output typescript (instead of javascript)
  -u, --url=url     (required) url to the GraphQL endpoint
  --noComments      don't output comments (only useful for IDE intellisense)
  --noPrettier      don't run prettier on the resulting code

EXAMPLE
  $ gqless generate https://example.com/graphql
```

## `gqless help [COMMAND]`

display help for gqless

```
USAGE
  $ gqless help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_
<!-- commandsstop -->
