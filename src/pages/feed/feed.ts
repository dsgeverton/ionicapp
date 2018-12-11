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

  public nomeUsuario:string = "Everton Gonçalves";
  public dataPostagem:string = "10 de Dezembro, 2018";
  public conteudoPostagem:string = "Criando meu primeiro app híbrido com Ionic!";
  public qtdLikes:number = 10;
  public qtdComentarios:number = 5;
  public horaAtual:number = 21;
  public horaPostagem:number = 14;
  public horasPassadas:number = 0;
  public uriImagemPerfil:string = "../../assets/imgs/evertonImgPerfil.jpeg"

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.horasPassadas = this.calcularHoraPostagem();
  }

  public calcularHoraPostagem():number{
    return this.horaAtual - this.horaPostagem;
  }

}
