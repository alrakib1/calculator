import { FC } from "react";
import Calculator from "./Components/Calculator";

const App: FC = (): JSX.Element => {
  return (
    <div className="wrapper">
      <Calculator />
    </div>
  );
};

export default App;
