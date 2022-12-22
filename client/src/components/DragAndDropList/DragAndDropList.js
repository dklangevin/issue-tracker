import { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Issue from '../Issue/Issue';
import './DragAndDropList.css';

function DragAndDropList(props) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(props.items);
  }, [props.items]);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const _items = reorder(
      items,
      result.source.index,
      result.destination.index
    );
    setItems(_items);
  };

  const getItemStyle = (isDragging, draggableStyle) => ({
    padding: 4,
    ...draggableStyle,
  });

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((issue, i) => (
              <Draggable
                key={issue.id.toString()}
                draggableId={issue.id.toString()}
                index={i}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    <Issue issue={issue} isDragging={snapshot.isDragging} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default DragAndDropList;
