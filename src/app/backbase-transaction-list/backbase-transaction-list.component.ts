import { Component, OnInit, Input } from '@angular/core';
import { mockData, COMPANYNAME } from '../app.component.utils';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'backbase-transaction-list',
  templateUrl: './backbase-transaction-list.component.html',
  styleUrls: ['./backbase-transaction-list.component.css']
})
export class BackbaseTransactionListComponent implements OnInit {
  public data: any;
  public sortType: string;
  public sortDirection: string;

  constructor() {
    this.data = mockData.data;
    this.sortDirection = 'ASC';
  }

  ngOnInit(): void {
  }


  public getImage(name): string {
    switch (name) {
      case COMPANYNAME.BACKBASE:
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

  public getCreditDebitIndicator(indicator): string {
    return (indicator === 'CRDT') ? '+' : '-';
  }

  public getCreditDebitValue(trasanction): any {
    return (trasanction.creditDebitIndicator === 'CRDT') ? Math.abs(trasanction.amountCurrency.amount) : -Math.abs(trasanction.amountCurrency.amount);
  }

  public sortBy(type): void {
    (this.sortType === type)
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
