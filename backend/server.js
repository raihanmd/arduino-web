import { SerialPort } from "serialport";
import { ReadlineParser } from "@serialport/parser-readline";
import { Server } from "socket.io";
import http from "http";
import express from "express";
import cors from "cors";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(cors());

io.on("connection", (socket) => {
  console.log("connected");
  socket.on("disconnect", () => {
    console.log("disconnect");
  });
});

app.listen(3000, () => {
  console.log("server on...");
});

const port = new SerialPort({
  path: "COM3",
  baudRate: 9600,
});

const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));
parser.on("data", (res) => {
  io.emit("data", { data: res });
});

app.post("/arduino", (req, res) => {
  const data = req.body.data;
  port.write(data, (err) => {
    if (err) res.status(500).json({ message: `error: ${err}` });
    res.end();
  });
});
