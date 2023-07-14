import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntradaDadosPage } from './entrada-dados.page';

describe('EntradaDadosPage', () => {
  let component: EntradaDadosPage;
  let fixture: ComponentFixture<EntradaDadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EntradaDadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
