import axios from "axios";

export const getUser = () => {
    const API = axios.create({baseURL: "https://664b523835bbda10987c7312.mockapi.io"});
    return API.get("/api/v1/users")
}

export const createUser = () => {}
export const deleteUser = () => {}