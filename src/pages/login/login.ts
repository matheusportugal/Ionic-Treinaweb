import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaginaBase } from '../../infraestrutura/PaginaBase';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HelloIonicValidadores } from '../../validadores/HelloIonicValidadores';
import { LoginModel } from '../../models/LoginModel';
import { HomePage } from '../home/home';
import { AlertController, ToastController, LoadingController} from 'ionic-angular';
import { IAutenticacaoService } from '../../providers.interfaces/IAutenticacaoService';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage extends PaginaBase {

  loginFrmGroup: FormGroup;
  foiSubmetido: boolean;
  loginModel: LoginModel;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder, public alertCtrl: AlertController, @Inject('IAutenticacaoService') public autenticacaoService: IAutenticacaoService,
    public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    super({ FormBuilder: formBuilder, alertCtrl: alertCtrl, LoadingCtrl: loadingCtrl, toastCtrl: toastCtrl  });
    this.foiSubmetido = false;
    this.loginModel = new LoginModel();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(): void {
    this.foiSubmetido = true;
    this.esconderToast();
    if (this.loginFrmGroup.valid){
      this.mostrarLoading('Fazendo login...');
      this.autenticacaoService.login(this.loginModel).subscribe(
        data =>{
          this.esconderLoading();
          this.navCtrl.setRoot(HomePage, {}, {animate: true, direction: 'forward'});

        } ,
        err => {
          this.esconderLoading();
          this.mostrarToast(`${err}`);
        }
      );    
    } 
  }

  protected doCarregarValidadores(): void {
    this.loginFrmGroup = this._formBuilder.group({
      email: ['', Validators.compose([Validators.required, HelloIonicValidadores.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }

}
