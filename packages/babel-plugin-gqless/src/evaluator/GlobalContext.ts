import { Context } from './Context'
import * as v from './values'
import { ObjectV } from './values'

export class GlobalContext extends Context {
  public globalContext = this

  public BooleanPrototype: ObjectV
  public FunctionPrototype: ObjectV
  public NumberPrototype: ObjectV
  public ObjectPrototype: ObjectV
  public StringPrototype: ObjectV

  constructor() {
    super(undefined)

    const [String, StringPrototype] = v.createStringPrototype(this)
    this.StringPrototype = StringPrototype
    this.define('String', String)

    const [Boolean, BooleanPrototype] = v.createBooleanPrototype(this)
    this.BooleanPrototype = BooleanPrototype
    this.define('Boolean', Boolean)

    const [Function, FunctionPrototype] = v.createFunctionPrototype(this)
    this.FunctionPrototype = FunctionPrototype
    this.define('Function', Function)

    const [Number, NumberPrototype] = v.createNumberPrototype(this)
    this.NumberPrototype = NumberPrototype
    this.define('Number', Number)

    const [Object, ObjectPrototype] = v.createObjectPrototype(this)
    this.ObjectPrototype = ObjectPrototype
    this.define('Object', Object)
  }
}
