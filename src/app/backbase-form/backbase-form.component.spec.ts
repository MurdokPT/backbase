import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackbaseFormComponent } from './backbase-form.component';
import { TranslateService, TranslateStore } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BackbaseFormComponent', () => {
  let component: BackbaseFormComponent;
  let fixture: ComponentFixture<BackbaseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BackbaseFormComponent],
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule
      ],
      providers: [
        TranslateService,
        TranslateStore,
      ]
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
