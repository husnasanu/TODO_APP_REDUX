import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleComplete, deleteTodo } from './slices/todoSlice';

function App() {
  const [todoText, setTodoText] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoText.trim()) {
      dispatch(addTodo({
        id: Date.now(),
        text: todoText,
        completed: false,
      }));
      setTodoText('');
    }
  };

  const incompleteTodos = todos.filter(todo => !todo.completed);
  
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div style={{ maxWidth: "100vh" }} className="App container mt-5">
  <h1>ToDo App</h1>

  {/* Input and Add Button */}
  <div  style={{ display: "flex", alignItems: "center" }}>
    <input className='form-control'
      value={todoText}
      onChange={(e) => setTodoText(e.target.value)}
      type="text"
      placeholder="Enter Todo "
      style={{ padding: "8px", marginRight: "10px", marginLeft: "80px" }} />
    <button
      onClick={handleAddTodo} className='btn btn-success'
      style={{ padding: "8px 16px" }}>
      Add Todo
    </button>
  </div>

 
  <h2 className='fst-italic my-3'>Todo List</h2> 
  <table className="table mt-3">
    <thead>
      <tr>
        <th>Todos</th>
        <th>Completed Todos</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        
        <td style={{ verticalAlign: "top" }}>
          {incompleteTodos.length > 0 ? (
            incompleteTodos.map((todo) => (
              <div key={todo.id} className="mb-2">
                <div>{todo.text}</div>
                <div className="mt-2">
                  <button
                    className="btn btn-success"
                    onClick={() => dispatch(toggleComplete(todo.id))}
                  >
                    {todo.completed ? "Undo" : "Complete"}
                  </button>
                  <button
                    className="btn btn-danger ms-3"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No incomplete todos</p>
          )}
        </td>

    
        <td style={{ verticalAlign: "top" }}>
          {completedTodos.length > 0 ? (
            completedTodos.map((todo) => (
              <div key={todo.id} className="mb-2">
                <div>{todo.text}</div>
                <div className="mt-2">
                  <button
                    className="btn btn-danger ms-3"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                  > 
                    Delete
                  </button>

                    {/* <i class="fa-solid fa-check text-success fw-bolder"></i> */}
                </div>
              </div>
            ))
          ) : (
            <p>No completed todos</p>
          )}
        </td>
      </tr>
    </tbody>
  </table>
</div>
  );
}

export default App;