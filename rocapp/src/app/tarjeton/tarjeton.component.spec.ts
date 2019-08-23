import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetonComponent } from './tarjeton.component';

describe('TarjetonComponent', () => {
  let component: TarjetonComponent;
  let fixture: ComponentFixture<TarjetonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
