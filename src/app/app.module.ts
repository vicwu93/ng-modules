import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* App Root */
import { AppComponent } from './app.component';

/* Feature Modules */
import { ContactModule } from './contact/contact.module';
import { GreetingModule } from './greeting/greeting.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* Other Modules */
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    ContactModule,
    GreetingModule.forRoot({ userName: 'Miss Minutes' }),
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
