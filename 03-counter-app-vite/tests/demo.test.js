describe("Pruebas en <DemoComponent />", () => {
  test("Esta prueba no debe fallar", () => {
    //Arrange
    const message1 = "Hola Mundo";
    //Act
    const message2 = message1.trim();
    //Acert
    // expect(message1).toBe(message2);
    expect(message1).toBe(message2)
  });
})