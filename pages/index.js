import MyList from "@/components/todoList/MyList";
import Head from "next/head";
import { Fragment } from "react";
import { MongoClient } from "mongodb";

export default function Home(props) {
  return (
    <>
      <Fragment>
        <Head>
          <title>My Todo App</title>
          <meta name="description" content="Browse your work for today!"></meta>
        </Head>
        {!props.meetups.completed && <MyList meetups={props.meetups} />}
      </Fragment>
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://kajalkapadiya:kajalkapadiya@cluster0.fnq4zdn.mongodb.net/todoList?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("todoList");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        task: meetup.task,
        completed: meetup.completed,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
