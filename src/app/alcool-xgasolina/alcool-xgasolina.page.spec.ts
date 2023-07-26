import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlcoolXGasolinaPage } from './alcool-xgasolina.page';

describe('AlcoolXGasolinaPage', () => {
  let component: AlcoolXGasolinaPage;
  let fixture: ComponentFixture<AlcoolXGasolinaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlcoolXGasolinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
