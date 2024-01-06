import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Pruebas en async - await", () => {
  test('getImagen debe retornar un url de la imagen', async() => {
    const url = await getImagen();
    expect(typeof url).toBe('string');
  });
  // PRUEBA PARA EL CATCH
  /*test('getImage debe retornar un error sino encuentra la url de la imagen', async() => {
    const resp = await getImagen();
    console.log(resp);
    expect(resp).toBe("No se encontró la imagen");
  });*/
});
