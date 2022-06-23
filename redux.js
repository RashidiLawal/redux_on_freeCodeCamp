import { Console } from "console";
import deepFreeze from "deep-freeze";

// first task
const reducer = (state = 5) => {
    return state;
  }
  

  const store = Redux.createStore(reducer)


// second task
const store = Redux.createStore(
    (state = 5) => state
  );
  
  const currentState = store.getState()


//   third task
// Define an action here:
let action = {
    type: 'LOGIN'
  }



//   4th task
const action = {
    type: 'LOGIN'
  }
  // Define an action creator here:
  
  let actionCreator = () => {
    return action
  }


//   5th task
store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });


const store = Redux.createStore(
    (state = {login: false}) => state
  );
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  // Dispatch the action here:
  
  store.dispatch(loginAction())


//   6th task
// Reducers in Redux are responsible for the state modifications that take place in response to actions.

const defaultState = {
    login: false
  };
  
  const reducer = (state = defaultState, action) => {
    // Change code below this line
  if(action.type === 'LOGIN') {
    return {login: true}
  } else {
    return state
  }
    // Change code above this line
  };
  
  const store = Redux.createStore(reducer);
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };


//   7th task
const defaultState = {
    authenticated: false
  };
  
  const authReducer = (state = defaultState, action) => {
    // Change code below this line
     switch(action.type) {
       case 'LOGIN': 
        return {...state, authenticated: true}
       case 'LOGOUT':
        return {...state, authenticated: false}
       default:
        return state
     }
    // Change code above this line
  };
  
  const store = Redux.createStore(authReducer);
  
  const loginUser = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  const logoutUser = () => {
    return {
      type: 'LOGOUT'
    }
  };


//   8TH task
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case LOGIN: 
      return {
        authenticated: true
      }
    case LOGOUT: 
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};



// 9th task
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
store.subscribe(() => {
  count = store.getState()
})
// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);



// 10th
// Combine Multiple Reducers
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = // Define the root reducer here
Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
})

const store = Redux.createStore(rootReducer);



// 11th task
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case ADD_NOTE:
      return action.text;
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
 return {
  type: ADD_NOTE,
  text: note
}
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());



// 12th
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // Dispatch request action here
dispatch(requestingData())
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // Dispatch received data action here
  dispatch(receivedData(data))
    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);



// PRACTICE CHALLENGE ONE
const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
const DECREMENT = 'DECREMENT'; // Define a constant for decrement action types

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = () => {
  return {
    type: INCREMENT
  };
}; // Define an action creator for incrementing

const decAction = () => {
  return {
    type: DECREMENT
  };
}; // Define an action creator for decrementing

const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers
store.dispatch(incAction())
store.dispatch(decAction())



// PRACTICE CHALLENGE TWO
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      return [...state, action.todo]
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);





// 13th
// Remove an Item from an Array
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // Don't mutate state here or the tests will fail
      return   [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length)
      ];
      OR 
      state.slice(0, action.index).concat(state.slice(action.index + 1, state.length))
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);



// 14th
// Copy an Object with Object.assign
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail
      return Object.assign({}, state, {status:'online'})
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);








// EGGHEAD PORTION
// reducer test(vid 5)
function counter(state, action) {
  if (typeof state === 'undefined') {
    return 0
  }

  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
}

OR


const counter = (state = 0, action) => {
  
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

expect(
  counter(0, {type: 'INCREMENT'})
).toEqual(1);


expect(
  counter(1, {type: 'INCREMENT'})
).toEqual(2)


expect(
  counter(2, {type: 'DECREMENT'})
).toEqual(1)


expect(
  counter(1, {type: 'DECREMENT'})
).toEqual(0)

expect(
  counter(1, {type: 'DO SOMETHING'})
).toEqual(1)


expect(
  counter(undefined, {})
).toEqual(0)

console.log('Tests Passed')




// vid 6
const counter = (state = 0, action) => {
  
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const {createStore} = Redux;
or
// var createStore = Redux.createStore;
// import { createStore } from 'redux'

const store = createStore(counter);

// the code below won't render the initial state
store.subscribe(() => {
  document.body.innerText = store.getState();
});

document.addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'})
})


// this includes the initial state, and recommended
const render = () => {
  document.body.innerText = store.getState();
}
store.subscribe(render)
render()



// 7th vid
// the createStore
const counter = (state = 0, action) => {
  
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const {createStore} = Redux;
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
   state = reducer(state, action);
   listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !==listener);
    };
  };
 dispatch({})
  return {getState, dispatch, subscribe};
}



// 8th vid
// simple-react
const counter = (state = 0, action) => {
  
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const Counter = ({value, onIncrement, onDecrement}) => (
  <div>
      <h1>
        {value}
      </h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
  </div>
)

const {createStore} = Redux;
const store = createStore(counter);


const render = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(<Counter value={store.getState()}
  onIncrement={() => store.dispatch({type: 'INCREMENT'})}
  onDecrement={() => store.dispatch({type: 'DECREMENT'})}
  />)
}

store.subscribe(render)
render();




// 9TH vid
// array immutation with concat, slice nand spread
const adCounter = (list) => {
  //  list.push(0);
  return list.concat([0])
  or
  
   return [...list, 0];
};
const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0]

deepFreeze(listBefor)
  expect(
    addCounter(listBefore) 
    ).toEqual(listAfter)
};
testAddCounter();
console.log('All tests Passed')




const removeCounter = (list, index) => {
 return list.slice(0, index).concat(list.slice(index + 1))
  or
  return [...list.slice(0, index), ...list.slice(index + 1)]
}
const testRemoveCounter = () => { 
  const listBefore = [0, 10, 20]
  const listAfter = [0, 20]


  deepFreeze(listBefore)
  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter)
}
testRemoveCounter()




