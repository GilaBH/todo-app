import React from 'react';
import Cross from '../images/icon-cross.svg';
import { Draggable } from 'react-beautiful-dnd';

export default function Task({tasks, deleteTask, content, id, toggleTaskCompleted, completed, index}) {
    
        const task = (
                <li 
                className="task">
                    <div className="taskContent">
                    <input 
                    id={id}
                    type="checkbox" 
                    onChange={()=> toggleTaskCompleted(id)}
                    defaultChecked={completed}
                    className={completed ? "gradient": null}
                    />
                    <p className={completed ? "crossout" : null}>{content}</p>
                    </div>
                    <img src={Cross} onClick={()=>deleteTask(id)}/>
                </li>
            )
        
    return (
        <Draggable draggableId={id.toString()} index={index}>
            {(provided) => (
                <div 
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}>
                    {task}
                </div>
            )}
        </Draggable>
    )
}
