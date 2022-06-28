import { createContext, useState } from 'react';

export const ModalContext = createContext();

const ModalContextProvider = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  // Open Modal
  const openModal = () => {
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    document.body.style.removeProperty('overflow');
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ modalIsOpen, openModal, closeModal }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
