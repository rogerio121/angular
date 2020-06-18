import { Component } from '@angular/core';
import * as M from "materialize-css/dist/js/materialize";
import * as _ from "lodash";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-cli-libs-externas';      

  
  ngAfterViewInit() {
    
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.collapsible');
      var instances = M.Collapsible.init(elems, {});
    });
  }

  //lodash
  list = _.map([1,2,3], (n) => `# ${n}`)
}
