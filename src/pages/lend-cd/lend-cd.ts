import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CD } from '../cd-list/CD';
import { livresEtCdServices } from '../../services/livresEtCdServices';

/**
 * Generated class for the LendCdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage implements OnInit {

  cd: CD;
  index: number;
  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public serviceCd: livresEtCdServices) {
  }


  ngOnInit() {
    this.index = this.navParams.get('index')
    this.cd = this.serviceCd.CdList[this.index];
  }
  dismissModal() {
    this.viewCtrl.dismiss();
  }

  OnToggleCD() {
    this.serviceCd.preterLivreOuCD(this.cd);
  }
}
