
export { spookyPosts } from "./data";
export const node = 'https://node.deso.org/api/v0/';
export const api = 'http://localhost:3000/';
export const betNewEndpoint = 'bet/new';

// Make an HTTP POST request
// TODO turn this api into array that returns request function response function, request model, response model, per endpoint

export async function post(endpoint: string, payload: any = {}) {
  let response = await fetch(`${api}${endpoint}`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    // @ts-ignore
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(payload) // body data type must match "Content-Type" header
  });
  response = await response.json();
  // @ts-ignore
  return response.result.data;
}

export async function get(endpoint: string, data?: any) {
  // return
  // const params = data ? `?input=${encodeURI(JSON.stringify(data))}` : '';
  // let response = await fetch(`${baseUrl}/${endpoint}${params}`);
  // response = await response.json();
  // @ts-ignore
  // return response.result.data;
}
