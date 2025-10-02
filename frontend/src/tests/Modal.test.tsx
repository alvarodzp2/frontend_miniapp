import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Modal } from "../components/Modal";

test("Modal abre y cierra correctamente con botón Cerrar", async () => {
  const onClose = jest.fn();
  render(
    <Modal isOpen={true} onClose={onClose} title="Modal Test">
      <p>Contenido</p>
    </Modal>
  );

  const cerrarBtn = screen.getByText(/cerrar/i);
  await userEvent.click(cerrarBtn);

  expect(onClose).toHaveBeenCalledTimes(1);
});

test("Modal cierra con tecla Escape", async () => {
  const onClose = jest.fn();
  render(
    <Modal isOpen={true} onClose={onClose} title="Modal Test">
      <p>Contenido</p>
    </Modal>
  );

  await userEvent.keyboard("{Escape}");
  expect(onClose).toHaveBeenCalledTimes(1);
});

test("Modal no se muestra si isOpen es false", () => {
  const { queryByText } = render(
    <Modal isOpen={false} onClose={() => {}} title="Modal Test">
      <p>Contenido</p>
    </Modal>
  );

  expect(queryByText(/contenido/i)).not.toBeInTheDocument();
});
