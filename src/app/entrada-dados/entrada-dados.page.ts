import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-entrada-dados',
  templateUrl: './entrada-dados.page.html',
  styleUrls: ['./entrada-dados.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EntradaDadosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
