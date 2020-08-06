import Vue from 'vue'
import 'vue-demi'

declare module 'vue-demi' {
  interface SetupContext {
    readonly refs: { [key: string]: Vue | Element | Vue[] | Element[] }
  }
}
