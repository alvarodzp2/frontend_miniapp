// src/pages/Favorites.tsx
import { useContext, useState } from "react";
import { FavoritesContext, Product } from "../context/FavoritesContext";
import { Modal } from "../components/Modal";

export const Favorites = () => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);
  const [selected, setSelected] = useState<Product | null>(null);

  if (favorites.length === 0) return <p>No tienes productos favoritos.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Favoritos</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "16px",
          marginTop: "16px",
        }}
      >
        {favorites.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "12px" }}>
            <h3>{product.title}</h3>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
            <p>${product.price.toFixed(2)}</p>
            <div style={{ display: "flex", gap: "8px" }}>
              <button onClick={() => setSelected(product)}>Ver detalle</button>
              <button onClick={() => removeFavorite(product.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <Modal
          isOpen={true}
          onClose={() => setSelected(null)}
          title={selected.title}
        >
          <img
            src={selected.image}
            alt={selected.title}
            style={{ width: "150px", objectFit: "contain" }}
          />
          <p>{selected.description}</p>
          <p><strong>${selected.price.toFixed(2)}</strong></p>
        </Modal>
      )}
    </div>
  );
};

export default Favorites;

