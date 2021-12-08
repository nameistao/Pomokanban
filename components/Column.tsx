import styled from "styled-components";
import Task from "components/Task";

const Container = styled.div`
  margin: 8px;
  border: 1ps solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

interface IProps {
  column: { title: string };
  tasks: Array<{ id: string; content: string }>;
}

const Column = ({ column, tasks }: IProps) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <TaskList>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </TaskList>
    </Container>
  );
};

export default Column;
