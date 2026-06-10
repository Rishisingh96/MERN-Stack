import React from 'react'
import { useSelector } from 'react-redux'

const DisplayCounter = () => {

  const counter = useSelector(store => store.counter);

  return (
    <p className="text-gray-700 text-lg md:text-2xl leading-relaxed mb-10">
         Counter current Value: {counter}
        </p>
  )
}

export default DisplayCounter
