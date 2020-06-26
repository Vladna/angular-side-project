import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinaDetailComponent } from './vina-detail.component';

describe('VinaDetailComponent', () => {
  let component: VinaDetailComponent;
  let fixture: ComponentFixture<VinaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
