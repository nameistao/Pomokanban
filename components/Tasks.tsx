import styled from "styled-components";
import Column from "components/Column";
import { DragDropContext } from "react-beautiful-dnd";
import NoSSR from "react-no-ssr";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 85%;
`;

const StyledSection = styled.section`
  width: 60vw;
  height: 45vh;
  background: #fff;
  color: black;
  margin: 2.5vh auto auto auto;
  border-radius: 20px;
`;

const AddRow = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-evenly;
`;

const AddInput = styled.input`
  height: 75%;
  width: 75%;
  border: none;
  border-bottom: 2px solid black;
  :focus {
    outline: none;
  }
  caret-color: transparent;
`;

const AddButton = styled.button`
  height: 75%;
  width: 7.5%;
`;

interface IProps {
  taskData: { columnOrder: Array<string>; columns: object; tasks: any };
  setTaskData: Function;
}

const Tasks = ({ taskData, setTaskData }: IProps) => {
  const [addValue, setAddValue] = useState();

  const addValueOnChangeHandler = (e) => {
    setAddValue(e.target.value);
  };

  const addTaskHandler = () => {
    const keyName = uuidv4();
    const tasks = {
      [keyName]: { id: keyName, content: addValue },
      ...taskData.tasks,
    };
    const columns = {
      ...taskData.columns,
      "column-1": {
        id: "column-1",
        title: "To Do",
        taskIds: [keyName, ...taskData.columns["column-1"].taskIds],
      },
    };
    setTaskData({
      tasks: tasks,
      columns: columns,
      columnOrder: taskData.columnOrder,
    });
  };

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
              return (
                <Column
                  key={column.id}
                  column={column}
                  tasks={tasks}
                  taskData={taskData}
                  setTaskData={setTaskData}
                />
              );
            })}
          </Container>
        </DragDropContext>
      </NoSSR>
      <AddRow>
        <AddInput type="text" onChange={addValueOnChangeHandler}></AddInput>
        <AddButton onClick={addTaskHandler}>+</AddButton>
      </AddRow>
    </StyledSection>
  );
};

export default Tasks;
