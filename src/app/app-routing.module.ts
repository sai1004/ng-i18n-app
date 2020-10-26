import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'welcome' },
    {
        path: 'welcome',
        loadChildren: () => import('./modules/welcome-page/welcome-page.module').then((m) => m.WelcomePageModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
