import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "DELETE") {
    const { taskId } = req.body;
    const objectId = new ObjectId(taskId);

    console.log("req");
    console.log(taskId);

    const client = await MongoClient.connect(
      `mongodb+srv://kajalkapadiya:kajalkapadiya@cluster0.fnq4zdn.mongodb.net/todoList?retryWrites=true&w=majority`
    );

    const db = client.db();
    const todoCollection = db.collection("todoList");

    const result = await todoCollection.deleteOne({ _id: objectId });

    console.log(result);
    client.close();
    res.status(200).json({ message: "Task deleted!" });
  }
}

export default handler;
