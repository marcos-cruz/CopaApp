import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCampeaoComponent } from './listar-campeao.component';

describe('ListarCampeaoComponent', () => {
  let component: ListarCampeaoComponent;
  let fixture: ComponentFixture<ListarCampeaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCampeaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCampeaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
