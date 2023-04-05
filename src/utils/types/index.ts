import { StyledComponent } from 'styled-components'

export type StyledComponentProps<T> = T extends StyledComponent<
  any,
  any,
  infer P,
  any
>
  ? P
  : never
