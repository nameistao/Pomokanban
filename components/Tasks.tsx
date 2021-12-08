import styled from "styled-components";
import Column from "components/Column";
import { DragDropContext } from "react-beautiful-dnd";
import NoSSR from "react-no-ssr";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
`;

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
  setTaskData: Function;
}

const Tasks = ({ taskData, setTaskData }: IProps) => {
  const onDragEndHandler = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = taskData.columns[source.droppableId];
    const finish = taskData.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...taskData,
        columns: {
          ...taskData.columns,
          [newColumn.id]: newColumn,
        },
      };

      setTaskData(newState);
      return;
    }

    //moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...taskData,
      columns: {
        ...taskData.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setTaskData(newState);
  };

  return (
    <StyledSection>
      <NoSSR>
        <DragDropContext onDragEnd={onDragEndHandler}>
          <Container>
            {taskData.columnOrder.map((columnId) => {
              const column = taskData.columns[columnId];
              const tasks = column.taskIds.map(
                (taskId) => taskData.tasks[taskId]
              );
              return <Column key={column.id} column={column} tasks={tasks} />;
            })}
          </Container>
        </DragDropContext>
      </NoSSR>
    </StyledSection>
  );
};

export default Tasks;
