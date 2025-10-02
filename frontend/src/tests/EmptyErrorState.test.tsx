import { render, screen } from "@testing-library/react";
import { FavoritesProvider } from "../context/FavoritesContext";
import { Favorites } from "../pages/Favorites";

test("Empty/Error state muestra mensaje cuando no hay favoritos", () => {
  render(
    <FavoritesProvider>
      <Favorites />
    </FavoritesProvider>
  );

  expect(screen.getByText(/no tienes productos favoritos/i)).toBeInTheDocument();
});
