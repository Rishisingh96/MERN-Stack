import {createStore} from 'redux';

const INITIAL_VALUE  = {
    counter:0,
    privacy: false,
}

// Using simple Redux method
// const counterReducer = (store = INITIAL_VALUE, action) => {
//     console.log("Action Received",action);
//     if(action.type === 'INCREMENT'){
//         return{counter: store.counter + 1, privacy: store.privacy}
//     }else if(action.type === 'DECREMENT'){
//         return{counter: store.counter - 1, privacy: store.privacy}
//     }else if(action.type === 'ADD'){
//         return{counter:store.counter + Number(action.payload.num),privacy: store.privacy}
//     }else if(action.type === 'SUBTRACT'){
//         return{counter:store.counter -Number(action.payload.num), privacy: store.privacy}
//     }else if(action.type === 'TOGGLE_PRIVACY'){
//         return{
//             privacy: !store.privacy , counter:store.counter
//         }
//     }
//     return store;
// }

// 2 way to solve this method 1:Seprate operator, 2:Using Redux 
const counterReducer = (store = INITIAL_VALUE, action) => {
    console.log("Action Received",action);
    if(action.type === 'INCREMENT'){
        return{...store, counter: store.counter + 1}
    }else if(action.type === 'DECREMENT'){
        return{...store, counter: store.counter - 1}
    }else if(action.type === 'ADD'){
        return{...store, counter:store.counter + Number(action.payload.num)}
    }else if(action.type === 'SUBTRACT'){
        return{...store, counter:store.counter -Number(action.payload.num)}
    }else if(action.type === 'TOGGLE_PRIVACY'){
        return{
            ...store,
            privacy: !store.privacy 
        }
    }
    return store;
}

const counterStore = createStore(counterReducer);

export default counterStore;