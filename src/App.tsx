import { useEffect, useState } from "react";
import "./App.css";

import { fetchImages, UnsplashImage } from "./articles-api";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

interface ImageGalleryProps {
  items: UnsplashImage[];
  onImageClick: (url: string) => void;
}

interface LoadMoreBtnProps {
  onClick: () => void;
}

interface ImageModalProps {
  imageUrl: string;
  closeModal: () => void;
}

const App: React.FC = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    async function getImages() {
      try {
        setIsLoading(true);
        const data = await fetchImages(query, page);
        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [page, query]);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={openModal} />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      {selectedImage && (
        <ImageModal imageUrl={selectedImage} closeModal={closeModal} />
      )}
    </div>
  );
};

export default App;
