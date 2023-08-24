import { generateId } from "../utils/generateId.js"

generateId
export class Jumble {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
    // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
    this.fastestTime = null
    this.startTime = null
    this.endTime = null
  }

  get ListTemplate() {
    return /*html*/ `  <div class="my-2" >
    <button onclick="app.JumblesController.start('${this.id}')" class="btn btn-info">start</button>
    <span>${this.name}</span>
    <span>Jumble HS </span>
    <span>WPM</span>
        </div>`
  }

  get activeTemplate() {
    return /*html*/ `<div>${this.name}</div>
    <div>form entry</div>
    `
  }

}