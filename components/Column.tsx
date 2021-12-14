//packages
import { FC } from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
//components
import Task from "components/Task";

const Container = styled.div`
  margin: 8px;
  border-radius: 4px;
  width: 30%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
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
  border-radius: 4px;
`;

interface IProps {
  column: { title: string; id: string };
  tasks: Array<{ id: string; content: string }>;
  taskData: { columnOrder: Array<string>; columns: object; tasks: any };
}

const Column: FC<IProps> = ({ column, tasks, taskData }) => {
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
