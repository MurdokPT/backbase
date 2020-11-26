import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackbaseFormComponent } from './backbase-form.component';

describe('BackbaseFormComponent', () => {
  let component: BackbaseFormComponent;
  let fixture: ComponentFixture<BackbaseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackbaseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackbaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