const incrementCounter = (list, index) => {
   return list.slice(0, index).concat([list[index] + 1]).concat(list.slice(index + 1))

   or  

   return

   [...list.slice(0, index), list[index] + 1, ...list.slice(index + 1)]
}
const testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfetr = [0, 11, 20];

  deepFreeze(listBefore)
  expect(
    incrementCounter(listBefore, 1)
    ).toEqual(listAfetr)
}
incrementCounter()




// 10th vid
// avoiding object mutation with object.assign()

const toggleTodo = (todo) => {
  // todo.completed = !todo.completed
  // return todo;

  return Object.assign({}, todo, {completed: !todo.completed})

  or

  return {...todo, completed: !todo.completed}
};

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  }; 
  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true
  };

  deepFreeze(todoBefore)

  expect(
    toggleTodo(todoBefore).toEqual(todoAfter)
    )
}

testToggleTodo()
console.log('All tests passed.')



// 11th vid
const todos = (state = [], action) => {
   switch (action.type) {
     case 'ADD_TODO':
       return [
         ...state, {
           id: action.id,
           text: action.text,
           completed: false
         }
       ];
       default:
         return state;
   }
}

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ];

   deepFreeze(stateBefore);
   deepFreeze(action);

   expect(
     todos(stateBefore, action).toEqual(stateAfter)
   )
}

testAddTodo();
console.log('All tests passed')




// 12th vid
const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo
        } 
        return {
          ...todo, completed: !todo.completed
        }
      })
    default:
      return state;
  }
};

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: "ADD_TODO",
    id: 0,
    text: "Learn Redux",
  };
  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todos(stateBefore, action).toEqual(stateAfter));
};


const testToggleTodo = () => {

  const stateBefore = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Go Shopping',
      completed: false
    }
  ];

  const action = {
    type: 'TOGGLE_TODO',
    id: 1
  };


  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false
    },
    {
      id: 1,
      text: "Go Shopping",
      completed: true
    },
  ];

   deepFreeze(stateBefore);
   deepFreeze(action);

   expect(todos(stateBefore, action).toEqual(stateAfter));
}

testAddTodo();
testToggleTodo();
console.log("All tests passed");




// 13th vid
// REDUCER COMPOSITION
const todo = (state, action) => {
   switch (action.type) {
     case 'ADD_TODO':
        return {
          id: action.id,
          text: action.text,
          completed: false,
        };
      case 'TOGGLE_TODO':
        if (state.id !== action.id) {
          return state;
        }
        return {
          ...state,
          completed: !state.completed,
        };
        default:
          return state;
   }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state, todo(undefined, action)
        
      ];
    case "TOGGLE_TODO":
      return state.map(t => 
        todo(t, action)
      );
    default:
      return state;
  }
};

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: "ADD_TODO",
    id: 0,
    text: "Learn Redux",
  };
  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todos(stateBefore, action).toEqual(stateAfter));
};

const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false,
    },
    {
      id: 1,
      text: "Go Shopping",
      completed: false,
    },
  ];

  const action = {
    type: "TOGGLE_TODO",
    id: 1,
  };

  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false,
    },
    {
      id: 1,
      text: "Go Shopping",
      completed: true,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todos(stateBefore, action).toEqual(stateAfter));
};



testAddTodo();
testToggleTodo();
console.log("All tests passed");




// 14th vid
// REDUCER COMPOSITION WITH OBJECTS
const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];
    case "TOGGLE_TODO":
      return state.map((t) => todo(t, action));
    default:
      return state;
  }
};


const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

const todoApp = (state = {}, action) => {
  return {
    todos: todos(
      state.todos,action
    ),
    visibilityFilter: visibilityFilter(
      state.visibilityFilter, action
    )
  }
}


const { createStore } = Redux;
const store = createStore(todoApp);
store.getState()
store.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'Learn Redux'
})
store.getState();
store.dispatch({
  type: "ADD_TODO",
  id: 1,
  text: "Go Shopping",
});
store.getState();
store.dispatch({
  type: "TOGGLE_TODO",
  id: 0
});
store.dispatch({
  type: "SET_VISIBILITY_FILTER",
  filter: "SHOW_COMPLETED",
});


const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: "ADD_TODO",
    id: 0,
    text: "Learn Redux",
  };
  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todos(stateBefore, action).toEqual(stateAfter));
};

const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false,
    },
    {
      id: 1,
      text: "Go Shopping",
      completed: false,
    },
  ];

  const action = {
    type: "TOGGLE_TODO",
    id: 1,
  };

  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false,
    },
    {
      id: 1,
      text: "Go Shopping",
      completed: true,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todos(stateBefore, action).toEqual(stateAfter));
};


testAddTodo();
testToggleTodo();
console.log("All tests passed");




// 15th
// COMBINED REDUCER
const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];
    case "TOGGLE_TODO":
      return state.map((t) => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

const { combineReducers } = Redux;
const todoApp = combineReducers({
  todos,
  visibilityFilter
})

/* const todoApp = (state = {}, action) => {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
  };
}; */

const { createStore } = Redux;
const store = createStore(todoApp);
store.getState();
store.dispatch({
  type: "ADD_TODO",
  id: 0,
  text: "Learn Redux",
});
store.getState();
store.dispatch({
  type: "ADD_TODO",
  id: 1,
  text: "Go Shopping",
});
store.getState();
store.dispatch({
  type: "TOGGLE_TODO",
  id: 0,
});
store.dispatch({
  type: "SET_VISIBILITY_FILTER",
  filter: "SHOW_COMPLETED",
});

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: "ADD_TODO",
    id: 0,
    text: "Learn Redux",
  };
  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todos(stateBefore, action).toEqual(stateAfter));
};

