// const express = require("express");
// const app = express();
// const port = 3000;
// const fs = require("fs");

// app.use(express.json());

// app.get("/todo",async (req, res) => {
//   try {
//     const data =  await fs.readFileSync("./user.json", "utf-8");
//     res.status(200).json(JSON.parse(data));
//   } catch (error) {
//     res.status(500).send("Алдаа гарлаа: ");
//   }
// });

//   const data = await fs.readFileSync("./user.json","utf-8")
//  const dataJSON = JSON.parse(data)

// app.post("/post", async (req,res) => {
//   try{
//   const data = await fs.readFileSync("./user.json","utf-8")
//  const dataJSON = JSON.parse(data)

//  const {password,email,phone} = req.body
//  if(!email){
//   return res.status(400).send("password zaaval shardlage tai")
//  }

//  const result = dataJSON.find((el) => el.email === email)

//  if(result) {
//   return res.status(400).send("iim email  tei hereglegch baina")
//  }

//  dataJSON.push(req.body)

//   fs.writeFileSync("./user.json", JSON.stringify(dataJSON, null, 2), "utf-8");

//   res.status(201).json({ message: "amjilttai",data:req.body})
// }catch(error){
//   res.status(500).send("Алдаа гарлаа: ");
// }
// });

// app.listen(port, () => {
//   console.log(`Express server is running on http://localhost:${port}`);
// });

const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/todo", async (req, res) => {
  try {
    const data = await fs.readFile("./user.json", "utf-8");
    res.status(200).json(JSON.parse(data));
  } catch (error) {
    res.status(500).send("Алдаа гарлаа: " + error.message);
  }
});

app.post("/post", async (req, res) => {
  try {
    const data = await fs.readFile("./user.json", "utf-8");
    const dataJSON = JSON.parse(data);

    const { password, email, phone, lastname, firstname, username } = req.body;
    if (!email) {
      return res.status(400).send("email заавал шаардлагатай");
    }

    const result = dataJSON.find((el) => el.email === email);

    if (result) {
      return res.status(400).send("Ийм email-тай хэрэглэгч аль хэдийн байна");
    }

    if (!phone) {
      return res.status(400).send("phone zaaval shardlagatai");
    }

    const resul = dataJSON.find((el) => el.phone === phone);
    if (resul) {
      return res.status(400).send("iim utas burtgegdsen bn");
    }

    dataJSON.push(req.body);

    await fs.writeFile(
      "./user.json",
      JSON.stringify(dataJSON, null, 2),
      "utf-8"
    );

    res.status(201).json({ message: "Амжилттай нэмэгдлээ", data: req.body });
  } catch (error) {
    res.status(500).send("Алдаа гарлаа: " + error.message);
  }
});

