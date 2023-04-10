import Todo from './components/Todo';
import './App.css';

const todoArr = [
  {
    item: "Bug Grocery"
  },
  {
    item: "Send Email"
  },
  {
    item: "Finish Assignement"
  },
  {
    item: "Write Blog"
  },
  {
    item: "Bake Cake"
  }
]

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <Todo
        item={todoArr[0].item}
      />
      <Todo
        item={todoArr[1].item}
      />
      <Todo
        item={todoArr[2].item}
      />
      <Todo
        item={todoArr[3].item}
      />
      <Todo
        item={todoArr[4].item}
      />
    </div>
  );
}

export default App;
