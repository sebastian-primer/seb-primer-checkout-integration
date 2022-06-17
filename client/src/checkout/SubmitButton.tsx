import { MouseEventHandler } from "react";

interface Props {
  onSubmit: () => void;
}

const SubmitButton: React.FC<Props> = ({ onSubmit }) => {
  return <button onClick={onSubmit}>Click here to pay!</button>;
};

export default SubmitButton;