const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false,
    },
    {
      id: 1,
      text: "Go Shopping",
      completed: false,
    },
  ];

  const action = {
    type: "TOGGLE_TODO",
    id: 1,
  };

  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false,
    },
    {
      id: 1,
      text: "Go Shopping",
      completed: true,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todos(stateBefore, action).toEqual(stateAfter));
};

testAddTodo();
testToggleTodo();
console.log("All tests passed");


prevoiusValue.lenght !== '0'





const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];
    case "TOGGLE_TODO":
      return state.map((t) => todo(t, action));
    default:
      return state;
  }
};


const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

const todoApp = (state = {}, action) => {
  return {
    todos: todos(
      state.todos,action
    ),
    visibilityFilter: visibilityFilter(
      state.visibilityFilter, action
    )
  }
}


const { createStore } = Redux;
const store = createStore(todoApp);
store.getState()
store.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'Learn Redux'
})
store.getState();
store.dispatch({
  type: "ADD_TODO",
  id: 1,
  text: "Go Shopping",
});
store.getState();
store.dispatch({
  type: "TOGGLE_TODO",
  id: 0
});
store.dispatch({
  type: "SET_VISIBILITY_FILTER",
  filter: "SHOW_COMPLETED",
});


const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: "ADD_TODO",
    id: 0,
    text: "Learn Redux",
  };
  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todos(stateBefore, action).toEqual(stateAfter));
};

const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false,
    },
    {
      id: 1,
      text: "Go Shopping",
      completed: false,
    },
  ];

  const action = {
    type: "TOGGLE_TODO",
    id: 1,
  };

  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false,
    },
    {
      id: 1,
      text: "Go Shopping",
      completed: true,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todos(stateBefore, action).toEqual(stateAfter));
};


testAddTodo();
testToggleTodo();
console.log("All tests passed");




// 15th
// COMBINED REDUCER
const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, todo(undefined, action)];
    case "TOGGLE_TODO":
      return state.map((t) => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

const { combineReducers } = Redux;
const todoApp = combineReducers({
  todos,
  visibilityFilter
})

/* const todoApp = (state = {}, action) => {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
  };
}; */

const { createStore } = Redux;
const store = createStore(todoApp);
store.getState();
store.dispatch({
  type: "ADD_TODO",
  id: 0,
  text: "Learn Redux",
});
store.getState();
store.dispatch({
  type: "ADD_TODO",
  id: 1,
  text: "Go Shopping",
});
store.getState();
store.dispatch({
  type: "TOGGLE_TODO",
  id: 0,
});
store.dispatch({
  type: "SET_VISIBILITY_FILTER",
  filter: "SHOW_COMPLETED",
});

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: "ADD_TODO",
    id: 0,
    text: "Learn Redux",
  };
  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todos(stateBefore, action).toEqual(stateAfter));
};

const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false,
    },
    {
      id: 1,
      text: "Go Shopping",
      completed: false,
    },
  ];

  const action = {
    type: "TOGGLE_TODO",
    id: 1,
  };

  const stateAfter = [
    {
      id: 0,
      text: "Learn Redux",
      completed: false,
    },
    {
      id: 1,
      text: "Go Shopping",
      completed: true,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(todos(stateBefore, action).toEqual(stateAfter));
};

testAddTodo();
testToggleTodo();
console.log("All tests passed");


// prevoiusValue.lenght !== '0'
// {JSON.stringify(selectednote, null, 2)}




// 17th vid redux-react todos
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state;
  }
}


const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todos(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(
        t => todo(t, action) 
      );
    default:
      return state
  }
};


const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};


const { combineReducers } = Redux;
const todoApp = combineReducers({
  todos,
  visibilityFilter
});


const { createStore } = Redux;
const store = createStore(todoApp);

const {Component} = React;
let nextTodoId = 0;

class TodoApp extends Component {
  render() {
    return (
      <div>
        <input ref={node => {
          this.input = node;
        }}/>
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: 'Test',
            id: nextTodoId++
          })
          this.input.value = ''
        }}
        >Add Todo</button>
        <ul>
          { this.props.todos.map(
            todo => <li key={todo.id}>
                {todo.text}
            </li>
          )
          }
        </ul>

      </div>
    )
  }
}

const render = () => {
  ReactDOM.render(
    <TodoApp todos={store.getState().todos}/>,
    document.getElementById('root')
  )
}

store.subscribe(render);
render()




// 18th vid redux-react todos-toggling
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state;
  }
}


const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todos(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(
        t => todo(t, action) 
      );
    default:
      return state
  }
};


const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};


const { combineReducers } = Redux;
const todoApp = combineReducers({
  todos,
  visibilityFilter
});


const { createStore } = Redux;
const store = createStore(todoApp);

const {Component} = React;
let nextTodoId = 0;

class TodoApp extends Component {
  render() {
    return (
      <div>
        <input ref={node => {
          this.input = node;
        }}/>
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: 'Test',
            id: nextTodoId++
          })
          this.input.value = ''
        }}
        >Add Todo</button>
        <ul>
          { this.props.todos.map(
            todo => <li key={todo.id}
            onClick={() => {
              store.dispatch({
                type: 'TOGGLE_TODO',
                id: todo.id
              });
            }}
            >
                {todo.text}
            </li>
          )
          }
        </ul>

      </div>
    )
  }
}

const render = () => {
  ReactDOM.render(
    <TodoApp todos={store.getState().todos}/>,
    document.getElementById('root')
  )
}

store.subscribe(render);
render()




// 19th vid redux-react todo-list-filtering
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state;
  }
}


const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todos(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(
        t => todo(t, action) 
      );
    default:
      return state
  }
};


const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};


const { combineReducers } = Redux;
const todoApp = combineReducers({
  todos,
  visibilityFilter
});


