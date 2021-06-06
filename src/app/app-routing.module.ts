import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'voucher-offers',
    loadChildren: () => import('./voucher-offers/voucher-offers.module').then( m => m.VoucherOffersPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./user-tabs/user-tabs.module').then( m => m.UserTabsPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'help-popover',
    loadChildren: () => import('./help-popover/help-popover.module').then( m => m.HelpPopoverPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'objective',
    loadChildren: () => import('./objective/objective.module').then( m => m.ObjectivePageModule)
  },
  {
    path: 'easy-objective-popover',
    loadChildren: () => import('./easy-objective-popover/easy-objective-popover.module').then( m => m.EasyObjectivePopoverPageModule)
  },
  {
    path: 'redeemed-vouchers',
    loadChildren: () => import('./redeemed-vouchers/redeemed-vouchers.module').then( m => m.RedeemedVouchersPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'redvouchpopover',
    loadChildren: () => import('./redvouchpopover/redvouchpopover.module').then( m => m.RedvouchpopoverPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
