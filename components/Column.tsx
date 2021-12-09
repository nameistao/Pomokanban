import styled from "styled-components";
import Task from "components/Task";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 20px;
  width: 30%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
  text-align: center;
`;
const TaskList = styled.div<{ ref: any; isDraggingOver: any }>`
  padding: 8px;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "white")};
  flex-grow: 1;
  min-height: 100px;
  overflow: scroll;
  border-radius: 20px;
`;

interface IProps {
  column: { title: string; id: string };
  tasks: Array<{ id: string; content: string }>;
  taskData: { columnOrder: Array<string>; columns: object; tasks: any };
  setTaskData: Function;
}

const Column = ({ column, tasks, taskData, setTaskData }: IProps) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <Task
                key={task.id}
                task={task}
                index={index}
                taskData={taskData}
                setTaskData={setTaskData}
              />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
