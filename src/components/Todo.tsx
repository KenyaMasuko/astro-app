import { useState } from "react";

export const Todo = () => {
const todos = [
  { id: 1, title: 'foo', isDone: false},
  { id: 2, title: 'bar', isDone: false},
  { id: 3, title: 'baz', isDone: false}
]
  const [count, setCount] = useState(0);
  const up = () => {
    setCount(count + 1)
  }

  return (
    <div className='text-center bg-red-600'>
      {todos?.map(({id, title, isDone}) => (
        <div key={id}>
        <label htmlFor={title}>
          {title}
        </label>
        <input type="checkbox" checked={isDone}  id={title} />
        </div>
      ))}
    </div>
  )
}
