import styled from "styled-components";
import Column from "components/Column";
import { DragDropContext } from "react-beautiful-dnd";
import NoSSR from "react-no-ssr";

const StyledSection = styled.section`
  width: 60vw;
  height: 45vh;
  background: #fff;
  color: black;
  margin: 2.5vh auto auto auto;
  border-radius: 20px;
`;

interface IProps {
  taskData: { columnOrder: Array<string>; columns: object; tasks: object };
}

const Tasks = ({ taskData }: IProps) => {
  const onDragEndHandler = () => {
    //TODO
  };

  return (
    <StyledSection>
      <NoSSR>
        <DragDropContext onDragEnd={onDragEndHandler}>
          {taskData.columnOrder.map((columnId) => {
            const column = taskData.columns[columnId];
            const tasks = column.taskIds.map(
              (taskId) => taskData.tasks[taskId]
            );
            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </DragDropContext>
      </NoSSR>
    </StyledSection>
  );
};

export default Tasks;
