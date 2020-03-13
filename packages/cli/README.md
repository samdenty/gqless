# @gqless/cli

Create a typed gqless client from a graphql endpoint

[![Version](https://img.shields.io/npm/v/@gqless/cli.svg)](https://npmjs.org/package/@oclif/example-multi-ts)
[![Downloads/week](https://img.shields.io/npm/dw/@gqless/cli.svg)](https://npmjs.org/package/@oclif/example-multi-ts)
[![License](https://img.shields.io/npm/l/@oclif/example-multi-ts.svg)](https://github.com/oclif/example-multi-ts/blob/master/package.json)

<!-- toc -->

- [@gqless/cli](#gqlesscli)
- [Usage](#usage)
- [Commands](#commands)
  <!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g @gqless/cli
$ gqless COMMAND
running command...
$ gqless (-v|--version|version)
@gqless/cli/0.0.1-alpha.27 linux-x64 node-v12.13.0
$ gqless --help [COMMAND]
USAGE
  $ gqless COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`gqless generate [OUTPUT_DIR]`](#gqless-generate-output_dir)
- [`gqless help [COMMAND]`](#gqless-help-command)

## `gqless generate [OUTPUT_DIR]`

Generate a client from a GraphQL endpoint

```
USAGE
  $ gqless generate [OUTPUT_DIR]

OPTIONS
  -c, --config=config  Path to your gqless config file
  -h, --help           show CLI help
  -t, --typescript     output typescript (instead of javascript)
  -u, --url=url        url to the GraphQL endpoint
  --comments           output comments to type definitions (useful for IDE intellisense)

  --header=header      Additional header to send to server for introspectionQuery. May be used multiple times to add
                       multiple headers.

  --usePost            use a POST request to retrieve the schema

EXAMPLES
  $ gqless generate ./src/gqless -u https://example.com/graphql
  $ gqless generate -c gqless.config.ts
```

_See code: [dist/commands/generate.js](https://github.com/samdenty/gqless/blob/v0.0.1-alpha.27/dist/commands/generate.js)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_

<!-- commandsstop -->
