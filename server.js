const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;

// 建立MySQL連線
const db = mysql.createConnection({
  host: "bvqucbxf6nzpmgixgyev-mysql.services.clever-cloud.com",
  user: "ulxucuucze1v9c26",
  password: "opypS2PmfKu9qPTed0nT",
  database: "bvqucbxf6nzpmgixgyev",
});

// 連接到MySQL資料庫
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 建立一個簡單的API端點
app.get("/GetUserData", (req, res) => {
  const sql = "SELECT * FROM User"; // 替換成你的資料表名稱
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
