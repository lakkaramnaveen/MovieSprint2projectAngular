import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtheaterComponent } from './viewtheater.component';

describe('ViewtheaterComponent', () => {
  let component: ViewtheaterComponent;
  let fixture: ComponentFixture<ViewtheaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtheaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
