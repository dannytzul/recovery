import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss'],
})
export class ChecklistPage implements OnInit {

  public form = [
    { val: 'Mild swelling of the lower leg', isChecked: false },
    { val: 'Tenderness in the leg', isChecked: false },
    { val: 'Muscle pain', isChecked: false },
    { val: 'Pain and tenderness along the tibia', isChecked: false }
  ];


  constructor() { }

  ngOnInit() {
  }

}
