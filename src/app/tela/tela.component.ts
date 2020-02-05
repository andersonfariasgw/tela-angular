import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-tela',
  templateUrl: './tela.component.html',
  styleUrls: ['./tela.component.css']
})
export class TelaComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  // tslint:disable-next-line:ban-types
  listagem: Object;

  displayedColumns: string[] = ['NOME', 'CPF', 'Acao'];
  dataSource = this.listagem;

  private header = {
    headers: new HttpHeaders({
      Accept: 'application/json'
    })
  };

  private handleError(error: any) { 
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(error);
  }

  ngOnInit() {
    this.http.get('http://127.0.0.1:8080/teste/listarTodos', this.header).subscribe(data => {
      this.listagem = data;
    });
  }

  remover(id){
    this.http.post('http://127.0.0.1:8080/teste/remover', JSON.stringify(id), this.header).subscribe(data=>{
      location.reload();
      // this.router.navigate(["/"]);
    });
  }
}
