import express from "express";
import pgp from "pg-promise";
import Board from "./entity/Board";
import Column from "./entity/Column";
import Card from "./entity/Card";

const app = express();
const connection = pgp()("postgres://postgres:postgrespw@localhost:49153/")


app.get("/boards", async function (req, res) {
    const boardsData = await connection.query("select * from branas.board", [])
    const boards: Board[] = [];
    for (const boardData of boardsData) {
        boards.push(new Board(boardData.name));
    }
    res.json(boards);
})

app.get("/boards/:idBoard/columns", async function (req, res) {
    const columnsData = await connection.query("select * from branas.column where id_board = $1", [req.params.idBoard]);
    const columns: Column[] = [];
    for (const columnData of columnsData) {
        columns.push(new Column(columnData.name, columnData.has_estimative));
    }
    res.json(columns);
})

app.get("/boards/:idBoard/columns/:idColumn/cards", async function (req, res) {
    const cardsData = await connection.query("select * from branas.card where id_column = $1", [req.params.idColumn]);
    const cards: Card[] = [];
    for (const cardData of cardsData) {
        cards.push(new Card(cardData.title, cardData.estimative));
    }
    res.json(cards);
})


app.listen(3000);
console.info("###### ~ Application running on port 3k ~ ######");
