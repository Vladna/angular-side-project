import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinaEditComponent } from './vina-edit.component';

describe('VinaEditComponent', () => {
  let component: VinaEditComponent;
  let fixture: ComponentFixture<VinaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
