import Column from "../src/Column";

test("Deve criar uma coluna", function () {
    const column = new Column("Coluna A", true);
    expect(column.name).toBe("Coluna A");
    expect(column.hasEstimative).toBeTruthy();
})