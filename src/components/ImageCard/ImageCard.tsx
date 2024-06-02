import styles from "../ImageCard/ImageCard.module.css";

interface ImageCardProps {
  item: {
    urls: {
      small: string;
      regular: string;
    };
    alt_description: string;
  };
  onImageClick: (url: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  item: {
    urls: { small, regular },
    alt_description,
  },
  onImageClick,
}) => {
  return (
    <ul>
      <li className={styles.ImageCard}>
        <img
          className={styles["ImageCard_item"]}
          onClick={() => onImageClick(regular)}
          src={small}
          alt={alt_description}
        />
      </li>
    </ul>
  );
};

export default ImageCard;
