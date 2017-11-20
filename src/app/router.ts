export const moduleRoutes = [
  {
    'path'        : 'dashboard',
    'loadChildren': './dashboard/dashboard.module#DashboardModule'
  },
  {
    'path'        : 'hero',
    'loadChildren': './hero/hero.module#HeroModule'
  }
];
