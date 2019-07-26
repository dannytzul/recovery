import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { async } from 'q';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public alertController: AlertController) {}
}
