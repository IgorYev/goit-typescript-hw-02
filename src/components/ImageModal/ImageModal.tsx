import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

interface ImageModalProps {
  imageUrl: string | null;
  closeModal: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, closeModal }) => {
  return (
    <Modal
      isOpen={!!imageUrl}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image Modal"
    >
      {imageUrl && <img src={imageUrl} alt="Large" />}
    </Modal>
  );
};

export default ImageModal;
