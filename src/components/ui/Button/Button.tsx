import { FC } from 'react';
import s from './Button.module.css';

interface IButton {
  children: string;
  onClick: () => void;

  backgroundColor?: string;
  textColor?: string;
  width?: string;
}

const Button: FC<IButton> = (props) => {
  return (
    <button className={s.button} 
            style={{color: props.textColor || 'black', backgroundColor: props.backgroundColor || 'gray', width: props.width || '100%'}}
            onClick={props.onClick}>{props.children}</button>
  )
}

export default Button