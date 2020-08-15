import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SessionService {
    
    private readonly beSub = new BehaviorSubject<any>([]);
    public readonly data = this.beSub.asObservable();

    constructor() { }


    // appData(data) {
    //     console.log('Data in common service is: ', data);
    //     sessionStorage.setItem('appData', JSON.stringify(data));
    //     console.log('ss : ', data);
    //     // this.appAssetData.next(data);
    // }
    
    logout() {
        sessionStorage.removeItem('token');
        this.beSub.next({code:200, status:true});
    }
        
}