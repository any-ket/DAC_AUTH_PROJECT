import { host } from '../config/constants'



export async function getObjects(){
  return await fetch(host + "/user/object").json();
}