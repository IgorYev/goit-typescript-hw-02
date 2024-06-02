import css from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = () => {
  return (
    <div className={css.section}>
      <p>Oops! Something went wrong! </p>
    </div>
  );
};

export default ErrorMessage;
