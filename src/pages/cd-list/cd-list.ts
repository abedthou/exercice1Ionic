import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { livresEtCdServices } from '../../services/livresEtCdServices';
import { LendCdPage } from '../lend-cd/lend-cd';
import { CD } from './CD';

/**
 * Generated class for the CdListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
  providers: [livresEtCdServices],

})
export class CdListPage {
  public cdList: CD[] = [];
  public cd: CD;
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, public serviceCd: livresEtCdServices) {
  }



  ionViewWillEnter() {
    this.cdList = this.serviceCd.CdList.slice();
  }
  OnLoadCd(index: number) {
    let modal = this.modalCtrl.create(LendCdPage, { index: index })
    modal.present();
  }
}
