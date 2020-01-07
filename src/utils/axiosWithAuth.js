import axios from 'axios';

export const axiosWithAuth =()=>{
    const token = localStorage.getItem('token')
    return axios.create({
        baseURL:'https://fish-friends-2020.herokuapp.com/api/',
        headers:{
            authorization: token,
            "Content-Type": "application/json"
        }
    })
};