import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatresComponent } from './featres.component';

describe('FeatresComponent', () => {
  let component: FeatresComponent;
  let fixture: ComponentFixture<FeatresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
