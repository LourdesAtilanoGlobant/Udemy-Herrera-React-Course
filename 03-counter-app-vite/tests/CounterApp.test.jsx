import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Testing a <CounterApp/>', () => {
  const valueInitial = 10;
  test('debe de hacer match con el snapshot', () => {
    const { container } = render(<CounterApp valueInitial={valueInitial}/>)
    expect(container).toMatchSnapshot();
  });
  test('debe de mostrar el valor inicial de 100', () => {
    render(<CounterApp valueInitial={10}/>);
    expect(screen.getByText(valueInitial)).toBeTruthy();
    // expect(screen.getByRole("heading",{level:2}).innerHTML).toContain("100");
  });
  test('debe de incrementar con el boton de +1', () => {
    render(<CounterApp valueInitial={valueInitial}/>);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("11")).toBeTruthy();
  });
  test('debe de decrementar con el boton de -1', () => {
    render(<CounterApp valueInitial={valueInitial}/>);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("9")).toBeTruthy();
  });
  test('debe regresar el valor inicial con el boton Reset', () => {
    render(<CounterApp valueInitial={50}/>);
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("-1"));
    // fireEvent.click(screen.getByText("Reset"));
    fireEvent.click(screen.getByRole("button", {name : "btn-reset"}));
    expect(screen.getByText("50")).toBeTruthy();
  });
});
