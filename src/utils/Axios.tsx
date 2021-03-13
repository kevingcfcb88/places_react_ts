import axios from 'axios';

const key:string = "AIzaSyAp5sIgCfYiJa3nk0qqLl7VPRlIvQXNcdk";
//https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+Sydney&key=${key}
export const instance = axios.create({
    baseURL: `https://maps.googleapis.com/maps/api/place/textsearch/`,
    params: {
        key
    }
});