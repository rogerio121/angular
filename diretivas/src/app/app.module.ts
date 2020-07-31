import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivasNgswitchComponent } from './diretivas-ngswitch/diretivas-ngswitch.component';
import { DiretivasNgForComponent } from './diretivas-ng-for/diretivas-ng-for.component';
import { DiretivasNgClassComponent } from './diretivas-ng-class/diretivas-ng-class.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    DiretivasNgswitchComponent,
    DiretivasNgForComponent,
    DiretivasNgClassComponent,
    DiretivaNgstyleComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    HighlightMouseDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
