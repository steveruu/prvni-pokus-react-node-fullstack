const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.listen(3000, () => {
    console.log(`Server listening on port 3000 🚀`);
});

app.get("/api", (req: any, res: any) => {
    res.json({ message: "Hello from server!" });
});

app.get("/api/reiser-smrdi", (req: any, res: any) => {
    res.json({ message: "jo reiser smrdi" });
});
