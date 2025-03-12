import { useReducer } from "react";

const initialState = { value: '', touched: false,};

const reducer = (state, action) => {
    if (action.type === 'VALUE') {
        return { ...state, value: action.value };
    } else if (action.type === 'BLUR') {
        return { ...state, touched: true }
    }else if(action.type === 'CLEAR'){
        return {value: '', touched: false}
    }
    return state;
}

export const useInput = (inputValidation = () => { }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const inputChange = (e) => {
        dispatch({ type: "VALUE", value: e.target.value });
    }
    const inputBlur = e => {
        dispatch({ type: "BLUR" });
    }
    const inputTouch = () => {
        dispatch({ type: "BLUR" })
    }
    const inputClear = () => {
        dispatch({type: 'CLEAR'})
    }

    let inputIsValid = inputValidation(state.value);
    let inputIsError = state.touched && !inputIsValid;

    return {
        inputChange,
        inputBlur,
        inputTouch,
        inputClear,
        value: state.value,
        inputIsValid,
        inputIsError,
    }
}