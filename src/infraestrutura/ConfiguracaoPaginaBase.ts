import { FormBuilder } from '@angular/forms';
//import { AlertController} from 'ionic-angular/components/alert/alert-controller';
import { LoadingController,ToastController, AlertController } from 'ionic-angular';

export interface ConfiguracaoPaginaBase {

    //FormBuilder? - Validação de formulário e a ? mostra que é opcional
    FormBuilder?: FormBuilder;
    alertCtrl?: AlertController;
    LoadingCtrl?: LoadingController;
    toastCtrl?: ToastController;

}