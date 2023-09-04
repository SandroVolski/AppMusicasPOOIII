import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import Musica from '../entities/Musica';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private PATH : string = 'musicas';

  constructor(private firestore : AngularFirestore) { }

  read(){
    return this.firestore.collection(this.PATH)
    .snapshotChanges();
  }

  create(musica: Musica){
    return this.firestore.collection(this.PATH)
    .add({nome: musica.nome, banda: musica.banda, anoLancamento: musica.anoLancamento, album: musica.album, genero: musica.genero});
  }

  update(musica: Musica, id: string){
    return this.firestore.collection(this.PATH).doc(id)
    .update({nome: musica.nome, banda: musica.banda, anoLancamento: musica.anoLancamento, album: musica.album, genero: musica.genero});
  }

  delete(musica: Musica){
    return this.firestore.collection(this.PATH).doc(musica.id).delete()
  }
}






















