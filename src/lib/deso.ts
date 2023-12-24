import * as deso from "deso-protocol";
export const requireLogin = async () => {
  try {
    const response = await deso.identity.login()
    return response
  } catch {
    return undefined
  }

}

