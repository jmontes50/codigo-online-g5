import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardprodComponent } from './cardprod.component';

describe('CardprodComponent', () => {
  let component: CardprodComponent;
  let fixture: ComponentFixture<CardprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardprodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
