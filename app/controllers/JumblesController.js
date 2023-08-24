import { AppState } from "../AppState.js"
import { jumblesService } from "../services/JumblesService.js"
import { setHTML } from "../utils/Writer.js"

function _drawJumbles() {
  console.log('draw jumbles')
  let jumbles = AppState.jumbles
  let content = ''
  jumbles.forEach(j => content += j.ListTemplate)
  setHTML('jumble-list', content)
}

// TODO call this fn whenver the active jumble changes in the appstate
function _drawActive() {
  let active = AppState.activeJumble
  setHTML('active-jumble', active.activeTemplate)
}



export class JumblesController {
  constructor() {

    console.log('hello')
    _drawJumbles()
    AppState.on('activeJumble', _drawActive)
  }
  start(jumbleId) {
    // debugger
    console.log('active', jumbleId)
    jumblesService.setActiveJumble(jumbleId)
    // _drawActive()
  }

}

