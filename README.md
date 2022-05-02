## Installation

`npm i --save-dev partial-props`

or

`yarn add --dev partial-props`

## Usage

Basic Example: 

```
type BasicProps = {
  onClick?: () => void
};

type RegularBtn = {
  text: string
};

type IconBtn = {
  icon: {
    src: string
    alt?: string
  }
};

type Btn<T extends boolean = false> =
  PartialProp<{ useIcon?: T }, BasicProps, IconBtn, RegularBtn, 'onClick'>;

// its necessary to provide T with default false value for correct props observing  
const Button = <T extends boolean = false>(props: Btn<T>) => {
  const { onClick, text, useIcon } = props as Btn;
  const { icon } = props as Btn<true>;
  return useIcon
    ? <button onClick={onClick}><img src={icon?.src} alt={icon?.alt}/></button>
    : <button>{ text }</button>
};
```

##PartialProps generics explanation: 

```
PartialProps<
    K: prop which be able to hide an item(s) from you partial types,
    BasicProps: basic types list
    PartialProps: partial types list (all types are casted to partial)
    ExcludedProps = object ?: list of types which will be removing after K prop is true 
    ExcludeKeysFromBasicProps extends keyof BasicProps | '' = '' ?: keys from basic props which will be removing after K prop is true      
>
```