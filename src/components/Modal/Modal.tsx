import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}
const Modal = ({ children, visible, setVisible }: ModalProps) => {
  const rootClasses = ['modal'];
  if (visible) {
    rootClasses.push('active');
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