const { createStore } = Redux;
const store = createStore(todoApp);

const {Component} = React;


const FilterLink = ({
  filter,
  currentFilter,
  children
}) => {
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }
  return (
    <a href='#'
    onClick={
      e => {
       e.preventDefault();
       store.dispatch({
         type: 'SET_VISIBILITY_FILTER',
         filter
       });
      } 
    }>
    {childern}
    </a>
  );
};



const getVisibilityTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)

  }
}


let nextTodoId = 0;
class TodoApp extends Component {
  
  render() {
    const {
      todos,
      visibilityFilter
    } = this.props;

    const visibleTodos = getVisibilityTodos(
      todos,
      visibilityFilter
    );

    return (
      <div>
        <input
          ref={(node) => {
            this.input = node;
          }}
        />
        <button
          onClick={() => {
            store.dispatch({
              type: "ADD_TODO",
              text: "Test",
              id: nextTodoId++,
            });
            this.input.value = "";
          }}
        >
          Add Todo
        </button>
        <ul>
          {visibleTodos.map((todo) => (
            <li
              key={todo.id}
              onClick={() => {
                store.dispatch({
                  type: "TOGGLE_TODO",
                  id: todo.id,
                });
              }}
            >
              {todo.text}
            </li>
          ))}
        </ul>
        <p>
          Show: {""}
          <FilterLink filter="SHOW_ALL" currentFilter={visibilityFilter}>
            All
          </FilterLink>
          {""}
          <FilterLink filter="SHOW_ACTIVE" currentFilter={visibilityFilter}>
            Active
          </FilterLink>
          {""}
          <FilterLink filter="SHOW_COMPLETED" currentFilter={visibilityFilter}>
            Completed
          </FilterLink>
        </p>
      </div>
    );
  }
}

const render = () => {
  ReactDOM.render(
    <TodoApp {...store.getState()}/>,
    document.getElementById('root')
  )
}

store.subscribe(render);
render()



// 20th vid redux-extracting presentational components todo-todoList
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state;
  }
}


const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todos(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(
        t => todo(t, action) 
      );
    default:
      return state
  }
};


const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};


const { combineReducers } = Redux;
const todoApp = combineReducers({
  todos,
  visibilityFilter
});


const { createStore } = Redux;
const store = createStore(todoApp);

const {Component} = React;


const FilterLink = ({
  filter,
  currentFilter,
  children
}) => {
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }
  return (
    <a href='#'
    onClick={
      e => {
       e.preventDefault();
       store.dispatch({
         type: 'SET_VISIBILITY_FILTER',
         filter
       });
      } 
    }>
    {childern}
    </a>
  );
};


const Todo = ({
onClick,
completed,
text
}) => (
  <li onClick={onClick} style={{textDecoration: completed && 'line-through'}}>
        {text}
  </li>
)


const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo => <Todo 
    key={todo.id}
    {...todo}
    onClick={() => onTodoClick(todo.id)}/>)}
  </ul>
)


const getVisibilityTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)

  }
}


let nextTodoId = 0;
class TodoApp extends Component {
  
  render() {
    const {
      todos,
      visibilityFilter
    } = this.props;

    const visibleTodos = getVisibilityTodos(
      todos,
      visibilityFilter
    );

    return (
      <div>
        <input
          ref={(node) => {
            this.input = node;
          }}
        />
        <button
          onClick={() => {
            store.dispatch({
              type: "ADD_TODO",
              text: "Test",
              id: nextTodoId++,
            });
            this.input.value = "";
          }}
        >
          Add Todo
        </button>
        <TodoList
        todos={visibleTodos}
        onTodoClick={id => 
        store.dispatch({
          type: 'TOGGLE_TODO',
          id
        })}
        />
        <p>
          Show: {""}
          <FilterLink filter="SHOW_ALL" currentFilter={visibilityFilter}>
            All
          </FilterLink>
          {""}
          <FilterLink filter="SHOW_ACTIVE" currentFilter={visibilityFilter}>
            Active
          </FilterLink>
          {""}
          <FilterLink filter="SHOW_COMPLETED" currentFilter={visibilityFilter}>
            Completed
          </FilterLink>
        </p>
      </div>
    );
  }
}

const render = () => {
  ReactDOM.render(
    <TodoApp {...store.getState()}/>,
    document.getElementById('root')
  )
}

store.subscribe(render);
render()





// 21th vid redux-extracting-presentational-components-addtodo-footer-filter
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state;
  }
}


const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todos(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(
        t => todo(t, action) 
      );
    default:
      return state
  }
};


const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};


const { combineReducers } = Redux;
const todoApp = combineReducers({
  todos,
  visibilityFilter
});


const { createStore } = Redux;
const store = createStore(todoApp);

const {Component} = React;


const FilterLink = ({
  filter,
  currentFilter,
  children,
  onClick
}) => {
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }
  return (
    <a href='#'
    onClick={
      e => {
       e.preventDefault();
       onClick(filter);
      } 
    }>
    {childern}
    </a>
  );
};


const Footer = ({ visibilityFilter, onFilterClick }) => (
  <p>
    Show: {""}
    <FilterLink
      filter="SHOW_ALL"
      currentFilter={visibilityFilter}
      onClick={onFilterClick}
    >
      All
    </FilterLink>
    {""}
    <FilterLink
      filter="SHOW_ACTIVE"
      currentFilter={visibilityFilter}
      onClick={onFilterClick}
    >
      Active
    </FilterLink>
    {""}
    <FilterLink
      filter="SHOW_COMPLETED"
      currentFilter={visibilityFilter}
      onClick={onFilterClick}
    >
      Completed
    </FilterLink>
  </p>
);


