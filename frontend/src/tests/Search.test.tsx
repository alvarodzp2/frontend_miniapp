import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchBar } from "../components/SearchBar";

describe("SearchBar", () => {
  test("permite escribir en el input", async () => {
    render(<SearchBar onSearch={() => {}} />);

    const input = screen.getByPlaceholderText("Buscar productos");
    await userEvent.type(input, "a");

    expect(input).toHaveValue("a"); // solo verificamos que el input cambie
  });
});
