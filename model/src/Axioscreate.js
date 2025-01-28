import axios from "axios"

const basicUrl="http://localhost:8000"

const token=JSON.parse(JSON.parse(localStorage.getItem('persist:tourism')).loginData) && JSON.parse(JSON.parse(localStorage.getItem('persist:tourism')).loginData).jswtoken



console.log("where token ????",token);


export const PublicRequest=axios.create({
    baseURL:basicUrl
})

export const SecureRequest=axios.create({
    baseURL:basicUrl,
    headers:{token:token}
})