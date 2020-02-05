// tslint:disable: no-angle-bracket-type-assertion
import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { LISTENER_URL } from '../core/api.constants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionUpdatesService {
  public messages$: Subject<string>;
  public state: string[] = [];

  constructor(wsService: WebsocketService) {
    if (environment.enableWs) {
      this.messages$ = new Subject<string>();
      wsService.connect(LISTENER_URL)
        .pipe(map(this.castToString.bind(this)))
        .pipe(map(this.updateState.bind(this)))
        .subscribe((transcription: string) => {
          this.messages$.next(transcription);
        });
    }
  }

  private emit(transcription: string) {
    this.messages$.next(transcription);
    return transcription;
  }

  public getMessages() {
    return this.state;
  }

  private castToString(response: MessageEvent): string {
    console.log('response');
    console.log(response);
    const {data} = response;
    console.log('data');
    console.log(data);
    return data;
  }

  private updateState(transcription: string): string {
      this.state.push(transcription);
      return transcription;
  }

  public resetState() {
    this.state = [];
  }
}
