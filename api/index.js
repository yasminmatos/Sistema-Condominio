import express from "express";
import userRotas from "./routes/users.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

//app.get('/', (req, resp) => resp.send('API Rodando'));
app.use("/", userRotas);

app.listen(8800);


//const PORTA = process.env.PORTA || 5000;

//app.listen(PORTA, () => console.log(`Server started on port: ${PORTA}`));