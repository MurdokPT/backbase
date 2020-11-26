import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { accountFrom } from '../app.component.utils';
import { MatDialog } from '@angular/material/dialog';
import { BackbaseConfirmationModalComponent } from '../backbase-confirmation-modal/backbase-confirmation-modal.component';
import { BackbaseService } from '../app.service';


@Component({
  selector: 'backbase-form',
  templateUrl: './backbase-form.component.html',
  styleUrls: ['./backbase-form.component.css']
})
export class BackbaseFormComponent {
  public form: FormGroup;
  private accountFrom: accountFrom;

  constructor(
    private translate: TranslateService,
    private backbase: BackbaseService,
    public dialog: MatDialog
  ) {
    this.accountFrom = {
      name: 'Free Checking(4692)',
      value: 5824.76
    }
    this.form = new FormGroup({
      fromAccount: new FormControl({ value: null, disabled: true }, Validators.required),
      toAccount: new FormControl(null, Validators.required),
      amount: new FormControl(null, [Validators.required, Validators.max(this.accountFrom.value)])
    });
    this.setFromAccountValue();
    this.backbase.transferMoney$.subscribe(response => {
      this.form.reset();
      this.accountFrom.value = this.accountFrom.value - response.transaction.amountCurrency.amount;
      this.setFromAccountValue();
    })
  }

  private setFromAccountValue(): void {
    const newValue = this.accountFrom.name + ' - €' + this.accountFrom.value.toString();
    this.form.get('fromAccount').setValue(newValue)
  }

  public getTranslatedString(key: string): string {
    return this.translate.instant(key);
  }

  public checkIfValid(): boolean {
    return (!!this.form.get('toAccount').valid
      && !!this.form.get('amount').valid) ? false : true;
  }
  public onSubmit() {
    this.dialog.open(BackbaseConfirmationModalComponent, {
      width: '480px',
      data: {
        fromAccount: this.accountFrom.name,
        info: this.form.value
      }
    });
  }
}