const Todo = ({
onClick,
completed,
text
}) => (
  <li onClick={onClick} style={{textDecoration: completed && 'line-through'}}>
        {text}
  </li>
)


const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo => <Todo 
    key={todo.id}
    {...todo}
    onClick={() => onTodoClick(todo.id)}/>)}
  </ul>
)


const  addToDo = ({onAddClick}) => {
  let input;
 return (
    <div>
    <input
      ref={(node) => {
        input = node;
      }}
    />
    <button
      onClick={() => {
        onAddClick(input.value)
        input.value = "";
      }}
    >
      Add Todo
    </button>
  </div>
 )
}


const getVisibilityTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)

  }
}


let nextTodoId = 0;

const TodoApp = ({ todos,
      visibilityFilter }) =>  (
    <div>
      <addToDo onAddClick={text => store.dispatch({
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
      })}/>
      <TodoList
      todos={
      getVisibilityTodos(
    todos,
    visibilityFilter)

  }
      onTodoClick={id => 
      store.dispatch({
        type: 'TOGGLE_TODO',
        id
      })}
      />
    <Footer visibilityFilter={visibilityFilter}
    onFilterClick={filter => store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter
    })}/>
    </div>
  );
  

const render = () => {
  ReactDOM.render(
    <TodoApp {...store.getState()}/>,
    document.getElementById('root')
  )
}

store.subscribe(render);
render()




// 22nd vid redux-extracting-container-components-filter
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state;
  }
}


const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todos(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(
        t => todo(t, action) 
      );
    default:
      return state
  }
};


const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};


const { combineReducers } = Redux;
const todoApp = combineReducers({
  todos,
  visibilityFilter
});


const { createStore } = Redux;
const store = createStore(todoApp);

const {Component} = React;


const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a href='#'
    onClick={
      e => {
       e.preventDefault();
       onClick();
      } 
    }>
    {childern}
    </a>
  );
};


class FilterLink extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() =>
     this.forceUpdate() 
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const props = this.props;
    const state = store.getState();

    return (
      <Link active={
        props.filter === state.visibilityFilter
      }
      onClick={() => store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: props.filter
      })}>
      {props.childern}
      </Link>
    )
  }
}

const Footer = () => (
  <p>
    Show: {""}
    <FilterLink
      filter="SHOW_ALL"
    >
      All
    </FilterLink>
    {""}
    <FilterLink
      filter="SHOW_ACTIVE"
    >
      Active
    </FilterLink>
    {""}
    <FilterLink
      filter="SHOW_COMPLETED"
    >
      Completed
    </FilterLink>
  </p>
);


const Todo = ({
onClick,
completed,
text
}) => (
  <li onClick={onClick} style={{textDecoration: completed && 'line-through'}}>
        {text}
  </li>
)


const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo => <Todo 
    key={todo.id}
    {...todo}
    onClick={() => onTodoClick(todo.id)}/>)}
  </ul>
)


const  addToDo = ({onAddClick}) => {
  let input;
 return (
    <div>
    <input
      ref={(node) => {
        input = node;
      }}
    />
    <button
      onClick={() => {
        onAddClick(input.value)
        input.value = "";
      }}
    >
      Add Todo
    </button>
  </div>
 )
}


const getVisibilityTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)

  }
}


let nextTodoId = 0;

const TodoApp = ({ todos,
      visibilityFilter }) =>  (
    <div>
      <addToDo onAddClick={text => store.dispatch({
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
      })}/>
      <TodoList
      todos={
      getVisibilityTodos(
    todos,
    visibilityFilter)

  }
      onTodoClick={id => 
      store.dispatch({
        type: 'TOGGLE_TODO',
        id
      })}
      />
    <Footer />
    </div>
  );
  

const render = () => {
  ReactDOM.render(
    <TodoApp {...store.getState()}/>,
    document.getElementById('root')
  )
}

store.subscribe(render);
render()



// 23rd vid redux-extracting-container-components-visibletodolist-addtodo
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state;
  }
}


const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todos(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(
        t => todo(t, action) 
      );
    default:
      return state
  }
};


const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};


const { combineReducers } = Redux;
const todoApp = combineReducers({
  todos,
  visibilityFilter
});


const { createStore } = Redux;
const store = createStore(todoApp);

const {Component} = React;


const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a href='#'
    onClick={
      e => {
       e.preventDefault();
       onClick();
      } 
    }>
    {childern}
    </a>
  );
};


class FilterLink extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() =>
     this.forceUpdate() 
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const props = this.props;
    const state = store.getState();

    return (
      <Link active={
        props.filter === state.visibilityFilter
      }
      onClick={() => store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: props.filter
      })}>
      {props.childern}
      </Link>
    )
  }
}

const Footer = () => (
  <p>
    Show: {""}
    <FilterLink
      filter="SHOW_ALL"
    >
      All
    </FilterLink>
    {""}
    <FilterLink
      filter="SHOW_ACTIVE"
    >
      Active
    </FilterLink>
    {""}
    <FilterLink
      filter="SHOW_COMPLETED"
    >
      Completed
    </FilterLink>
  </p>
);


const Todo = ({
onClick,
completed,
text
}) => (
  <li onClick={onClick} style={{textDecoration: completed && 'line-through'}}>
        {text}
  </li>
)


const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo => <Todo 
    key={todo.id}
    {...todo}
    onClick={() => onTodoClick(todo.id)}/>)}
  </ul>
)


const  AddTodo = () => {
  let input;
 return (
    <div>
    <input
      ref={(node) => {
        input = node;
      }}
    />
    <button
      onClick={() => {
        store.dispatch({
        type: 'ADD_TODO',
        id: nextTodoId++,
        text: input.value
      })
        input.value = "";
      }}
    >
      Add Todo
    </button>
  </div>
 )
}


const getVisibilityTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)

  }
}

