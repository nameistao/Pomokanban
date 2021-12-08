import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div<{ ref: any; isDragging: any }>`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "white")};
`;

interface IProps {
  task: { content: string; id: string };
  index: any;
}

const Task = ({ task, index }: IProps) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {task.content}
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
