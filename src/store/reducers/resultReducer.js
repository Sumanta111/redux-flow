import * as actionTypes from '../action';

const initialState = {
    results:[]
}

const resultReducer = (state = initialState,action) => {
    switch (action.type){
        case actionTypes.STORE_RESULT:
        return {
            ...state,
            results : state.results.concat({id : new Date(), value : action.ctr})
        }
        case actionTypes.DELETE_RESULT:
        const newArray = state.results.filter(result=> result.id !== action.deleteRes)
        return {
            ...state,
            results : newArray
        }
    }
    return state;
}

export default resultReducer;