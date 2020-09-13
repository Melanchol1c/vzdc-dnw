import { lazy } from 'react';

export default [
  {
    name: 'donationsList',
    path: '/donations',
    exact: true,
    component: lazy(() => import('./pages/DonationsListPage')),
  },
  {
    name: 'createDonation',
    path: '/create-donation',
    exact: true,
    component: lazy(() => import('./pages/CreateDonationPage')),
  },
  {
    name: 'chooseDotationType',
    path: '/choose-donation-type',
    exact: true,
    component: lazy(() => import('./pages/ChooseDonationTypePage')),
  },
  {
    name: 'donationDetails',
    path: '/donations/:slug',
    exact: true,
    component: lazy(() => import('./pages/DonationDetails')),
  },
];