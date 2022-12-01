import axios from "axios";
import requests from "./request";

const instance = axios.create({
    baseURL: "http://api.themoviedb.org/3",
});

//instance.get("/foo-bar");
//https://api.themoviedb.org/3/foo-bar

export default instance;