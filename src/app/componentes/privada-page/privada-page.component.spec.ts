import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivadaPageComponent } from './privada-page.component';

describe('PrivadaPageComponent', () => {
  let component: PrivadaPageComponent;
  let fixture: ComponentFixture<PrivadaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivadaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivadaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
