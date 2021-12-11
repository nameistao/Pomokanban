import styled from "styled-components";
import Task from "components/Task";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 8px;
  border-radius: 20px;
  width: 30%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
  text-align: center;
  color: #fff;
`;
const TaskList = styled.div<{ ref: any; isDraggingOver: any }>`
  padding: 8px;
  border: ${(props) => (props.isDraggingOver ? "2px #fff solid" : "none")};
  background-color: inherit;
  flex-grow: 1;
  min-height: 100px;
  overflow-y: scroll;
  border-radius: 20px;
`;

interface IProps {
  column: { title: string; id: string };
  tasks: Array<{ id: string; content: string }>;
  taskData: { columnOrder: Array<string>; columns: object; tasks: any };
  setTaskData: Function;
  colorScheme: Array<string>;
}

const Column = ({
  column,
  tasks,
  taskData,
  setTaskData,
  colorScheme,
}: IProps) => {
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
                colorScheme={colorScheme}
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
