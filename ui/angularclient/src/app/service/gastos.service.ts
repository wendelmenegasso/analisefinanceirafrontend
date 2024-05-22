import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Gastos } from '../model/gastos';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  private saveGastosUrl: string;
  private findUrl: string;
  private deleteUrl: string;
  private recebeDadosAlterarGastosUrl: string;
  private alterarUrl: string;
  private gerarRelatorioGasto: string;

  constructor(private http: HttpClient) {
    this.findUrl = 'http://192.168.15.101:9090/listarGasto';
    this.saveGastosUrl = 'http://192.168.15.101:9090/criarGasto';
    this.deleteUrl = 'http://192.168.15.101:9090/deletarGasto/';
    this.recebeDadosAlterarGastosUrl = 'http://192.168.15.101:9090/recebeDadosAlterarGasto';
    this.alterarUrl = 'http://192.168.15.101:9090/alterarGasto';
    this.gerarRelatorioGasto = 'http://192.168.15.101:9090/gerarRelatorioGasto';

    //this.findUrl = 'http://20.124.3.145:9090/listarGasto';
    //this.saveGastosUrl = 'http://20.124.3.145:9090/criarGasto';
    //this.deleteUrl = 'http://20.124.3.145:9090/deletarGasto/';
    //this.recebeDadosAlterarGastosUrl = 'http://20.124.3.145:9090/recebeDadosAlterarGasto';
    //this.alterarUrl = 'http://20.124.3.145:9090/alterarGasto';
  }

  public findAll(user: string): Observable<Gastos[]> {
    return this.http.post<Gastos[]>(this.findUrl, user);
  }

  public gerarRelatorio(gastos: Gastos): Observable<Blob> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(this.gerarRelatorioGasto, gastos, { responseType: 'blob', headers });
  }

  public save(gastos: Gastos) : Observable<Gastos> {
    return this.http.post<Gastos>(this.saveGastosUrl, gastos);
  }

  public delete(id: string) : Observable<any>{
    let headers = new HttpHeaders();
    headers.append("gastos",btoa("id:"+id));
    return this.http.delete<any>(this.deleteUrl+id, { headers: headers });
  }

  public recebeDadosAlterarRendas(gastos: Gastos) : Observable<Gastos> {
    return this.http.post<Gastos>(this.recebeDadosAlterarGastosUrl, gastos);
  }

  public alterarRendas(gastos: Gastos) : Observable<Gastos>{
    return this.http.put<Gastos>(this.alterarUrl, gastos);
  }
}
