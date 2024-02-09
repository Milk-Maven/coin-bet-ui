
import * as deso from "deso-protocol"
import { PUB_KEY } from '$lib/shared/utils'
import type { OfferingExtraDateRequest, OfferingOptionsExtraDataRequest } from '$lib/shared/utils'
import type { CalfOfferingGame } from "$lib/shared/validators"
import { getSnapShot } from "$lib/api"
export const load = async () => {
  // console.log('here')
  // const snapshot = await getSnapShot({ week: null });
  // console.log(snapshot)

  const snapshot = await getSnapShot({ week: null });
  const calfWeeks = snapshot.profile.calfWeeks ?? {}
  const posts = await Promise.all(Object.keys(calfWeeks).map(async (key) => {
    const PostHashHex = calfWeeks[key]
    const week = await deso.getSinglePost({ PostHashHex })
    return week.PostFound
  }))
  console.log(posts)
  return { snapshot, posts }
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

