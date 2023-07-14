import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.page.html',
  styleUrls: ['./botoes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BotoesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
