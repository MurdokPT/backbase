import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'backbase-form',
  templateUrl: './backbase-form.component.html',
  styleUrls: ['./backbase-form.component.css']
})
export class BackbaseFormComponent implements OnInit {
  public form: FormGroup;

  constructor(private translate: TranslateService) {
    this.form = new FormGroup({
      fromAccount: new FormControl(null, Validators.required),
      toAccount: new FormControl(null, Validators.required),
      amount: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
  }

  public getTranslatedString(key: string): string {
    return this.translate.instant(key);
  }
  public onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn('chupamos');
  }

}
