const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  return (
    <div calssName="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
};

export default Task;
