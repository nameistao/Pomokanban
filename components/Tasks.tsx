import styled from "styled-components";
import Column from "components/Column";

const StyledSection = styled.section`
  width: 60vw;
  height: 45vh;
  background: #fff;
  color: black;
  margin: 2.5vh auto auto auto;
  border-radius: 7.5px;
`;

interface IProps {
  taskData: { columnOrder: Array<string>; columns: object; tasks: object };
}

const Tasks = ({ taskData }: IProps) => {
  return (
    <StyledSection>
      {taskData.columnOrder.map((columnId) => {
        const column = taskData.columns[columnId];
        const tasks = column.taskIds.map((taskId) => taskData.tasks[taskId]);
        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </StyledSection>
  );
};

export default Tasks;
