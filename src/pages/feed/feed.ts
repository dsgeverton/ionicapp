import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public objFeed = {
    nomeUsuario:"Everton Gonçalves",
    dataPostagem:"10 de Dezembro, 2018",
    conteudoPostagem:"Criando meu primeiro app híbrido com Ionic!",
    qtdLikes: 10,
    qtdComentarios: 5,
    horaAtual: 21,
    horaPostagem: 14,
    horasPassadas: 0,
    uriImagemPerfil:"../../assets/imgs/evertonImgPerfil.jpeg"
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.objFeed.horasPassadas = this.calcularHoraPostagem();
  }

  public calcularHoraPostagem():number{
    return this.objFeed.horaAtual - this.objFeed.horaPostagem;
  }

}