class VisibleTodolist extends Component {

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const props = this.props;
    const state = store.getState();

    return (
      <TodoList
        todos={getVisibilityTodos(state.todos, state.visibilityFilter)}
        onTodoClick={(id) =>
          store.dispatch({
            type: "TOGGLE_TODO",
            id,
          })
        }
      />
    );
  }
}
let nextTodoId = 0;

const TodoApp = () =>  (
    <div>
      <AddTodo />
      <VisibleTodolist />
      <Footer />
    </div>
  );
  


ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
)



// 24th vid redux-passing-down-the-store-explicitly-via-props
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state;
  }
}


const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todos(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(
        t => todo(t, action) 
      );
    default:
      return state
  }
};


const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};


const { combineReducers } = Redux;
const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const {Component} = React;


const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a href='#'
    onClick={
      e => {
       e.preventDefault();
       onClick();
      } 
    }>
    {childern}
    </a>
  );
};


class FilterLink extends Component {
  componentDidMount() {
    const {store} = this.props
    this.unsubscribe = store.subscribe(() =>
     this.forceUpdate() 
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const props = this.props;
    const {store} = props
    const state = store.getState();

    return (
      <Link active={
        props.filter === state.visibilityFilter
      }
      onClick={() => store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: props.filter
      })}>
      {props.childern}
      </Link>
    )
  }
}

const Footer = ({ store }) => (
  <p>
    Show: {""}
    <FilterLink filter="SHOW_ALL" store={store}>
      All
    </FilterLink>
    {""}
    <FilterLink filter="SHOW_ACTIVE" store={store}>
      Active
    </FilterLink>
    {""}
    <FilterLink filter="SHOW_COMPLETED" store={store}>
      Completed
    </FilterLink>
  </p>
);


const Todo = ({
onClick,
completed,
text
}) => (
  <li onClick={onClick} style={{textDecoration: completed && 'line-through'}}>
        {text}
  </li>
)


const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo => <Todo 
    key={todo.id}
    {...todo}
    onClick={() => onTodoClick(todo.id)}/>)}
  </ul>
)


const  AddTodo = ({store}) => {
  let input;
 return (
    <div>
    <input
      ref={(node) => {
        input = node;
      }}
    />
    <button
      onClick={() => {
        store.dispatch({
        type: 'ADD_TODO',
        id: nextTodoId++,
        text: input.value
      })
        input.value = "";
      }}
    >
      Add Todo
    </button>
  </div>
 )
}


const getVisibilityTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)

  }
}

class VisibleTodolist extends Component {

  componentDidMount() {
    const {store} = this.props;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {

    const props = this.props;
    const { store } = this.props;
    const state = store.getState();

    return (
      <TodoList
        todos={getVisibilityTodos(state.todos, state.visibilityFilter)}
        onTodoClick={(id) =>
          store.dispatch({
            type: "TOGGLE_TODO",
            id,
          })
        }
      />
    );
  }
}
let nextTodoId = 0;

const TodoApp = ({ store }) => (
  <div>
    <AddTodo store={store} />
    <VisibleTodolist store={store} />
    <Footer store={store} />
  </div>
);
  
const { createStore } = Redux;

ReactDOM.render(
  <TodoApp store={createStore(todoApp)} />,
  document.getElementById('root')
)



// 25th vid redux-passing-down-the-store-explicitly-via-props
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state;
  }
}


const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todos(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(
        t => todo(t, action) 
      );
    default:
      return state
  }
};


const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};


const { combineReducers } = Redux;
const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const {Component} = React;


const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a href='#'
    onClick={
      e => {
       e.preventDefault();
       onClick();
      } 
    }>
    {childern}
    </a>
  );
};


class FilterLink extends Component {
  componentDidMount() {
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() =>
     this.forceUpdate() 
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const props = this.props;
    const {store} = this.context
    const state = store.getState();

    return (
      <Link active={
        props.filter === state.visibilityFilter
      }
      onClick={() => store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: props.filter
      })}>
      {props.childern}
      </Link>
    )
  }
}
FilterLink.contextTypes = {
  store: React.PropTypes.object
}

const Footer = () => (
  <p>
    Show: {""}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {""}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {""}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
);


const Todo = ({
onClick,
completed,
text
}) => (
  <li onClick={onClick} style={{textDecoration: completed && 'line-through'}}>
        {text}
  </li>
)


const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo => <Todo 
    key={todo.id}
    {...todo}
    onClick={() => onTodoClick(todo.id)}/>)}
  </ul>
)


const  AddTodo = (props, {store}) => {
  let input;
 return (
    <div>
    <input
      ref={(node) => {
        input = node;
      }}
    />
    <button
      onClick={() => {
        store.dispatch({
        type: 'ADD_TODO',
        id: nextTodoId++,
        text: input.value
      })
        input.value = "";
      }}
    >
      Add Todo
    </button>
  </div>
 )
}
AddTodo.contextTypes = {
  store: React.PropTypes.object
}


const getVisibilityTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)

  }
}

class VisibleTodolist extends Component {

  componentDidMount() {
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {

    const props = this.props;
    const { store } = this.context;
    const state = store.getState();

    return (
      <TodoList
        todos={getVisibilityTodos(state.todos, state.visibilityFilter)}
        onTodoClick={(id) =>
          store.dispatch({
            type: "TOGGLE_TODO",
            id,
          })
        }
      />
    );
  }
}
VisibleTodolist.contextTypes = {
  store: React.PropTypes.object
}


const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodolist />
    <Footer />
  </div>
);


class Provider extends Component {
  getChildContext() {
    render() 
    return this.props.store;
  }

render() {
  return this.props.children;
}
  }         

Provider.childContextTypes = {
  store: React.PropTypes.object 
}
  
  
const { createStore } = Redux;

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);




