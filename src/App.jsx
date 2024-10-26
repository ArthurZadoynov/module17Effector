import TodoList from "./components/TodoList"

function App() {

  return (
    <>
     <main>
      <div className="container mx-auto my-20 p-8 bg-white rounded-3xl">
        <h1 className="text-4xl font-bold">Todo list</h1>
        <TodoList />
      </div>
     </main>
    </>
  )
}

export default App
