import { OneKey } from './utils/OneKey';

export type PartialProp<K extends OneKey<string>, Props extends Readonly<Props>, PropsK extends keyof Props> = {
  [Key in keyof K]: K[keyof K]
} & K[keyof K] extends true
  ? Omit<Props, PropsK> & K
  : Props & K;