import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinaItemComponent } from './vina-item.component';

describe('VinaItemComponent', () => {
  let component: VinaItemComponent;
  let fixture: ComponentFixture<VinaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
