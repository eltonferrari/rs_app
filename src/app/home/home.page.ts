import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage implements OnInit {
  
  constructor(private navegacao: NavController) { }

  ngOnInit() {
  }
  
  abrirLista() {
    this.navegacao.navigateForward('lista')
  }
  
  abrirGrid() {
    this.navegacao.navigateForward('grid')
  }
    
  abrirEntradaDados() {
    this.navegacao.navigateForward('entrada-dados')
  }

  abrirDataBinding() {
    this.navegacao.navigateForward('data-binding')
  }

  abrirAlcoolXGasolina() {
    this.navegacao.navigateForward('alcool-xgasolina')
  }
}