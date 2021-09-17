import React from 'react';
import ReactDOM from 'react-dom';
import { useModal } from './ModalContext.jsx';

const Modal = ({ id, children }) => {
  const { modalID, setModalID } = useModal();
  return id === modalID ? ReactDOM.createPortal(
    <>
      <div
        className="fixed top-0 left-0 h-screen w-full flex items-center justify-center bg-opacity-75 bg-black"
      >
        <div
          className="relative p-5 shadow-lg rounded flex flex-col items-start text-lg text-gray-800"
          aria-modal
          aria-hidden
          tabIndex={-1}
          role="dialog"
        >
          <button
            type="button"
            className="absolute -right-2 -top-6 text-red-500 text-5xl hover:text-red-700"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => setModalID('')}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          {children}
        </div>
      </div>
    </>, document.body,
  ) : null;
};

export default Modal;