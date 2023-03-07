import { FC } from 'react';
import s from './InputText.module.css';

interface IInputText {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: FC<IInputText> = (props) => {
  return (
    <input type="text" className={s.box} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
  )
}

export default InputText