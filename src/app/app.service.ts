import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class BackbaseService {
	public transferMoney$ = new Subject<any>();
	constructor() { }
}
