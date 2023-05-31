// import jwtDecode from "jwt-decode";
// import http from "./httpServices";
// import { apiUrl } from "../config.json";

// const apiEndpoint = apiUrl + "/auth";
// const tokenkey = "token";
// http.setJwt(getJwt());
// export async function login(email, password) {
//   const { data: jwt } = await http.post(apiEndpoint, { email, password });
//   localStorage.setItem(tokenkey, jwt);
// }
// export function loginWithJwt(jwt) {
//   localStorage.setItem(tokenkey, jwt);
// }
// export function logout() {
//   localStorage.removeItem(tokenkey);
// }

// export function getCurrentUser() {
//   try {
//     const jwt = localStorage.getItem(tokenkey);
//     return jwtDecode(jwt);
//   } catch (ex) {
//     return null;
//   }
// }
// export function getJwt() {
//   localStorage.getItem(tokenkey);
// }

// export default {
//   logout,
//   login,
//   getCurrentUser,
//   loginWithJwt,
//   getJwt,
// };
