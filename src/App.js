import React, {useState} from 'react';
import AddTask from './components/AddTask'
import Task from './components/Task'
import FilterButtons from './components/FilterButtons'
import { DragDropContext, Droppable} from 'react-beautiful-dnd'
import { nanoid } from 'nanoid';
import {ThemeProvider} from 'styled-components';
import { useDarkMode } from './components/useDarkMode'
import {GlobalStyles} from './components/globalStyles';
import {lightTheme, darkTheme} from './components/Theme';
import Toggle from './components/Toggler'

const filters = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task=> task.completed
};

const filterNames = Object.keys(filters);

export default function App() {
  
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('All')
  const [theme, themeToggler] = useDarkMode();

  const taskList= tasks
    .filter(filters[filter])
    .map(task => 
        <Task 
        tasks={tasks} 
        deleteTask={deleteTask}
        id={task.id} 
        content={task.content}
        toggleTaskCompleted={toggleTaskCompleted}
        completed={task.completed}
        index={tasks.indexOf(task)}
        key={task.id.toString()}
       />)


  const filterList = filterNames.map(name=> 
    <FilterButtons 
      key={name}
      name={name}
      setFilter={setFilter}
    />)

  function addTask(content) {
    const newTask = {id: nanoid(), content: content, completed: false}
    setTasks([...tasks, newTask])
  }
  
  function deleteTask(id) {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if(id==task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    })
    setTasks(updatedTasks);

  }

  function handleClearCompleted(){
    const activeTasks = tasks.filter(task => !task.completed) 
    setTasks(activeTasks)
  }
  

  function handleDragEnd(result) {
    if (!result.destination) return; 
    const items = Array.from(tasks)
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTasks(items)
  }

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const counter = tasks.length
  const counterNoun = tasks.length == 1 ? 'item' : 'items'

  console.log(tasks)
  return (
    <ThemeProvider theme={themeMode}>
    <div className="container">
    <GlobalStyles />
      <div className="heading">
        <h1>Todo</h1>
        <Toggle theme={theme} toggleTheme={themeToggler} />
      </div>
    <AddTask addTask={addTask}/>
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="drop-area">
        {(provided) => (
          <ul
          {...provided.droppableProps} ref={provided.innerRef}>
          {taskList} 
          {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
    <div className="bottomStats">
      <p>{counter} {counterNoun} left</p>
      <div className="buttons">
        {filterList}
        <button onClick={handleClearCompleted}> Clear Completed</button>
      </div>
    </div>
    <footer>Drag and drop to reorder list</footer>
    </div>
    </ThemeProvider>
  )
}
