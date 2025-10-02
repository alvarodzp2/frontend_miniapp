// src/components/Modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose} // cerrar al hacer clic afuera
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "400px",
        }}
        onClick={(e) => e.stopPropagation()} // evitar cierre si clic dentro
      >
        <h2>{title}</h2>
        {children}
        <button onClick={onClose} style={{ marginTop: "12px" }}>Cerrar</button>
      </div>
    </div>
  );
};

// export vacío para que TypeScript reconozca el archivo como módulo
export {};
