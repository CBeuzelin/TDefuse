import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Bomb from '../../models/bomb';

@Injectable({
  providedIn: 'root'
})
export class BombService {

  private bombParameters: BehaviorSubject<Bomb> = new BehaviorSubject<Bomb>(new Bomb());
  currentBombParameters = this.bombParameters.asObservable();

  constructor() { }

  setBombParameters(bombParameters: Bomb) {
    this.bombParameters.next(bombParameters);
  }

  getBombParameters(): Observable<Bomb> {
    return this.currentBombParameters;
  }
}
