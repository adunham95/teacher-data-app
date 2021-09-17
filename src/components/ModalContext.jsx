import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext(null);

const ModalProvider = ({ children }) => {
  const [modalID, setModalID] = useState('');
  return (
    <ModalContext.Provider value={{ modalID, setModalID }}>
      {children}
    </ModalContext.Provider>
  );
};

function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

export { ModalProvider, useModal };
