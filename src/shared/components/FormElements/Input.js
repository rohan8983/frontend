import React, { useReducer, useEffect } from "react";

import { validate } from "../../utils/validators";
import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators)
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true
      };
    default:
      return state;
  }
};

const Input = props => {
  const [inputValue, dispatch] = useReducer(inputReducer, {
    value: "",
    isTouched: false,
    isValid: false
  });

  const { id, onInput } = props;
  const { value, isValid } = inputValue;
  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = event => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      validators: props.validators
    });
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  const elements =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputValue.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        value={inputValue.value}
        onBlur={touchHandler}
      />
    );
  return (
    <div
      className={`form-control ${!inputValue.isValid &&
        inputValue.isTouched &&
        "form-control--invalid"}`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {elements}
      {!inputValue.isValid && inputValue.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
