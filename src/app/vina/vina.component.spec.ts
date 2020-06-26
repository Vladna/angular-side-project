import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinaComponent } from './vina.component';

describe('VinaComponent', () => {
  let component: VinaComponent;
  let fixture: ComponentFixture<VinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