app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`);
});

// app.get("/add", (req, res) => {
//   const data = fs.readFileSync("./user.json", "utf-8");
//   res.send(data);
// });

// app.post("/add", async (req, res) => {
//   fs.writeFileSync("./user.json", JSON.stringify(req.body), "utf-8");

//   res.send("amjilttai ");
// });
// app.put("/add", async (req, res) => {
//   const data = fs.readFileSync("./user.json", "utf-8");
//   const result = JSON.parse(data);
//   dataJSON = { ...result, username: "tengis" };
//   await fs.writeFileSync("./user.json", JSON.stringify(dataJSON), "utf-8");
//   res.send("username soligdsn");
// });
// app.delete("/add", async (req, res) => {
//   const data = await fs.readFileSync("./user.json", "utf-8");
//   const result = JSON.parse(data);
//   const { lastname, ...rest } = result;
//   const dataJSON = rest;
//   await fs.writeFileSync("./user.json", JSON.stringify(dataJSON), "utf-8");

//   res.send("ustgsan");
// });

// app.post("/user", async (req, res) => {
//   try {
//     const data = fs.readFileSync("./user.json", "utf-8");
//     res.send(data);
//   } catch (error) {
//     res.status(400).send("tanii ter buruu baina aaaaaaa");
//   }
// });
// -----------------------------------------------------------------------
// app.get("/movie/similar", (req, res) => {
//   res.status(200).json([
//     {
//       id: "1,2,3",
//       title: "hunter",
//       description: "hunters laufen",
//     },
//     {
//       id: "1,2,3",
//       title: "hunter",
//       description: "hunters laufen",
//     },
//     {
//       id: "1,2,3",
//       title: "hunter",
//       description: "hunters laufen",
//     },
//     {
//       id: "1,2,3",
//       title: "hunter",
//       description: "hunters laufen",
//     },
//     {
//       id: "1,2,3",
//       title: "hunter",
//       description: "hunters laufen",
//     },
//   ]);
// });

// app.post("/movie", (req, res) => {
//   res.send("shine kino nemegden");
// });
// const array = [1, 2, 3, 4, 5];

// app.get("/test", (req, res) => {
//   res.status(200).send(array);
// });

// app.post("/init", (req, res) => {
//   array.push();
//   res.send("Succesfully reseter");
// });

// app.post("/test", (req, res) => {
//   const Movie = req.body;
//   array.push(Movie);
//   res.send("amjilltao");
// });
//-----------------------------------
// app.get("/iren", (req, res) => {
//   res.status(200).send(array);
// });

// app.get("/todo", async (req, res) => {
//   try {
//     const data = await fs.readFileSync("./user.json", "utf-8");
//     const todo = JSON.parse(data);
//     res.json(todo);
//   } catch (error) {
//     res.json([]);
//   }
// });

// app.post("/user", async (req, res) => {
//   try {
//     const { task, username } = req.body;
//     const array = [];
//     try {
//       const data = await fs.readFileSync("./user.json", "utf-8");
//       array = JSON.parse(data);
//     } catch (error) {
//       return res.send("aldaa garlaa");
//     }

//     const newid = array.length > 0 ? array[array.length - 1].id + 1 : 1;
//     const newtodo = {
//       id: newid,
//       task,
//       username,
//       isDone: false,
//     };

//     array.push(newtodo);
//     await fs.writeFileSync("./user.json", JSON.stringify(array, 2), "utf-8");
//     res.status(200).send("Ok");
//   } catch (error) {
//     res.status(400).send("aldaa");
//   }
// });

// app.put("/todo", async (req, res) => {
//   try {
//     const id = parseInt(req.params.id);
//     const { task, username, isDone } = req.body;

//     const data = await fs.readFileSync("./user.json", "utf-8");
//     const todos = JSON.parse(data);

//     const result = todos.findIndex((t) => t.id === id);
//     if (result === -1) return res.status(400).send("oldsongui");

//     if (task !== undefined) todos[result].task = task;
//     if (username !== undefined) todos[result].username = username;
//     if (isDone !== undefined) todos[result].isDone = isDone;

//     await fs.writeFileSync("./user.json", JSON.stringify(todos, 2), "utf-8");
//     res.json(todos[index]);
//   } catch (error) {
//     res.status(500).send("todo shinchlen ");
//   }
// });

// app.delete("/add", async (req, res) => {
//   const data = await fs.readFileSync("./user.json", "utf-8");
//   const result = JSON.parse(data);
//   const { id, ...rest } = result;
//   const dataJSON = rest;
//   await fs.writeFileSync("./user.json", JSON.stringify(dataJSON), "utf-8");
//   res.send("delete");
// });

// app.delete("/todo/", async (req, res) => {
//   try {
//     const id = parseInt(req.params.id);
//     const data = fs.readFileSync("./user.json", "utf-8");
//     let result = JSON.parse(data);
//     result = result.filter((todo) => todo.id !== id);
//     fs.writeFileSync("./user.json", JSON.stringify(todos, null, 2), "utf-8");
//     res.send("Deleted");
//   } catch (error) {
//     res.status(500).send("Ustgahad aldaa garlaa");
//   }
// });
