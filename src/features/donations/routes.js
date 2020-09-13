import { lazy } from 'react';
// import {CreateDonationPage, ChooseDonationTypePage,DonationsListPage ,DonationDetailsPage} from './pages';

export default [
  {
    name: 'createDonation',
    path: '/create-donation/:type',
    component: lazy(() => import('./pages/CreateDonationPage')),
    // component: CreateDonationPage,
  },
  {
    name: 'chooseDotationType',
    path: '/choose-donation-type',
    component: lazy(() => import('./pages/ChooseDonationTypePage')),
    // component: ChooseDonationTypePage,
  },
  {
    name: 'donationsList',
    path: '/donations',
    component: lazy(() => import('./pages/DonationsListPage')),
    // component: DonationsListPage,
  },
  {
    name: 'donationDetails',
    path: '/donations/:slug',
    component: lazy(() => import('./pages/DonationDetailsPage')),
    // component: DonationDetailsPage,
  },
];