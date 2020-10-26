import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [BannerComponent, FooterComponent],
    imports: [CommonModule, SharedModule],
    exports: [BannerComponent, FooterComponent, SharedModule],
})
export class ComponentsModule {}
