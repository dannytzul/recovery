import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kneechecklist',
  templateUrl: './kneechecklist.page.html',
  styleUrls: ['./kneechecklist.page.scss'],
})
export class KneechecklistPage implements OnInit {

  constructor() { }
  public form = [
    { val: 'Swelling and stiffness', isChecked: false },
    { val: 'Redness and warmth to the touch.', isChecked: false },
    { val: 'Muscle pain', isChecked: false },
    { val: 'Popping or crunching noises', isChecked: false }
  ];

  ngOnInit() {
  }

}
