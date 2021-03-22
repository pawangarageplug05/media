import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private subject = new Subject<any>();

  constructor() { }

  sendMessage(message: any) {
    this.subject.next({ text: message });
}
getMessage(): Observable<any> {
  return this.subject.asObservable();
}
}
