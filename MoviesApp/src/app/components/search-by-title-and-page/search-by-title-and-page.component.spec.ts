import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByTitleAndPageComponent } from './search-by-title-and-page.component';

describe('SearchByTitleAndPageComponent', () => {
  let component: SearchByTitleAndPageComponent;
  let fixture: ComponentFixture<SearchByTitleAndPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByTitleAndPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByTitleAndPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
