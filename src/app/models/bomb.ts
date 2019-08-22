export default class Bomb {
  parity: boolean;
  voyel: boolean;
  nbBatteries: number;
  parallel: boolean;
  carIndicator: boolean;
  frkIndicator: boolean;

  constructor() {
    this.parity = false;
    this.voyel = false;
    this.nbBatteries = 0;
    this.parallel = false;
    this.carIndicator = false;
    this.frkIndicator = false;
  }
}
