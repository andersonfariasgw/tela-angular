import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


export interface Usuario{
  id:string;
  nome:string;
  cpf: string;
  dataNascimento: string;
  senha: string;
}

@Component({
  selector: 'app-cad-edit-tela',
  templateUrl: './cad-edit-tela.component.html',
  styleUrls: ['./cad-edit-tela.component.css']
})
export class CadEditTelaComponent implements OnInit {

  tipoAcesso : string;
  id : string;
  usuario: Usuario;

  private header = {
    headers: new HttpHeaders({
      "Content-Type": 'application/json'
    })
  };

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.tipoAcesso = (this.activatedRoute.snapshot.paramMap.get('tipo_acesso'));
    this.id = (this.activatedRoute.snapshot.paramMap.get('id'));
   }

  ngOnInit() {
    this.usuario = {id:"", nome:"", cpf:"", dataNascimento:"", senha:""};
    
    if(this.tipoAcesso == "carregar"){
      this.http.get<Usuario>('http://192.168.0.211:8080/teste/carregar/'+this.id).subscribe(data => {
        this.usuario = data;
      });
    }
  }
  private handleError(error: any) { 
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    alert(error.error.message);
    return Observable.throw(error);
  }
  
  
  alertando(){
    if(this.tipoAcesso == "carregar"){
      this.http.post('http://192.168.0.211:8080/teste/alterar', JSON.stringify(this.usuario), this.header).pipe(catchError(this.handleError)).subscribe(data=>{
      this.router.navigate(["/tela"])
    });
    }else{
      this.http.post('http://192.168.0.211:8080/teste/novo', JSON.stringify(this.usuario), this.header).subscribe(data=>{
        this.router.navigate(["/tela"])
      });
    }
  }

}
