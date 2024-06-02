import { Field, Form, Formik, FormikHelpers, FormikProps } from "formik";
import { FcSearch } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";
import styles from "../SearchBar/SearchBar.module.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

interface FormValues {
  query: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    if (!values.query) {
      notify();
      return;
    }

    onSearch(values.query);
    actions.resetForm();
  };

  const handleIconClick = (formikBag: FormikProps<FormValues>) => {
    handleSubmit(formikBag.values, formikBag);
  };

  const notify = () =>
    toast.error("Please fill in the field", {
      style: {
        margin: "60px",
      },
    });

  return (
    <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
      {(formikBag: FormikProps<FormValues>) => (
        <header className={styles.Searchbar}>
          <Form className={styles.SearchForm}>
            <Toaster />
            <FcSearch
              className={`${styles["SearchForm-button-icon"]} my-icon`}
              size={25}
              style={{ marginRight: "10px", marginLeft: "5px" }}
              onClick={() => handleIconClick(formikBag)}
            />
            <Field
              className={styles["SearchForm-input"]}
              type="text"
              name="query"
              placeholder="Search images and photos"
            />
          </Form>
        </header>
      )}
    </Formik>
  );
};

export default SearchBar;
