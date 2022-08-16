import {createStore} from 'redux';

// searchStore stores the user current input as a state shared between component
// so that it can be accessed by the Result Component to display the search
// and by the Search Component to display the current input value
// it can be done better but I choose redux to fully grasp the redux-react idea


const searchReducer = (state = '', action) => {
    
    switch(action.type) {

        case "SEARCH":
            return state = action.content

        default:
            return  state
 }

}

const searchAction = (inpt) => ({
    type:"SEARCH",
    content:inpt
})

const searchStore = createStore(searchReducer);

export {searchAction,searchStore}