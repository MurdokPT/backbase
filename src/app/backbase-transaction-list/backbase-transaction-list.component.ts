import { Component } from '@angular/core';
import { mockData, COMPANYNAME, dataFormat } from '../app.component.utils';
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';
import { BackbaseService } from '../app.service';

@Component({
  selector: 'backbase-transaction-list',
  templateUrl: './backbase-transaction-list.component.html',
  styleUrls: ['./backbase-transaction-list.component.css']
})
export class BackbaseTransactionListComponent {
  public data: dataFormat[];
  public sortType: string;
  public sortDirection: string;
  public search: FormControl

  constructor(
    private translate: TranslateService,
    private backbase: BackbaseService
  ) {
    this.data = mockData.data;
    this.sortDirection = 'ASC';
    this.search = new FormControl(null);
    this.search.valueChanges.subscribe(response => {
      this.data = mockData.data.filter(element =>
        (element.merchant.name.toLowerCase().includes(response.toLowerCase())
          || element.transaction.type.toLowerCase().includes(response.toLowerCase())
          || element.transaction.amountCurrency.amount.toString().toLowerCase().includes(response.toLowerCase())));
      (!!this.sortType) ? this.sortBy(this.sortType, true) : null;
    });
    this.backbase.transferMoney$.subscribe(response => {
      this.data.unshift(response);
      (!!this.sortType) ? this.sortBy(this.sortType, true) : null;
    })
  }

  public getTranslatedString(key: string): string {
    return this.translate.instant(key);
  }

  public getImage(name: string): string {
    switch (name) {
      case COMPANYNAME.BACKBASE:
      case COMPANYNAME.FC:
        return '../../assets/icons/backbase.png';
      case COMPANYNAME.THETEALOUNGE:
        return '../../assets/icons/the-tea-lounge.png';
      case COMPANYNAME.SEVENELEVEN:
        return '../../assets/icons/7-eleven.png';
      case COMPANYNAME.AMAZON:
        return '../../assets/icons/amazon-online-store.png';
      case COMPANYNAME.JERRY:
        return '../../assets/icons/jerry-hildreth.png';
      case COMPANYNAME.WHOLEFOODS:
        return '../../assets/icons/whole-foods.png';
      case COMPANYNAME.TEXACO:
        return '../../assets/icons/texaco.png';
      case COMPANYNAME.SOUTHELECTRIC:
        return '../../assets/icons/southern-electric-company.png';
      case COMPANYNAME.LAWRENCE:
        return '../../assets/icons/lawrence-pearson.png';
      case COMPANYNAME.HM:
        return '../../assets/icons/h&m-online-store.png';
    }
  }

  public getCreditDebitIndicator(indicator: string): string {
    return (indicator === 'CRDT') ? '+' : '-';
  }

  public getCreditDebitValue(trasanction): number {
    return (trasanction.creditDebitIndicator === 'CRDT') ? Math.abs(trasanction.amountCurrency.amount) : -Math.abs(trasanction.amountCurrency.amount);
  }

  public sortBy(type: string, changeSearch?: boolean): void {
    (this.sortType === type && !changeSearch)
      ? (this.sortDirection === 'ASC') ? this.sortDirection = 'DSC' : this.sortDirection = 'ASC'
      : this.sortType = type;
    (type === 'date')
      ? (this.sortDirection === 'ASC')
        ? this.data = this.data.sort((a, b) => a.dates.valueDate - b.dates.valueDate)
        : this.data = this.data.sort((a, b) => b.dates.valueDate - a.dates.valueDate)
      : (type === 'beneficiary')
        ? (this.sortDirection === 'ASC')
          ? this.data = this.data.sort((a, b) => a.merchant.name.localeCompare(b.merchant.name))
          : this.data = this.data.sort((a, b) => b.merchant.name.localeCompare(a.merchant.name))
        : (this.sortDirection === 'ASC')
          ? this.data = this.data.sort((a, b) => this.getCreditDebitValue(a.transaction) - this.getCreditDebitValue(b.transaction))
          : this.data = this.data.sort((a, b) => this.getCreditDebitValue(b.transaction) - this.getCreditDebitValue(a.transaction));
  }
}
