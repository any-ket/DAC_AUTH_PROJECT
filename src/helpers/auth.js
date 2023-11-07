import { host } from '../config/constants'


export async function auth (email, pw, name) {
  return await fetch(host + "/auth/signup", {method: "post", body: JSON.stringify({email, password: pw, name}), credentials: 'include'});
}
// export function logout () {
// }

export async function login (email, pw) {
  return await fetch(host + "/auth/login", {method: "POST", body: JSON.stringify({email, password: pw}), headers: {"Content-Type": "application/json"}});
}

export function saveUser (user) {
  // return ref.child(`users/${user.uid}/info`)
  //   .set({
  //     email: user.email,
  //     uid: user.uid
  //   })
  //   .then(() => user)
}

export async function  checkIsLoggedIn(){
  return await fetch(host + "/auth/isloggedin");
}
