import { ModalProps } from '../../types/types';

const Modal = ({ children, visible, setVisible }: ModalProps) => {
  const rootClasses = ['modal'];
  if (visible) {
    rootClasses.push('active');
  }

  const handleModalClose = () => {
    setVisible(false);
  };

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="modal__close" onClick={handleModalClose}>
          Х
        </button>
      </div>
    </div>
  );
};

export default Modal;
