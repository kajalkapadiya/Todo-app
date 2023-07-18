import { useRouter } from "next/router";
import MyListItem from "./MyListItem";
import styles from "./MyList.module.css";
import { useState } from "react";

function MyList(props) {
  const [meetups, setMeetups] = useState(props.meetups);

  const router = useRouter();
  const goToAddTask = () => {
    router.push("/new-task");
  };

  const handleDelete = (taskId) => {
    // Update the state to remove the deleted task
    const updatedMeetups = meetups.filter((meetup) => meetup.id !== taskId);
    setMeetups(updatedMeetups);
  };

  return (
    <div className={styles.card}>
      <div>
        <div className={styles.header}>
          <h1>Today</h1>
          <button className={styles.addButton} onClick={goToAddTask}>
            +
          </button>
        </div>
        <div>
          <ul className={styles.list}>
            {meetups.map((meetup) => (
              <MyListItem
                key={meetup.id}
                id={meetup.id}
                task={meetup.task}
                completed={meetup.completed}
                onDelete={handleDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyList;
