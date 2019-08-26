import { Component, OnInit } from '@angular/core';
import Bomb from '../../models/bomb';
import { BombService } from '../../services/bomb/bomb.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  bombParameters: Bomb;

  constructor(private bombService: BombService) {
  }

  onChangeParameter() {
    this.bombService.setBombParameters(this.bombParameters);
  }

  ngOnInit() {
    this.bombParameters = new Bomb();
  }

}
