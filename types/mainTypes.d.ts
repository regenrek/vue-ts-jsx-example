
export interface TabDefinition<
  Kind extends string = string,
  Props extends {} = {},
  LazyProps extends {} = {}
> {
  kind?: Kind
  key: string
  text: string
  closable?: boolean
  props?: Props
  lazyProps?: LazyProps
}
