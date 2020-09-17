import { lazy } from 'react';

export default [
  {
    name: 'createDonation',
    path: '/create-donation/:type',
    component: lazy(() => import('./pages/CreateDonationPage')),
  },
  {
    name: 'chooseDotationType',
    path: '/choose-donation-type',
    component: lazy(() => import('./pages/ChooseDonationTypePage')),
  },
  {
    name: 'donationsList',
    path: '/donations',
    component: lazy(() => import('./pages/DonationsListPage')),
  },
  {
    name: 'donationDetails',
    path: '/donations/:slug',
    component: lazy(() => import('./pages/DonationDetailsPage')),
  },
];
