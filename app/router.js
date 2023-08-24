import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { JumblesController } from "./controllers/JumblesController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: JumblesController,
    view: /*html*/`
    <div class="container">
    <section class="row">
      <div class="col-3">
        <h1>Jungle Jumble</h1>
    </section>
  </div>
  <div class="row">
    <div class="col-7" id="active-jumble">

    </div>

    <div class="col-5" id="jumble-list">

    </div>
  </div>
  </div>

    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]

  // REVIEW we moved this from line 26 and abstracted to the model ListTemplate
  // STUB list template
  //     <div >
  // <button class="btn btn-info">start</button>
  // <span>Jumble Name</span>
  // <span>Jumble HS </span>
  // <span>WPM</span>
  //     </div>

  // //REVIEW - we moved this from line 21 and abstracted to the model ActiveTemplate
  // //STUB - active template
  // < div > easy jumble</>
  //   <div>form entry</div>