const redux = require("redux");

const INITIAL_VALUE = {
  counter: 0,
};

// Reducer
const reducer = (store = INITIAL_VALUE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: store.counter + 1,
      };

    case "DECREMENT":
      return {
        counter: store.counter - 1,
      };

    case "ADDITION":
      return {
        counter: store.counter + action.payload.number,
      };

    default:
      return store;
  }
};

// Store create
const store = redux.createStore(reducer);

// Subscriber
const subscriber = () => {
  console.log(store.getState());
};

// Subscribe
store.subscribe(subscriber);

// Dispatch Actions
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "INCREMENT" });

store.dispatch({
  type: "ADDITION",
  payload: { number: 7 },
});

store.dispatch({ type: "DECREMENT" });