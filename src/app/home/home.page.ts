import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public rating: number = 0;
  public loading: any;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {

  }

  setRating(rating: number){
    this.rating = rating;
  }

  cancel() {
    this.navCtrl.navigateRoot('');
  }

  submitFeedback() {
  }

}
