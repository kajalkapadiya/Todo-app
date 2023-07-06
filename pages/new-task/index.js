// all the list of todo
// button - todoList form

import { useRouter } from "next/router";
import TodoListForm from "@/components/todoList/TodoListForm";
import { Fragment } from "react";
import Head from "next/head";

const NewTask = () => {
  const router = useRouter();
  const addHandler = async (taskData) => {
    const response = await fetch("/api/new-task", {
      method: "POST",
      body: JSON.stringify(taskData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  };

  return (
    <Fragment>
      <Head>
        <title>Add New Task</title>
        <meta name="description" content="adding new task" />
      </Head>
      <TodoListForm addTask={addHandler} />
    </Fragment>
  );
};

export default NewTask;
