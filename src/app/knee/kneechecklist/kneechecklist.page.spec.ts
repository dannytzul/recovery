import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss'],
})
export class ChecklistPage implements OnInit {

  public form = [
    { val: 'Pain in and around the kneecap', isChecked: false },
    { val: 'Rubbing, grinding, or clicking sound of the kneecap that you hear when you bend and straighten your knee', isChecked: false },
    { val: 'Kneecap that is tender to the touch', isChecked: false },
    { val: 'Your bones aren’t lined up', isChecked: false }
  ];

  constructor() { }

  ngOnInit() {
  }

}