// 26th vid redux-using-provider-from-react-redux
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state;
  }
}


const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todos(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(
        t => todo(t, action) 
      );
    default:
      return state
  }
};


const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};


const { combineReducers } = Redux;
const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const {Component} = React;


const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a href='#'
    onClick={
      e => {
       e.preventDefault();
       onClick();
      } 
    }>
    {childern}
    </a>
  );
};


class FilterLink extends Component {
  componentDidMount() {
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() =>
     this.forceUpdate() 
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const props = this.props;
    const {store} = this.context
    const state = store.getState();

    return (
      <Link active={
        props.filter === state.visibilityFilter
      }
      onClick={() => store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: props.filter
      })}>
      {props.childern}
      </Link>
    )
  }
}
FilterLink.contextTypes = {
  store: React.PropTypes.object
}

const Footer = () => (
  <p>
    Show: {""}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {""}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {""}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
);


const Todo = ({
onClick,
completed,
text
}) => (
  <li onClick={onClick} style={{textDecoration: completed && 'line-through'}}>
        {text}
  </li>
)


const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo => <Todo 
    key={todo.id}
    {...todo}
    onClick={() => onTodoClick(todo.id)}/>)}
  </ul>
)


const  AddTodo = (props, {store}) => {
  let input;
 return (
    <div>
    <input
      ref={(node) => {
        input = node;
      }}
    />
    <button
      onClick={() => {
        store.dispatch({
        type: 'ADD_TODO',
        id: nextTodoId++,
        text: input.value
      })
        input.value = "";
      }}
    >
      Add Todo
    </button>
  </div>
 )
}
AddTodo.contextTypes = {
  store: React.PropTypes.object
}


const getVisibilityTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)

  }
}

class VisibleTodolist extends Component {

  componentDidMount() {
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {

    const props = this.props;
    const { store } = this.context;
    const state = store.getState();

    return (
      <TodoList
        todos={getVisibilityTodos(state.todos, state.visibilityFilter)}
        onTodoClick={(id) =>
          store.dispatch({
            type: "TOGGLE_TODO",
            id,
          })
        }
      />
    );
  }
}
VisibleTodolist.contextTypes = {
  store: React.PropTypes.object
}


const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodolist />
    <Footer />
  </div>
);
  
const {Provider} = ReactRedux;
// import{Provider} from 'react-redux';
// var Provider = require('recat-redux').Provider 
const { createStore } = Redux;

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);




// 27th vid redux-using-provider-from-react-redux
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state;
  }
}


const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todos(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(
        t => todo(t, action) 
      );
    default:
      return state
  }
};


const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};


const { combineReducers } = Redux;
const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const {Component} = React;


const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a href='#'
    onClick={
      e => {
       e.preventDefault();
       onClick();
      } 
    }>
    {childern}
    </a>
  );
};


class FilterLink extends Component {
  componentDidMount() {
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() =>
     this.forceUpdate() 
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const props = this.props;
    const {store} = this.context
    const state = store.getState();

    return (
      <Link active={
        props.filter === state.visibilityFilter
      }
      onClick={() => store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: props.filter
      })}>
      {props.childern}
      </Link>
    )
  }
}
FilterLink.contextTypes = {
  store: React.PropTypes.object
}

const Footer = () => (
  <p>
    Show: {""}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {""}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {""}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
);


const Todo = ({
onClick,
completed,
text
}) => (
  <li onClick={onClick} style={{textDecoration: completed && 'line-through'}}>
        {text}
  </li>
)


const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo => <Todo 
    key={todo.id}
    {...todo}
    onClick={() => onTodoClick(todo.id)}/>)}
  </ul>
)


const  AddTodo = (props, {store}) => {
  let input;
 return (
    <div>
    <input
      ref={(node) => {
        input = node;
      }}
    />
    <button
      onClick={() => {
        store.dispatch({
        type: 'ADD_TODO',
        id: nextTodoId++,
        text: input.value
      })
        input.value = "";
      }}
    >
      Add Todo
    </button>
  </div>
 )
}
AddTodo.contextTypes = {
  store: React.PropTypes.object
}


const getVisibilityTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)

  }
}

const mapStateToProps = (state) => {
  return {
     todos: getVisibilityTodos(state.todos, state.visibilityFilter)
  }
};

const mapDispatchToProps = (dispatch) => {
 return {
    onTodoClick: (id) =>
          dispatch({
            type: "TOGGLE_TODO",
            id,
          })
 }
}


const {connect} = ReactRedux;
const VisibleTodolist = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);


const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodolist />
    <Footer />
  </div>
);
  
const {Provider} = ReactRedux;
// import{Provider} from 'react-redux';
// var Provider = require('recat-redux').Provider 
const { createStore } = Redux;

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);



// setInterval(() => setCounter(currentCounter => currentCounter + 1))
// clearInterval(interval)
// setCounter([])




// 28th vid redux-generating-containers-with-connect-from-react-redux-addtodo
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state;
  }
}


const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todos(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(
        t => todo(t, action) 
      );
    default:
      return state
  }
};


const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};


const { combineReducers } = Redux;
const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const {Component} = React;


const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a href='#'
    onClick={
      e => {
       e.preventDefault();
       onClick();
      } 
    }>
    {childern}
    </a>
  );
};


class FilterLink extends Component {
  componentDidMount() {
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() =>
     this.forceUpdate() 
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const props = this.props;
    const {store} = this.context
    const state = store.getState();

    return (
      <Link active={
        props.filter === state.visibilityFilter
      }
      onClick={() => store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: props.filter
      })}>
      {props.childern}
      </Link>
    )
  }
}
FilterLink.contextTypes = {
  store: React.PropTypes.object
}

