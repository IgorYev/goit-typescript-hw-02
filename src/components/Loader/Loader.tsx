import { Rings } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={css.section}>
      <Rings
        visible={true}
        height="150"
        width="150"
        color="#6600ff"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
