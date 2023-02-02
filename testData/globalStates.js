import { atom } from "jotai";
import { newAllTutorials } from "./NewAllTutorials";

//list
const list = newAllTutorials;
export const allTutorials = atom(list);

//users
const users = [
  {
    email: "test@test",
    password: "test",
    name: "MusterFrau/Mustermann",
    img: "https://i.ytimg.com/vi/bCIMMl3e7dY/hqdefault.jpg",
    bio: "Hallo, ich bin ein Test und Preview Nutzer",
  },
  {
    email: "tariqalqadi@gmx.de",
    password: "abc",
    name: "Tariq",
    img: "https://i.ytimg.com/vi/5n4ocBp3K0A/maxresdefault.jpg",
    bio: "hallo ich bion tariq",
  },
];
export const allUsers = atom(users);

//current user
const initialUser = {
  email: "",
  password: "",
  name: "MusterFrau/Mustermann",
  img: "https://i.ytimg.com/vi/bCIMMl3e7dY/hqdefault.jpg",
  bio: "Hallo, ich bin ein Test und Preview Nutzer",
};
export const currentUser = atom(initialUser);
