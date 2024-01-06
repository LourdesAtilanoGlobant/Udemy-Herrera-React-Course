import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Pruebas 07-deses-arr", () => {
  test("retornarArreglo debe devolver un string y un número", () => {
    const [letters, numbers ]= retornaArreglo();
    expect(letters).toBe("ABC");
    expect(numbers).toEqual(123);

    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");
  })
});
