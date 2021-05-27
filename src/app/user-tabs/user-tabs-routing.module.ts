import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserTabsPage } from './user-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: UserTabsPage,
    children: [
      {
        path: 'vouchers',
        loadChildren: () => import('../voucher-offers/voucher-offers.module').then(m => m.VoucherOffersPageModule)
      },

      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },

      {
        path: 'objectives',
        loadChildren: () => import('../objective/objective.module').then(m => m.ObjectivePageModule)
      },

      {
        path: 'redeemed-vouchers',
        loadChildren: () => import('../redeemed-vouchers/redeemed-vouchers.module').then(m => m.RedeemedVouchersPageModule)
      },

      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      },

      {
        path: '',
        redirectTo: 'vouchers',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/vouchers',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserTabsPageRoutingModule {}
