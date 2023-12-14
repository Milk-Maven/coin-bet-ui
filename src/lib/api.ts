
// export const node = 'https://node.deso.org/api/v0/';
import { endpoints } from './shared/utils';
import type { OfferringCreateRequest } from './shared/validators';

// Make an HTTP POST request
// TODO turn this api into array that returns request function response function, request model, response model, per endpoint

export async function post(endpoint: string, payload: any = {}) {
  let response = await fetch(`${'localhost:3000/'}${endpoint}`, {
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
export const offeringCreate = async (payload: OfferringCreateRequest) => {
  await post(endpoints.offeringCreate, payload)
}
