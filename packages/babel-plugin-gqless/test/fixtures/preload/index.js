import { preload } from 'gqless'
import testDefault, { test } from './exports'
import * as impAll from './exports'

preload(test, {})
preload(impAll.test, {})
preload(testDefault, {})
