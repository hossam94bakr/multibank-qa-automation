export const urls = {
  signIn: 'https://trade.mb.io/login',
  signUp: 'https://trade.mb.io/register',
  downloadApp: /mbio\.go\.link/,
};

export const navigation = {
  mainNavItems: ['Explore', 'Features', 'Company'],
  navDestinations: [
    { name: 'Explore', urlPattern: /\/explore/ },
    { name: 'Features', urlPattern: /\/features/ },
    { name: 'Company', urlPattern: /\/company/ },
  ],
};

export const tradingCategories = ['Top Gainers', 'Trending Now', 'Top Losers'];

export const hero = {
  heading: 'Crypto for everyone',
};

export const homepage = {
  portfolioHeading: 'Securely build your portfolio',
  featuresHeading: 'Smarter ways to trade and grow',
};

export const companyPage = {
  urlPattern: /\/company/,
  heading: 'Why MultiBank Group?',
};

export const footer = {
  sections: ['Legal', 'Support'],
  paymentMethods: ['Mastercard', 'Visa', 'American Express', 'Swift'],
  legalLinks: [
    'Cookie Policy',
    'Terms & Conditions',
    'Disclaimer',
    'Code of Conduct',
    'Public Complaint Policy',
    'Public Disclosure',
    'Privacy Policy',
    'Client Agreement',
    'VA Standards',
    'Acceptable Use Policy',
  ],
  supportLinks: ['Contact Us'],
};
