import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Pruebas en 06-deses-obj", () => {
  test("usContext debe desestructurar un objeto", () => {
    const user = { clave:"Barba Negra", edad: 45, nombre: "Luis Mendoza"}
    const objDesest = usContext(user);

    expect(objDesest).toEqual({
      nombreClave:"Barba Negra", anios: 45, rango: "Capitán", nombre: "Luis Mendoza", "latlng": { "lat": 14.1232, "lng": -12.3232}
    })
  })
});
