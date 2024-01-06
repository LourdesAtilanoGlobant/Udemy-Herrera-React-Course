import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp/>', () => {
  test('debe de hacer match con el snapshot', () => {
    const title = "Hola, soy Goku";
    const {  container } = render(<FirstApp title={title}/>);
    expect(container).toMatchSnapshot();
  });
  test('debe mostrar el título en un h1', () => {
    const title = "Hola, soy Goku";
    const {  container, getByText, getByTestId } = render(<FirstApp title={title}/>);
    expect(getByText(title)).toBeTruthy();

    //Una alternativa para encontrar el h1
    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toBe(title);
    // expect(h1.innerHTML).toContain(title);
    // expect(getByTestId("test-title")).toBeTruthy();
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });
  test('debe de motrar el subtitulo enviado por props', () => {
    const title = "Hola, soy Goku";
    const subTitle = "Soy un subtítulo";
    const { getByText } = render(<FirstApp title={title} subTitle={subTitle}/>);
    expect(getByText(subTitle)).toBeTruthy();
  });
});
