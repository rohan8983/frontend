import React, { useCallback } from "react";

import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../shared/utils/validators";
import "./NewPlace.css";
let count = 0;
const NewPlace = () => {
  const titleInputHandler = useCallback((id, value, isValid) => {
    console.log("count" + count++);
  }, []);

  const descriptionInputHandler = useCallback((id, value, isValid) => {
    console.log("count" + count++);
  }, []);

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={titleInputHandler}
        errorText="Please Enter valid text."
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={descriptionInputHandler}
        errorText="Please Enter valid description (at least 5 characters)."
      />
    </form>
  );
};

export default NewPlace;
