import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule, RadioButtonModule, ToggleButtonModule } from 'primeng/primeng';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuComponent } from './components/menu/menu.component';
import { WiresVerticalComponent } from './components/wires-vertical/wires-vertical.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { WiresHorizontalComponent } from './components/wires-horizontal/wires-horizontal.component';
import { WiresCrossedComponent } from './components/wires-crossed/wires-crossed.component';
import { SimonComponent } from './components/simon/simon.component';
import { ButtonComponent } from './components/button/button.component';
import { MazeComponent } from './components/maze/maze.component';
import { MemoryComponent } from './components/memory/memory.component';
import { PasswordComponent } from './components/password/password.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { SymbolsComponent } from './components/symbols/symbols.component';
import { MorseComponent } from './components/morse/morse.component';
import { KnobComponent } from './components/knob/knob.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MenuComponent,
    WiresHorizontalComponent,
    ButtonComponent,
    SymbolsComponent,
    SimonComponent,
    CalculatorComponent,
    MemoryComponent,
    MorseComponent,
    WiresVerticalComponent,
    WiresCrossedComponent,
    MazeComponent,
    PasswordComponent,
    KnobComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    ToggleButtonModule,
    RadioButtonModule,
    PerfectScrollbarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
