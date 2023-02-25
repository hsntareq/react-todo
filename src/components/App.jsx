import '../App.scss';

function App() {
  return (
    <div className="App shadow-lg p-5 mt-20 border rounded">
      <div className="todo_app">
        <h1 className="mb-3">Todo App</h1>
        <input
          className="border-b w-full py-2 px-3 focus:outline-none focus:ring-1 focus:ring-gray-100 ring-inset"
          type="text"
          placeholder="What do you need to do?"
        />
        <ul className="divide-y divide-slate-200">
          <li className="flex flex-row justify-between items-center">
            <input className="cursor-pointer" type="checkbox" id="it1" />
            <label className="cursor-pointer flex-1 p-3" htmlFor="it1">
              Finish React series
            </label>
            <button className="button p-2">✕</button>
          </li>
          <li className="flex flex-row justify-between items-center">
            <input className="cursor-pointer" type="checkbox" id="it2" />
            <label className="cursor-pointer flex-1 p-3" htmlFor="it2">
              Finish React series
            </label>
            <button className="button p-2">✕</button>
          </li>
          <li className="flex flex-row justify-between items-center">
            <input className="cursor-pointer" type="checkbox" id="it3" />
            <label className="cursor-pointer flex-1 p-3" htmlFor="it3">
              Finish React series
            </label>
            <button className="button p-2">✕</button>
          </li>
          <li className="flex flex-row justify-between items-center">
            <input className="cursor-pointer" type="checkbox" id="it4" />
            <label className="cursor-pointer flex-1 p-3" htmlFor="it4">
              Finish React series
            </label>
            <button className="button p-2">✕</button>
          </li>
          <li className="flex flex-row justify-between items-center">
            <input className="cursor-pointer" type="checkbox" id="it5" />
            <label className="cursor-pointer flex-1 p-3" htmlFor="it5">
              Finish React series
            </label>
            <button className="button p-2">✕</button>
          </li>
        </ul>

        <div className="border-t border-b flex justify-between py-3 items-center">
          <button className="border px-3 py-1 rounded-md hover:bg-slate-100 active:bg-slate-200">
            Check All
          </button>
          <span>3 items remaining</span>
        </div>
        <div className="flex justify-between pt-3">
          <div className="flex gap-1">
            <button className="border px-3 py-1 rounded-md hover:bg-slate-100 active:bg-slate-200">
              All
            </button>
            <button className="border border-transparent hover:border-inherit hover:border px-3 py-1 rounded-md hover:bg-slate-100 active:bg-slate-200">
              Active
            </button>
            <button className="border border-transparent hover:border-inherit hover:border px-3 py-1 rounded-md hover:bg-slate-100 active:bg-slate-200">
              Completed
            </button>
          </div>
          <div>
            <button className="border px-3 py-1 rounded-md hover:bg-slate-100 active:bg-slate-200">
              Clear completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
