import * as deso from "deso-protocol"
import { PUB_KEY } from '$lib/shared/utils'
import type { OfferingExtraDateRequest, OfferingOptionsExtraDataRequest } from '$lib/shared/utils'
export const load = async () => {
  const fetchOfferings = async () => {
    const res = await deso.getPostsForUser({ PublicKeyBase58Check: PUB_KEY, "NumToFetch": 20, })
    return orderByActivity(res.Posts ?? [])
  }
  return { offerings: await fetchOfferings() }
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
