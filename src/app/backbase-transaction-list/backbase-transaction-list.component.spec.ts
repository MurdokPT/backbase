import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackbaseTransactionListComponent } from './backbase-transaction-list.component';

describe('BackbaseTransactionListComponent', () => {
  let component: BackbaseTransactionListComponent;
  let fixture: ComponentFixture<BackbaseTransactionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackbaseTransactionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackbaseTransactionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
