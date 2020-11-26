import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackbaseHeaderComponent } from './backbase-header.component';

describe('BackbaseHeaderComponent', () => {
  let component: BackbaseHeaderComponent;
  let fixture: ComponentFixture<BackbaseHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackbaseHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackbaseHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create backbase header', () => {
    expect(component).toBeTruthy();
  });
});
