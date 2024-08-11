const express = require("express");
const mysql = require("mysql2/promise");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.listen(3001);
// app.use(bodyParser().json());
app.use(cors()); // 클라이언트에서 요청 허용함

const getStudents = async () => {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "qwer1234",
      database: "management",
    });

    const [results] = await connection.query(
      "SELECT * FROM STUDENT WHERE COURSE_ID = 1"
    );
    await connection.end();

    return results;
  } catch (error) {
    console.log(error);
  }
};

app.get("/api/student", async (req, res) => {
  res.json(await getStudents());
});

const get = async () => {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "qwer1234",
      database: "management",
    });

    const [results] = await connection.query(
      "SELECT * FROM STUDENT WHERE COURSE_ID = 1"
    );
    await connection.end();

    return results;
  } catch (error) {
    console.log(error);
  }
};

app.get("/api/student", async (req, res) => {
  res.json(await getStudents());
});
