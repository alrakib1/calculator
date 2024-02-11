import { FC } from "react";

interface Props {
  value: string;
  onclick: () => void;
}

const Button: FC<Props> = ({ value, onclick }): JSX.Element => {
  return (
    <button onClick={onclick} className="calc-btn border">
      {value}
    </button>
  );
};

export default Button;
