import Column from "./Column";

export default class Board {

    columns: Column[] = [];

    constructor(name: string, description: string) {

    }


    addColumns(newColumn: Column) {
        this.columns.push(newColumn);
    }
}