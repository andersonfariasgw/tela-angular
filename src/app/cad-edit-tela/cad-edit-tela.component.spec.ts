import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadEditTelaComponent } from './cad-edit-tela.component';

describe('CadEditTelaComponent', () => {
  let component: CadEditTelaComponent;
  let fixture: ComponentFixture<CadEditTelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadEditTelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadEditTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
