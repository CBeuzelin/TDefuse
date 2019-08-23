import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { WiresVerticalComponent } from './components/wires-vertical/wires-vertical.component';
import { WiresHorizontalComponent } from './components/wires-horizontal/wires-horizontal.component';
import { ButtonComponent } from './components/button/button.component';
import { SymbolsComponent } from './components/symbols/symbols.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { MemoryComponent } from './components/memory/memory.component';
import { WiresCrossedComponent } from './components/wires-crossed/wires-crossed.component';
import { PasswordComponent } from './components/password/password.component';
import { SimonComponent } from './components/simon/simon.component';
import { MazeComponent } from './components/maze/maze.component';
import { MorseComponent } from './components/morse/morse.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'wires-horizontal', component: WiresHorizontalComponent},
  {path: 'button', component: ButtonComponent},
  {path: 'symbols', component: SymbolsComponent},
  {path: 'simon', component: SimonComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'memory', component: MemoryComponent},
  {path: 'morse', component: MorseComponent},
  {path: 'wires-vertical', component: WiresVerticalComponent},
  {path: 'wires-crossed', component: WiresCrossedComponent},
  {path: 'maze', component: MazeComponent},
  {path: 'password', component: PasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
