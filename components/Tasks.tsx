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

const StyledSection = styled.section<{ color: string }>`
  width: 50vw;
  height: 54.5vh;
  background-color: ${(props) => props.color};
  margin: 0 auto 0 auto;
  border-radius: 6px;
  transition: background-color 0.7s ease;
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
  border-bottom: 2px solid #fff;
  :focus {
    outline: none;
    ::placeholder {
      color: transparent;
    }
  }
  caret-color: #fff;
  background-color: inherit;
  color: #fff;
  font-size: 25px;
  ::placeholder {
    color: #fff;
    opacity: 0.3;
  }
  text-align: center;
`;

interface IProps {
  taskData: { columnOrder: Array<string>; columns: object; tasks: any };
  setTaskData: Function;
  colorScheme: Array<string>;
}

const Tasks = ({ taskData, setTaskData, colorScheme }: IProps) => {
  const [addValue, setAddValue] = useState("");

  const onEnterHandler = (event) => {
    if (event.charCode === 13) {
      addTaskHandler();
      setAddValue("");
    }
  };

  const addValueOnChangeHandler = async (e) => {
    setAddValue(e.target.value);
  };

  const addTaskHandler = async () => {
    if (addValue === undefined || addValue === null || addValue === "") {
      return;
    }

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
    <NoSSR>
      <StyledSection color={colorScheme[1]}>
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
                  colorScheme={colorScheme}
                />
              );
            })}
          </Container>
        </DragDropContext>

        <AddRow>
          <AddInput
            value={addValue}
            type="text"
            onChange={addValueOnChangeHandler}
            placeholder="Add To Do 	
            &#8629;"
            required
            onKeyPress={onEnterHandler}
          ></AddInput>
        </AddRow>
      </StyledSection>
    </NoSSR>
  );
};

export default Tasks;
