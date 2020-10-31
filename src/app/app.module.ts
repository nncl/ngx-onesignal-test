import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgxOneSignalModule } from 'ngx-onesignal';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('OneSignalSDKWorker.js', { enabled: environment.production }),
    NgxOneSignalModule.forRoot({
      appId: '',
      autoRegister: false,
      allowLocalhostAsSecureOrigin: true,
      notifyButton: {
        enable: true,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
