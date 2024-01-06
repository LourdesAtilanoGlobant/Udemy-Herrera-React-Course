import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas 08-imp-exp", () => {
  test("getHeroeById debe retornar un héroe por ID", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    expect(heroe).toEqual({ "id": 1, "name": "Batman", "owner": "DC"})
  });
  test("getHeroeById debe retornar un undefined sino tiene el id correcto", () => {
    const id = 7;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined)
    expect(heroe).toBeFalsy();
  });
  test("Debe retornar un arreglo con los héroes de DC", () => {
    const dc = [{ id: 1, name: "Batman", owner: "DC" }, { id: 3, name: "Superman", owner: "DC" },{ id: 4, name: "Flash", owner: "DC" }];
    const owner = "DC";
    const heroesDC = getHeroesByOwner(owner);

    expect(heroesDC).toEqual(dc);
    expect(heroesDC).toHaveLength(3);
  });
  test("Debe retornar un arreglo con los héroes de Marvel", () => {
    const owner = "Marvel";
    const heroesMarvel = getHeroesByOwner(owner);

    expect(heroesMarvel).toHaveLength(2);
  });
});