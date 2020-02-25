import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http:HttpClient) { }

  sendMail(formData){
    console.log(formData);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json' }) };
    return this.http.post('http://localhost:8080/contact', formData, httpOptions).subscribe();//envoi des données au back
  }
  
}


/*
.subscribe()
http (toutes requetes) envoie un callback donc y souscrire est une bonne pratique
En paramètre du subscribe() on peut ajouter une callback :
(data)=>{
  console.log(data);
  }
Elle récupèrera des données pour le débug
*/
