
import * as deso from "deso-protocol"
import { PUB_KEY } from '$lib/shared/utils'
import type { OfferingExtraDateRequest, OfferingOptionsExtraDataRequest } from '$lib/shared/utils'
import type { CalfOfferingGame } from "$lib/shared/validators"
export const load = async () => {
  const fetchOfferings = async () => {
    const res = await deso.getPostsForUser({ PublicKeyBase58Check: PUB_KEY, "NumToFetch": 20, })
    return orderByActivity(res.Posts ?? [])
  }
  const offerings = await fetchOfferings()
  const offeringsWithGameState = offerings.map(offering => {
    const game: CalfOfferingGame = JSON.parse(offering.PostExtraData?.goldenCalf) as unknown as CalfOfferingGame
    return { offering, state: game.state }
  })
  const offeringsByGameState = groupBy(offeringsWithGameState, 'state')
  // groupBy(offerings.,)
  return { offerings: offeringsByGameState }
}
const orderByActivity = (posts: deso.PostEntryResponse[]) => {
  // highest score goes first
  return posts.filter(p => {
    return true
    // return p.PostExtraData.isTrue === 'true'
  }).map(p => {
    const extraData: OfferingExtraDateRequest = p.PostExtraData as OfferingExtraDateRequest
    // amount  of likes 1
    // amount of bids 3
    // ending soon 1
    return p
  })
}

type GenericObject = Record<string, any>;
function groupBy<T extends GenericObject, Y>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((acc, obj) => {
    const keyValue = obj[key] as string | number; // Assuming the key is a string or number
    acc[keyValue] = acc[keyValue] || [];
    acc[keyValue].push(obj);
    return acc;
  }, {} as Record<string, T[]>);
}