const Footer = () => (
  <p>
    Show: {""}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {""}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {""}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
);


const Todo = ({
onClick,
completed,
text
}) => (
  <li onClick={onClick} style={{textDecoration: completed && 'line-through'}}>
        {text}
  </li>
)


const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo => <Todo 
    key={todo.id}
    {...todo}
    onClick={() => onTodoClick(todo.id)}/>)}
  </ul>
)

let nextTodoId = 0;
let  AddTodo = ({dispatch}) => {
  let input;
 return (
    <div>
    <input
      ref={(node) => {
        input = node;
      }}
    />
    <button
      onClick={() => {
        dispatch({
        type: 'ADD_TODO',
        id: nextTodoId++,
        text: input.value
      })
        input.value = "";
      }}
    >
      Add Todo
    </button>
  </div>
 )
};
AddTodo = connect()(AddTodo);

const getVisibilityTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)

  }
}

const mapStateToTodoListProps = (state) => {
  return {
     todos: getVisibilityTodos(state.todos, state.visibilityFilter)
  }
};
const mapDispatchToTodoListProps = (dispatch) => {
  return {
    onTodoClick: (id) =>
      dispatch({
        type: "TOGGLE_TODO",
        id,
      }),
  };
};
const {connect} = ReactRedux;
const VisibleTodolist = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList);


const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodolist />
    <Footer />
  </div>
);
  
const {Provider} = ReactRedux;
// import{Provider} from 'react-redux';
// var Provider = require('recat-redux').Provider 
const { createStore } = Redux;

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);



// 29th vid redux-generating-containers-with-connect-from-react-redux-footerlink
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state;
  }
}


const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todos(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(
        t => todo(t, action) 
      );
    default:
      return state
  }
};


const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};


const { combineReducers } = Redux;
const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const {Component} = React;


const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a href='#'
    onClick={
      e => {
       e.preventDefault();
       onClick();
      } 
    }>
    {childern}
    </a>
  );
};


const mapStateToLinkProps = (
  state,
  ownProps
) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
};

const mapDispatchToLinkProps = (
  dispatch,
  ownProps
) => {
  return {
      onclick: () => {
        dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: ownProps.filter
        });
      }
  };
}

const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link)


const Footer = () => (
  <p>
    Show: {""}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {""}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {""}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
);


const Todo = ({
onClick,
completed,
text
}) => (
  <li onClick={onClick} style={{textDecoration: completed && 'line-through'}}>
        {text}
  </li>
)


const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo => <Todo 
    key={todo.id}
    {...todo}
    onClick={() => onTodoClick(todo.id)}/>)}
  </ul>
)

let nextTodoId = 0;
let  AddTodo = ({dispatch}) => {
  let input;
 return (
    <div>
    <input
      ref={(node) => {
        input = node;
      }}
    />
    <button
      onClick={() => {
        dispatch({
        type: 'ADD_TODO',
        id: nextTodoId++,
        text: input.value
      })
        input.value = "";
      }}
    >
      Add Todo
    </button>
  </div>
 )
};
AddTodo = connect()(AddTodo);

const getVisibilityTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)

  }
}

const mapStateToTodoListProps = (state) => {
  return {
     todos: getVisibilityTodos(state.todos, state.visibilityFilter)
  }
};
const mapDispatchToTodoListProps = (dispatch) => {
  return {
    onTodoClick: (id) =>
      dispatch({
        type: "TOGGLE_TODO",
        id,
      }),
  };
};
const {connect} = ReactRedux;
const VisibleTodolist = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList);


const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodolist />
    <Footer />
  </div>
);
  
const {Provider} = ReactRedux;
const { createStore } = Redux;

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);



// 30th vid redux-extracting-action-creators
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state;
  }
}


const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todos(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(
        t => todo(t, action) 
      );
    default:
      return state
  }
};


const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};


const { combineReducers } = Redux;
const todoApp = combineReducers({
  todos,
  visibilityFilter
});



let nextTodoId = 0;
const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    text
  };
};

const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

const {Component} = React;


const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a href='#'
    onClick={
      e => {
       e.preventDefault();
       onClick();
      } 
    }>
    {childern}
    </a>
  );
};


const mapStateToLinkProps = (
  state,
  ownProps
) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
};

const mapDispatchToLinkProps = (
  dispatch,
  ownProps
) => {
  return {
      onclick: () => {
        dispatch(
          setVisibilityFilter(ownProps.filter)
        );
      }
  };
}

const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link)


const Footer = () => (
  <p>
    Show: {""}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {""}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {""}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
);


const Todo = ({
onClick,
completed,
text
}) => (
  <li onClick={onClick} style={{textDecoration: completed && 'line-through'}}>
        {text}
  </li>
)


const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo => <Todo 
    key={todo.id}
    {...todo}
    onClick={() => onTodoClick(todo.id)}/>)}
  </ul>
)


let  AddTodo = ({dispatch}) => {
  let input;
 return (
    <div>
    <input
      ref={(node) => {
        input = node;
      }}
    />
    <button
      onClick={() => {
        dispatch(addTodo(input.value))
        input.value = "";
      }}
    >
      Add Todo
    </button>
  </div>
 )
};
AddTodo = connect()(AddTodo);

const getVisibilityTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)

  }
}

const mapStateToTodoListProps = (state) => {
  return {
     todos: getVisibilityTodos(state.todos, state.visibilityFilter)
  }
};
const mapDispatchToTodoListProps = (dispatch) => {
  return {
    onTodoClick: (id) =>
      dispatch(toggleTodo(id)),
  };
};
const {connect} = ReactRedux;
const VisibleTodolist = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList);


const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodolist />
    <Footer />
  </div>
);
  
const {Provider, connect} = ReactRedux;
const { createStore } = Redux;

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);