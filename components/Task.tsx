import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div<{ ref: any; isDragging: any; color: string }>`
  padding: 8px;
  border: ${(props) => (props.isDragging ? "1px #fff solid" : "none")};
  margin-bottom: 8px;
  background-color: ${(props) => props.color};
  border-radius: 7.5px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  transition: all 0.7s ease;
`;

const RemoveButton = styled.button`
  height: 25x;
  width: 25px;
  background-color: inherit;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 15px;
  :hover {
    cursor: pointer;
  }
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
          color={colorScheme[0]}
        >
          {task.content}
          <RemoveButton onClick={removeTaskHandler}>x</RemoveButton>
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
