import { OneKey } from './utils/oneKey';

export type PartialProp<
  K extends OneKey<string>,
  BasicProps extends Readonly<BasicProps>,
  PartialProps extends Readonly<PartialProps>,
  ExcludedProps = object,
  ExcludeKeysFromBasicProps extends keyof BasicProps | '' = '',
> = {
  [Key in keyof K]: K[keyof K]
} & K[keyof K] extends true
    ? Partial<Omit<BasicProps, ExcludeKeysFromBasicProps>> & Partial<PartialProps> & K
    : BasicProps & K & ExcludedProps;