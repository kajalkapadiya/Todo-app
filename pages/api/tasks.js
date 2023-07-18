import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "PATCH") {
    const { completed, taskId } = req.body;
    const objectId = new ObjectId(taskId); 

    console.log("req");
    console.log(completed);

    const client = await MongoClient.connect(
      `mongodb+srv://kajalkapadiya:kajalkapadiya@cluster0.fnq4zdn.mongodb.net/todoList?retryWrites=true&w=majority`
    );

    const db = client.db();
    const todoCollection = db.collection("todoList");

    const result = await todoCollection.findOneAndUpdate(
      { _id: objectId },
      { $set: { completed: !completed } }
    );

    console.log(result);
    client.close();
    res.status(200).json({ message: "Task updated!" });
  }
}

export default handler;
