import styled from "styled-components";

const Container = styled.div`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
`;

interface IProps {
  key: string;
  task: { content: string };
}

const Task = ({ key, task }: IProps) => {
  return <Container>{task.content}</Container>;
};

export default Task;
