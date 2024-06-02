import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div>
      <button className={css.Button} onClick={onClick} type="button">
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
