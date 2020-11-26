import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackbaseConfirmationModalComponent } from './backbase-confirmation-modal.component';
import { BackbaseService } from '../app.service';

describe('BackbaseConfirmationModalComponent', () => {
  let component: BackbaseConfirmationModalComponent;
  let fixture: ComponentFixture<BackbaseConfirmationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackbaseConfirmationModalComponent ],
      providers: [
        BackbaseService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackbaseConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
