import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" })
  }
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" })
  }

  const handlePrivacyToggle = () => {
    // Implement privacy toggle functionality here
    dispatch({ type: "TOGGLE_PRIVACY" });
  }


  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };



  return (
    <>
      <div className="flex justify-center gap-5 pt-2">

        <button onClick={handleIncrement} 
        type="button"
        className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300">
          +1
        </button>

        <button onClick={handleDecrement} 
        type="button"
        className="border border-gray-300 bg-white hover:bg-gray-100 active:scale-95 text-gray-700 px-8 py-3 rounded-xl text-lg font-semibold shadow-sm hover:shadow-md transition-all duration-300">
          -1
        </button>

        <button type='button' className="bg-gray-600 hover:bg-gray-700 active:scale-95 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300"
        onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>

      </div>

      {/* Input field */}
      <div>
        <input type="text" placeholder="Enter a value" className="mt-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-xs" 
        ref={inputElement}
        />

        <button type="button" className="mt-4 bg-green-600 hover:bg-green-700 active:scale-95 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300"
        onClick={handleAdd}
        >
          Add
        </button>

        <button type="button" className="mt-4 bg-red-600 hover:bg-red-700 active:scale-95 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300 "
        onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>


    </>

  )
}

export default Controls
