import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { book } from '../book-list/book';
import { livresEtCdServices } from '../../services/livresEtCdServices';

/**
 * Generated class for the LendBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit {

  livre: book;
  index: number;
  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public serviceLivre: livresEtCdServices) {
  }


  ngOnInit() {
    this.index = this.navParams.get('index')
    this.livre = this.serviceLivre.livresList[this.index];
  }
  dismissModal() {
    this.viewCtrl.dismiss();
  }

  OnToggleBook() {
    this.serviceLivre.preterLivreOuCD(this.livre);
  }

}
