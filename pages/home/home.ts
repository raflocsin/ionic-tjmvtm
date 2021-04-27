
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  price: number;
  length: number;
  dpAmount: number;
  lAmount: number;
  TIP: number;
  monPay: number;

  constructor(public navCtrl: NavController) {}
 
calculateIP() {
  
  this.dpAmount= this.price*0.40;
  this.dpAmount = parseFloat(this.dpAmount.toFixed(2));

  this.lAmount= this.price-this.dpAmount;
  this.lAmount = parseFloat(this.lAmount.toFixed(2));

  this.TIP= (this.lAmount*3.9/100)*this.length;

  this.monPay= (this.lAmount + this.TIP)/this.length;
  this.monPay = parseFloat(this.monPay.toFixed(2));



}
}

