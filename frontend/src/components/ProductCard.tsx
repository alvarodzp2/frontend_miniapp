import { useContext } from "react";
import { FavoritesContext, Product } from "../context/FavoritesContext";

interface ProductCardProps {
  product: Product;
  onView: (product: Product) => void; // abrir modal de detalle
}

export const ProductCard = ({ product, onView }: ProductCardProps) => {
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

  const handleFavorite = () => {
    if (isFavorite(product.id)) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "12px",
        width: "220px",
        textAlign: "center",
        backgroundColor: "var(--card-bg, #fff)",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        loading="lazy"
        style={{
          width: "100px",
          height: "100px",
          objectFit: "contain",
          marginBottom: "8px",
        }}
      />
      <h3 style={{ fontSize: "14px", minHeight: "40px" }}>{product.title}</h3>
      <p style={{ fontWeight: "bold" }}>${product.price.toFixed(2)}</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
        <button
          onClick={handleFavorite}
          aria-label={isFavorite(product.id) ? "Eliminar de favoritos" : "Agregar a favoritos"}
          style={{
            background: "#007bff",
            color: "#fff",
            border: "none",
            padding: "4px 8px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          {isFavorite(product.id) ? "Favorito" : "Agregar"}
        </button>

        <button
          onClick={() => onView(product)}
          aria-label="Ver detalle"
          style={{
            background: "#6c757d",
            color: "#fff",
            border: "none",
            padding: "4px 8px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          Ver
        </button>
      </div>
    </div>
  );
};

export {};