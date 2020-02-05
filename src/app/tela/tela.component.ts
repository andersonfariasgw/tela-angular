import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tela',
  templateUrl: './tela.component.html',
  styleUrls: ['./tela.component.css']
})
export class TelaComponent implements OnInit {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:ban-types
  listagem: Object;

  displayedColumns: string[] = ['NOME', 'CPF'];
  dataSource = this.listagem;

  private header = {
    headers: new HttpHeaders({
      Accept: 'application/json'
    })
  };

  ngOnInit() {

    this.http.get('localhost:8080/teste/listarTodos', this.header).subscribe(data => {
      console.log('aqui');
      this.listagem = data;
    });
    this.listagem = [{nome: 'teste1', cpf: '52369874103.'}, {nome: 'teste2', cpf: '12345678901'}];

  }

  alertando() {
    alert('funciona');
    return false;
  }
}
