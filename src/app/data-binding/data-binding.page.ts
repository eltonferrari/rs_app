import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.page.html',
  styleUrls: ['./data-binding.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DataBindingPage {

  public titulo: String = "App Resolve Systems"
  public imagemRandomica: String = "https://images.unsplash.com/photo-1550686041-366ad85a1355?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  public imagemLocal: String = "../../assets/icone-celular.png"
  public atualiza(): void{
    this.titulo = "Altera título"
  }
  public altera(): void {
    this.titulo = "ResolveSystems.com.br"
  }


}
