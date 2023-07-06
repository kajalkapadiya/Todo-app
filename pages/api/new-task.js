import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://kajalkapadiya:kajalkapadiya@cluster0.fnq4zdn.mongodb.net/todoList?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("todoList");

    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Task inserted!" });
  }
}

export default handler;
