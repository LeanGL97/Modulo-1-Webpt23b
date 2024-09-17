// describe("demo", function () {
//   it("Este test debe pasar siempre", function () {
//     expect(4 + 2).toBe(6);
//   });
// });

const { Activity, Repository } = require("../scripts/modelos");

describe("Repository", () => {
  const newRepository = new Repository();

  it("Repository debería ser una clase", () => {
    expect (typeof Repository).toBe("function");
  });

  it("Debería ser una instancia de la clase repository", () => {
    expect (newRepository instanceof Repository).toBe(true);
  });

  it("Debería tener un método llamado getAllActivities", () => {
    expect (newRepository.getAllActivities).toBeDefined;
  });

  it("Debería tener un método llamado createActivity", () => {
    expect (newRepository.createActivity).toBeDefined;
  });

  it("Debería tener un método llamado deleteActivity", () => {
    expect (newRepository.deleteActivity).toBeDefined;
  });

  it("El método createActivity debería poder agregar un elemento a la lista", () => {
    newRepository.createActivity("title test", "description test", "www.urltest.com");

    expect (newRepository.getAllActivities().length).toBe(1);
  });

})