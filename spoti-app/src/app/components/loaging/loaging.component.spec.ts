import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoagingComponent } from './loaging.component';

describe('LoagingComponent', () => {
  let component: LoagingComponent;
  let fixture: ComponentFixture<LoagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
