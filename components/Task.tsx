import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div<{ ref: any; isDragging: any }>`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "white")};
  border-radius: 7.5px;
  display: flex;
  justify-content: space-between;
`;

const RemoveButton = styled.button`
  height: 80%;
  width: 25px;
`;

interface IProps {
  task: { content: string; id: string };
  index: any;
  taskData: { columnOrder: Array<string>; columns: object; tasks: any };
  setTaskData: Function;
}

const removeTaskFromColumns = (columns, idToRemove) => {
  for (const colKey in columns) {
    const arr = columns[colKey].taskIds;
    const index = arr.indexOf(idToRemove);
    if (index > -1) {
      arr.splice(index, 1);
    }
    columns[colKey].taskIds = arr;
  }
  return columns;
};

const Task = ({ task, index, taskData, setTaskData }: IProps) => {
  const removeTaskHandler = () => {
    const idToRemove = task.id;
    const newTasks = taskData.tasks;
    delete newTasks[idToRemove];
    console.log(removeTaskFromColumns(taskData.columns, idToRemove));
    setTaskData({
      ...taskData,
      tasks: newTasks,
      columns: removeTaskFromColumns(taskData.columns, idToRemove),
    });
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {task.content}
          <RemoveButton onClick={removeTaskHandler}>x</RemoveButton>
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
