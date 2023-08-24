import { AppState } from "../AppState.js"
import { Jumble } from "../models/Jumble.js"


class JumblesService {
  createJumble(formData) {

  }
  setActiveJumble(jumbleId) {
    const foundJumble = AppState.jumbles.find(j => j.id == jumbleId)
    AppState.activeJumble = foundJumble
    // console.log(activeJumble)
  }
}

export const jumblesService = new JumblesService