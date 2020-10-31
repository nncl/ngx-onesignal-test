import { Component, OnInit } from '@angular/core';
import { OneSignalService } from 'ngx-onesignal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-onesignal-safari';

  constructor(public readonly onesignal: OneSignalService) {
    (window as any).ngxOnesignal = this.onesignal;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.onesignal.subscribe();
      console.log(`Initiated`);
    }, 2000);
  }
}
