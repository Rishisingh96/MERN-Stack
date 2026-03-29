import { TodoList } from './component/TodoList';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export const App = () => {
  return (
    <section className="container">
      <TodoList />
    </section>
  )
}


