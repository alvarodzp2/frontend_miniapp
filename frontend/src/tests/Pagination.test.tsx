import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Pagination } from "../components/Pagination";

describe("Paginación de productos", () => {
  test("cambia de página al presionar botones", async () => {
    const user = userEvent.setup();
    const onPageChange = jest.fn();

    // Comenzamos en página 2 para poder probar 'Anterior'
    render(<Pagination page={2} totalPages={3} onPageChange={onPageChange} />);

    const nextButton = screen.getByText("Siguiente");
    const prevButton = screen.getByText("Anterior");

    // Presionar "Siguiente"
    await user.click(nextButton);
    expect(onPageChange).toHaveBeenCalledWith(3);

    // Presionar "Anterior"
    await user.click(prevButton);
    expect(onPageChange).toHaveBeenCalledWith(1);
  });
});
