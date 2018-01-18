import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { IAutenticacaoService } from '../../providers.interfaces/IAutenticacaoService';
import { LoginModel } from '../../models/LoginModel';
import { Observable } from 'rxjs/Observable';
import { HelloIonicConstantes } from '../../app/HelloIonicConstantes';
import {Response} from '@angular/http';
import 'rxjs/add/observable/throw';


@Injectable()
export class AutenticacaoService implements IAutenticacaoService {

  constructor(public http: HttpClient) {
    console.log('Hello AutenticacaoServiceProvider Provider');
  }

  login(LoginModel: LoginModel): Observable<void> {
    if (!LoginModel || LoginModel.email || !LoginModel.senha) {
      return Observable.throw('Email e/ou senha não informados.');
    }
    let corpoRequisicao = {
      email: LoginModel.email,
      senha: LoginModel.senha
    }
    return this.http.post(HelloIonicConstantes.BASE_URL + '/' + HelloIonicConstantes.Auth.LOGIN, corpoRequisicao)
      .map(response => {
        let resp = response;
      });
  }
  logout(): void {

  }

}
