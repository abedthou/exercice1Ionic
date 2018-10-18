import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { livresEtCdServices } from '../../services/livresEtCdServices';
import { LendBookPage } from '../lend-book/lend-book';
import { book } from './book';

/**
 * Generated class for the BookListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
  providers: [livresEtCdServices],
})
export class BookListPage {
  public livreList: book[] = [];
  public livre: book;
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, public serviceLivre: livresEtCdServices) {
  }

  ionViewWillEnter() {
    this.livreList = this.serviceLivre.livresList.slice();
  }


  OnLoadBook(index: number) {
    let modal = this.modalCtrl.create(LendBookPage, { index: index })
    modal.present();
  }
}
