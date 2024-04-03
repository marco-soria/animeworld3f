import { API_URL } from "../helpers/api";

export const postLoginService = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const postClientFullService = async (client) => {
  try {
    client ={
      user: {
        username: client.username,
        first_name: client.first_name,
        last_name: client.last_name,
        email: client.email,
        password: client.password
      },
      phone: client.phone,
      address: client.address
    }

    console.log("new client : ",client)
    const response = await fetch(`${API_URL}/client/full`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(client),
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const getUserProfile = async () =>{
  try{
    const token = localStorage.getItem('access_token');
    if(!token){
      return null;
    }
    const payload = token.split(".")[1];
    const jsonPayload = JSON.parse(window.atob(payload));
    console.log(jsonPayload.user_id)
    const user_id = jsonPayload.user_id;
    
    const response = await fetch(`${API_URL}/user/${user_id}`, {
      method: "GET"
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data;

  }catch(error){
    console.log(error);
    return null;
  }
}

export const getClientProfileByUserId = async (userId) =>{
  try{
    
    const response = await fetch(`${API_URL}/client/byuser/${userId}`, {
      method: "GET"
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data;

  }catch(error){
    console.log(error);
    return null;
  }
}