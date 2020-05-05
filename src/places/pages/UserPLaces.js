import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

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
      lng: 78.0421422,
    },
    creator: "u1",
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
      lng: 77.2410203,
    },
    creator: "u2",
  },
];
const UserPLaces = () => {
  const userId = useParams().userId;
  const filterPLaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={filterPLaces} />;
};

export default UserPLaces;
