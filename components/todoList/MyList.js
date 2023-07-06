import MyListItem from "./MyListItem";

function MyList(props) {
  return (
    <ul>
      {props.meetups.map((meetup) => (
        <MyListItem key={meetup.id} id={meetup.id} task={meetup.task} />
      ))}
    </ul>
  );
}

export default MyList;
