import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../shared/utils/validators";
import Button from "../../shared/components/FormElements/Button";
import "./PlaceForm.css";
import { useForm } from "../../shared/hooks/form-hook";

const DUMMY_PLACES = [
  {
    id: "p1",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPiaCGeNN6U1YjuEZFnwaYOl2tfwjmY2nnJKVWIoDVeJ5Q3XUw&usqp=CAU",
    title: "The Taj Mahal",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra",
    address:
      "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001, India",
    location: {
      lat: 27.1751448,
      lng: 78.0421422
    },
    creator: "u1"
  },
  {
    id: "p2",
    imageUrl:
      "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1199337631_20200102114237.jpg",
    title: "The Red Fort (Lal Qila)",
    description:
      "The Red Fort is a historic fort in the city of Delhi in India, which served as the main residence of the Mughal Emperors.",
    address:
      "Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi 110006",
    location: {
      lat: 28.6561592,
      lng: 77.2410203
    },
    creator: "u2"
  }
];

const UpdatePlace = props => {
  const placeId = useParams().placeId;
  let identifiedPlace = DUMMY_PLACES.find(place => place.id === placeId);
  const [formState, InputHandler] = useForm(
    {
      title: {
        value: identifiedPlace.title || "",
        isValid: true
      },
      description: {
        value: identifiedPlace.description || "",
        isValid: true
      }
    },
    true
  );
  const placeUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };
  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find any place</h2>
      </div>
    );
  }
  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={InputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="texrtarea"
        label="description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description."
        onInput={InputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
