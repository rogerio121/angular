import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ngswitch',
  templateUrl: './diretivas-ngswitch.component.html',
  styleUrls: ['./diretivas-ngswitch.component.scss']
})
export class DiretivasNgswitchComponent implements OnInit {

  constructor() { }

  aba: string = 'home';

  ngOnInit(): void {
  }

}
