import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './modules/welcome-page/welcome-page.component';
// import { FooterComponent } from './components/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from './shared/shared.module';
import { WelcomePageModule } from './modules/welcome-page/welcome-page.module';

@NgModule({
    declarations: [AppComponent, WelcomePageComponent],
    imports: [BrowserModule, AppRoutingModule, WelcomePageModule, TranslateModule.forRoot(), SharedModule],
    // exports: [SharedModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
