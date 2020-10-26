import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [{ path: '', component: WelcomePageComponent }];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule, ComponentsModule],
    exports: [ComponentsModule, SharedModule],
})
export class WelcomePageModule {}
