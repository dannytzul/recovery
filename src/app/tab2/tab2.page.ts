import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public alertCtrl: AlertController, private callNumber: CallNumber) { }

  async call(num) {
    console.log('click works');
    this.callNumber.callNumber(num, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
    console.log('click works');
    // const alert = await this.alertCtrl.create({
    //   header: 'Confirm!',
    //   message: 'Message <strong>text</strong>!!!',
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       role: 'cancel',
    //       cssClass: 'secondary',
    //       handler: (blah) => {
    //         console.log('Confirm Cancel: blah');
    //       }
    //     }, {
    //       text: 'Okay',
    //       handler: () => {
    //         console.log('Confirm Okay');
    //       }
    //     }
    //   ]
    // });

    // await alert.present();
  }
}
