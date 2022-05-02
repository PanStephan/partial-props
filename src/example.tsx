import { PartialProp } from './main';

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

const Button = <T extends boolean = false>(props: Btn<T>) => {
  const { onClick, text, useIcon } = props as Btn;
  const { icon } = props as Btn<true>;
  return useIcon
    ? <button onClick={onClick}><img src={icon?.src} alt={icon?.alt}/></button>
    : <button>{ text }</button>
};

const Btn = <Button></Button>
