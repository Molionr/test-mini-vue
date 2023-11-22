import { ReactiveEffect } from "./effect"

class ComputedRefImpl {
  private _getter
  private _dirty
  private _value
  private _vIsRef
  private _effect: ReactiveEffect
  constructor(getter) {
    this._getter = getter
    this._dirty = true
    this._vIsRef = true
    this._effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true
      }
    })
  }
  get value() {
    // return this._getter()
    if (this._dirty) {
      this._value = this._effect.run()
      this._dirty = false
    }
    // trackRefValue(this)
    return this._value
  }
  // set value(newValue) {
  //   this._setter(newValue)
  // }
}

export function computed(getter) {
  return new ComputedRefImpl(getter)
}