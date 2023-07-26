import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-alcool-xgasolina',
  templateUrl: './alcool-xgasolina.page.html',
  styleUrls: ['./alcool-xgasolina.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlcoolXGasolinaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
