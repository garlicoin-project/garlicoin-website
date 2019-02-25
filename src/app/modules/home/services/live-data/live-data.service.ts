import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiveDataService {

  private readonly url = 'https://insight.garli.co.in/';
  private socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io.connect(this.url, {transports: ['polling']});
    this.socket.emit('subscribe', 'inv');
  }

  /**
   *
   * Creates and returns an obervable that emits the block hash on each new block.
   *
   * It could be changed to automattically make an http call and get full block info depending on how we want to use this.
   *
   */
  public onBlock(): Observable<string> {
    return new Observable<string>((observer) => {
      this.socket.on('block', (hash: string) => {
        observer.next(hash);
      });
    });
  }
/**
 *
 * Creates and returns an observable that emits basic transaction information on each new transaction.
 *
 */
public onTransaction() {
    return new Observable<ILiveTransaction>((observer) => {
      this.socket.on('tx', (transaction: ILiveTransaction) => {
        observer.next(transaction);
      });
    });
  }
}

interface ILiveTransaction {
  isRBF: boolean;
  txid: string;
  valueOut: number;
  vout: Array<{[key: string]: number}>;
}
