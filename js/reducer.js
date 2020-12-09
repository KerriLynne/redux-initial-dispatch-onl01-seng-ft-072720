//declaring our statel
let state;

//assign a value to our initial state instead of assigning to a variable above
function changeState(state = { count: 0 }, action) {
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function dispatch(action){
    state = changeState(state, action)
    render()
}

function render(){
    document.body.textContent = state.count
}

dispatch({ type: 'gemi' })