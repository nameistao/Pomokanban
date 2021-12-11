import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div<{ ref: any; isDragging: any; color: string }>`
  padding: 8px;
  border: ${(props) => (props.isDragging ? "1px #fff solid" : "none")};
  margin-bottom: 8px;
  background-color: ${(props) => props.color};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  transition: all 0.7s ease;
`;

const RemoveButton = styled.button`
  height: 25x;
  width: 15%;
  background-color: inherit;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 15px;
  :hover {
    cursor: pointer;
  }
`;

const TaskText = styled.div`
  overflow-wrap: break-word;
  max-width: 82.5%;
`;

interface IProps {
  task: { content: string; id: string };
  index: any;
  taskData: { columnOrder: Array<string>; columns: object; tasks: any };
  setTaskData: Function;
  colorScheme: Array<string>;
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

const Task = ({ task, index, taskData, setTaskData, colorScheme }: IProps) => {
  const removeTaskHandler = async () => {
    const idToRemove = task.id;
    const newTasks = taskData.tasks;
    delete newTasks[idToRemove];
    console.log(removeTaskFromColumns(taskData.columns, idToRemove));
    await setTaskData({
      ...taskData,
      tasks: newTasks,
      columns: removeTaskFromColumns(taskData.columns, idToRemove),
    });
    localStorage.setItem("taskData", JSON.stringify(taskData));
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          color={colorScheme[0]}
        >
          <TaskText>{task.content}</TaskText>
          <RemoveButton onClick={removeTaskHandler}>x</RemoveButton>
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
