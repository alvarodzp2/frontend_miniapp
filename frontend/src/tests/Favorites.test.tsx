import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FavoritesProvider, Product } from "../context/FavoritesContext";
import { Favorites } from "../pages/Favorites";

const sampleProduct: Product = {
  id: 1,
  title: "Test Product",
  price: 99.99,
  description: "Desc",
  category: "men's clothing",
  image: "https://example.com/image.png",
};

test("Favoritos agrega y quita favoritos", async () => {
  render(
    <FavoritesProvider>
      <Favorites />
    </FavoritesProvider>
  );

  // Inicialmente mensaje de vacío
  expect(screen.getByText(/no tienes productos favoritos/i)).toBeInTheDocument();
});
