import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsCardComponent } from './collections-card.component';

describe('CollectionsCardComponent', () => {
  let component: CollectionsCardComponent;
  let fixture: ComponentFixture<CollectionsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
