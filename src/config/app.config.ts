interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'System Administrator', 'Booking Manager'],
  tenantName: 'Company',
  applicationName: 'Bus Ticket Booking System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read company details', 'Book a route', 'Manage bookings', 'View ticket details'],
  ownerAbilities: [
    'Manage user information',
    'Manage company information',
    'Manage bus information',
    'Manage booking and ticket information',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/a9d18b20-da87-4739-b943-e7ee96a146ef',
};
