import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Musica from 'src/app/model/entities/Musica';
import { FirebaseService } from 'src/app/model/service/firebase.service';
import { MusicaService } from 'src/app/model/service/musica.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  public nome! :string;
  public banda! : string;
  public anoLancamento!: number;
  public genero!: string;
  public album!: string;

  constructor(private alertController: AlertController,
    private router : Router,
    private firebase: FirebaseService)  { }

  ngOnInit() {
  } 

  cadastrar(){
    if(this.nome && this.banda && this.anoLancamento && this.genero && this.album){
      let novo : Musica = new Musica(this.nome, this.banda, this.anoLancamento, this.genero, this.album);
      this.firebase.create(novo);
      this.presentAlert("Sucesso", "Musica Salva!");
      this.router.navigate(["/home"]);
    }else{
     this.presentAlert("Erro", "Campos Obrigatórios!");
    }
  }

  async presentAlert(subHeader : string, message : string) {
    const alert = await this.alertController.create({
      header: 'Agenda de Musicas',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

}