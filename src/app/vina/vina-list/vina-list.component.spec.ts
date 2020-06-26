import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinaListComponent } from './vina-list.component';

describe('VinaListComponent', () => {
  let component: VinaListComponent;
  let fixture: ComponentFixture<VinaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
