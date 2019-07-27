# @oclif/example-multi-ts

example multi-command CLI built with typescript

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@oclif/example-multi-ts.svg)](https://npmjs.org/package/@oclif/example-multi-ts)
[![CircleCI](https://circleci.com/gh/oclif/example-multi-ts/tree/master.svg?style=shield)](https://circleci.com/gh/oclif/example-multi-ts/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/oclif/example-multi-ts?branch=master&svg=true)](https://ci.appveyor.com/project/oclif/example-multi-ts/branch/master)
[![Codecov](https://codecov.io/gh/oclif/example-multi-ts/branch/master/graph/badge.svg)](https://codecov.io/gh/oclif/example-multi-ts)
[![Downloads/week](https://img.shields.io/npm/dw/@oclif/example-multi-ts.svg)](https://npmjs.org/package/@oclif/example-multi-ts)
[![License](https://img.shields.io/npm/l/@oclif/example-multi-ts.svg)](https://github.com/oclif/example-multi-ts/blob/master/package.json)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
  <!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g @oclif/example-multi-ts
$ gqless COMMAND
running command...
$ gqless (-v|--version|version)
@oclif/example-multi-ts/1.10.7 linux-x64 node-v10.15.1
$ gqless --help [COMMAND]
USAGE
  $ gqless COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`gqless generate OUTPUT_DIR`](#gqless-generate-output_dir)
- [`gqless help [COMMAND]`](#gqless-help-command)

## `gqless generate OUTPUT_DIR`

generate a client from a GraphQL endpoint

```
USAGE
  $ gqless generate OUTPUT_DIR

OPTIONS
  -h, --help        show CLI help
  -t, --typescript  output typescript (instead of javascript)
  -u, --url=url     (required) url to the GraphQL endpoint

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
