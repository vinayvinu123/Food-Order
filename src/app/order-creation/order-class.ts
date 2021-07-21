export class Order{
  userName: string;
  bun = 2;
  cheeseSlices?: number;
  salads?: boolean;
  cutlets?: number;
  price?: number;

  constructor(userName, cheeseSlices= 0, salads = false, cutlets= 0){
    this.userName = userName;
    this.cheeseSlices = cheeseSlices;
    this.salads = salads;
    this.cutlets = cutlets;
  }


}
