const server = express();
const { PORT = 4000 } = process.env;

server.use("/", express.static(path.join(__dirname, "build")));

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.js"));
});

server.listen(PORT, () => console.log(`Server on ${PORT}`));
