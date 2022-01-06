import { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Issue from '../Issue/Issue';

import './DragAndDropList.css';

function DragAndDropList(props) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(props.items);
  }, [props.items]);
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const tmpItems = Array.from(items);
    const [reorderedItem] = tmpItems.splice(result.source.index, 1);
    tmpItems.splice(result.destination.index, 0, reorderedItem);
    setItems(tmpItems);
  }

  console.log('props.items', props.items);
  console.log('items', items);

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId='items'>
        {(provided) => (
          <div
            className='items'
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {items.map(({ id, title, project, category, priority }, index) => (
              <Draggable
                key={id.toString()}
                draggableId={id.toString()}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Issue
                      title={title}
                      id={id}
                      project={project}
                      category={category}
                      priority={priority}
                    />
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
