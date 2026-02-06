export const API_PORT = "8080";
export const API_BASE_URL = `http://localhost:${API_PORT}`;

export const AUTH_API = {
  LOGIN: `${API_BASE_URL}/users/signin`,
  REGISTER: `${API_BASE_URL}/users/register`,

};

export const COOKIE_API = {
  LIST: `${API_BASE_URL}/cookie/list`,
  UPDATE: `${API_BASE_URL}/cookie`,      
  DELETE: `${API_BASE_URL}/cookie`,      
};

export const ADD_COOKIE_API = {
  ADD: `${API_BASE_URL}/cookie/add-cookie`,
};

export const CATEGORY_API = {
  ADD: `${API_BASE_URL}/category/add-category`,
};


//---------------------------------------------------
export const STORAGE_KEYS = {

  TOKEN: "token",
  ROLE: "role",
  CUSTOMER: "customer", 
};
