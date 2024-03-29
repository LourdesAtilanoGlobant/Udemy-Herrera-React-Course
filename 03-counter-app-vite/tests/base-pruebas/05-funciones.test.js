import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUSer deber retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502"
    };

    const user = getUser();
    expect(testUser).toEqual(user);
  });
  test("getUsuarioActivo deber retornar un objeto", () => {
    const name = "Luly";

    const userActivo = getUsuarioActivo(name);
    expect(userActivo).toEqual({
      uid: "ABC567",
      username: name
    })
  })
});