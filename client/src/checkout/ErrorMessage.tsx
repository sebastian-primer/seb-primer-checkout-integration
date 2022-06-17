import "./ErrorMessage.css";

interface Props {
  message: string;
}

const ErrorMessage: React.FC<Props> = ({ message }) => {
  return <p className="errorMessage">There was an error: {message}</p>;
};

export default ErrorMessage;
