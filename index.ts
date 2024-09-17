import express from "express";
import cors from "cors";
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 4000;

const styles = "color: purple; line-height: 100vh; text-align: center; margin: 0; font-family: sans-serif;"

app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
    res.send(`<body style="margin: 0;"><h1 style="${styles}">Welcome to Planet! 🪐</h1></body>`);
});

app.post('/', (req, res, next) => {
    console.log(`Request Body: \n\n`, req.body);
    res.send(req.body);
});

app.patch('/', (req, res, next) => {
    console.log(`Request Body: \n\n`, req.body);
    res.send(req.body);
});

app.put('/', (req, res, next) => {
    console.log(`Request Body: \n\n`, req.body);
    res.send(req.body);
});

app.delete('/', (req, res, next) => {
    console.log(`Request Body: \n\n`, req.body);
    res.send(req.body);
});

app.listen(port, () => console.log(`Planet Server API running at [:: => http://localhost:${port} <=::]`));