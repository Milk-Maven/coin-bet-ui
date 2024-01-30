
// export const node = 'https://node.deso.org/api/v0/';
import { endpoints } from './shared/utils';
import type { CalfOfferingGame, CalfProfileGame, CalfWeekGame } from './shared/validators';

// Make an HTTP POST request
// TODO turn this api into array that returns request function response function, request model, response model, per endpoint

export async function post(endpoint: string, payload: any = {}) {
  const api = 'http://localhost:3000/'
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
  return response;
}
export type GetSnapShotResponse = { profile: CalfProfileGame, week: CalfWeekGame, offerings: CalfOfferingGame[] }
export const getSnapShot = async (payload: { week: number | null }): Promise<GetSnapShotResponse> => {
  const res = await post(endpoints.snapshot, payload) as unknown as GetSnapShotResponse
  return res
}

// export type MakeOfferingResponse = { profile: CalfProfileGame, week: CalfWeekGame, offerings: CalfOfferingGame[] }
export const makeOffering = async (payload: CalfOfferingGame) => {
  post(endpoints.offering, payload)
}
