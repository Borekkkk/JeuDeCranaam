/*import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class SharedService {

    public cartItemData = new BehaviorSubject<any>([]);

    constructor() { }
    
    setCartItemData(data: any) {
       this.cartItemData.next(data);
    }

    getCartItemData() {
       return this.cartItemData.asObservable();
    }
}*/