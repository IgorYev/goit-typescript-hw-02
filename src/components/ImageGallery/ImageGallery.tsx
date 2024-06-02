import ImageCard from "../ImageCard/ImageCard";
import styles from "../ImageGallery/ImageGallery.module.css";

interface ImageItem {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

interface ImageGalleryProps {
  items: ImageItem[];
  onImageClick: (url: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImageClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard onImageClick={onImageClick} item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
