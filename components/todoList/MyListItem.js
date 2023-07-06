function MyListItem(props) {
  return (
    <li>
      <div>
        <div>
          <h3>{props.task}</h3>
        </div>
      </div>
    </li>
  );
}

export default MyListItem;
