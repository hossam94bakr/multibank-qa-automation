import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CompanyPage extends BasePage {
  readonly mainHeading: Locator;
  readonly subtitle: Locator;
  readonly annualTurnover: Locator;
  readonly customersWorldwide: Locator;
  readonly globalOffices: Locator;
  readonly leadershipHeading: Locator;
  readonly innovationHeading: Locator;
  readonly integrityHeading: Locator;
  readonly strengthHeading: Locator;
  readonly communityHeading: Locator;
  readonly getInTouchLink: Locator;

  constructor(page: Page) {
    super(page);
    this.mainHeading = page.getByRole('heading', { name: 'Why MultiBank Group?' });
    this.subtitle = page.getByRole('heading', { level: 2 }).first();
    this.annualTurnover = page.getByText('$2 trillion');
    this.customersWorldwide = page.getByText('2,000,000+');
    this.globalOffices = page.getByText('25+').first();
    this.leadershipHeading = page.getByRole('heading', { name: 'A tradition of global leadership' });
    this.innovationHeading = page.getByRole('heading', { name: 'Innovation with purpose' });
    this.integrityHeading = page.getByRole('heading', { name: 'Integrity built into every decision' });
    this.strengthHeading = page.getByRole('heading', { name: 'The strength behind MultiBank Group' });
    this.communityHeading = page.getByRole('heading', { name: 'Community & Media' });
    this.getInTouchLink = page.getByRole('link', { name: 'Get in touch' });
  }
}
