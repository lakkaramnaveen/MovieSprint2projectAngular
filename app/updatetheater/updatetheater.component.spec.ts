import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetheaterComponent } from './updatetheater.component';

describe('UpdatetheaterComponent', () => {
  let component: UpdatetheaterComponent;
  let fixture: ComponentFixture<UpdatetheaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatetheaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
