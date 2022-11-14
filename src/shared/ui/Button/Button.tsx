import s from './Button.module.scss';

interface Props {
  text: string;
  function: () => void;
}

const Button: React.FC<Props> = (props) => {
  return (
    <button className={s.button} onClick={props.function}>
      {props.text}
    </button>
  );
};

export default Button;
