import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BackbaseService } from '../app.service'

@Component({
  selector: 'app-backbase-confirmation-modal',
  templateUrl: './backbase-confirmation-modal.component.html',
  styleUrls: ['./backbase-confirmation-modal.component.css']
})
export class BackbaseConfirmationModalComponent {

  constructor(
    private backbase: BackbaseService,
    @Inject(MAT_DIALOG_DATA) public data) { }

  public sendTransfer(): void {
    const newTransfer = {
      categoryCode: '#bada55',
      dates: {
        valueDate: Date.now()
      },
      transaction: {
        amountCurrency: {
          amount: this.data.info.amount,
          currencyCode: 'EUR'
        },
        type: 'Online Transfer',
        creditDebitIndicator: 'DBIT'
      },
      merchant: {
        name: this.data.fromAccount,
        accountNumber: 'SI9999999999999999'
      }
    }
    this.backbase.transferMoney$.next(newTransfer);
  }
}
