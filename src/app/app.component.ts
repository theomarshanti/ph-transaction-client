import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TransactionUpdatesService } from './services/transcription-updates.service';
import { takeWhile } from 'rxjs/operators';
import { formatDate } from '@angular/common';
interface Log {
  timestamp: string;
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private alive;
  public logs: Log[] = [];

  constructor(private transactionUpdatesService: TransactionUpdatesService) {}

  ngOnInit() {
    console.log('appComponent ngOnInit');
    this.alive = true;

    if (environment.enableWs) {
      console.log('app - start stream');
      this.transactionUpdatesService.messages$
        .pipe(takeWhile(() => this.alive))
        .subscribe(res => this.handleUpdate(res));
    } else {
      this.logs = [
        {
          timestamp: formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US'),
          message: 'djksadjksadjksabdsad sadsa',
        },
        {
          timestamp: formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US'),
          message: 'djksadjksadjksabdsad sadsa',
        },
        {
          timestamp: formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US'),
          message: 'djksadjksadjksabdsad sadsa',
        },
        {
          timestamp: formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US'),
          message: 'djksadjksadjksabdsad sadsa',
        },
        {
          timestamp: formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US'),
          message: 'djksadjksadjksabdsad sadsa',
        },
        {
          timestamp: formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US'),
          message: 'djksadjksadjksabdsad sadsa',
        },
        {
          timestamp: formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US'),
          message: 'djksadjksadjksabdsad sadsa',
        },
        {
          timestamp: formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US'),
          message: 'djksadjksadjksabdsad sadsa',
        },
        {
          timestamp: formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US'),
          message: 'djksadjksadjksabdsad sadsa',
        },
        {
          timestamp: formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US'),
          message: 'djksadjksadjksabdsad sadsa',
        },
        {
          timestamp: formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US'),
          message: 'djksadjksadjksabdsad sadsa'
        },
      ];
    }
  }

  ngOnDestroy() {
    this.alive = false;
  }

  handleUpdate(message: string) {
    const timestamp: string = formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US');
    const log = {timestamp, message};
    this.logs.push(log);
  }

  trackByIdentity = (index: number, item: any) => item;
}
