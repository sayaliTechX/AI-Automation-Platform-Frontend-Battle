export const pricingData = {
  currencies: [
    { code: 'USD', symbol: '$' },
    { code: 'INR', symbol: '₹' },
    { code: 'EUR', symbol: '€' }
  ],
  plans: {
    starter: {
      id: 'starter',
      name: 'Starter',
      description: 'Essential data automations for small teams and builders.',
      monthly: {
        INR: 999,
        USD: 12,
        EUR: 11
      },
      features: [
        'Up to 5,000 automated tasks/mo',
        '3 Active Data Workflows',
        'Standard Connectors',
        'Basic Dashboard Analytics',
        '1 User Account'
      ],
      cta: 'Start Free Trial'
    },
    pro: {
      id: 'pro',
      name: 'Pro',
      description: 'Power automation suite for scaling projects and businesses.',
      popular: true,
      monthly: {
        INR: 2499,
        USD: 29,
        EUR: 27
      },
      features: [
        'Up to 50,000 automated tasks/mo',
        'Unlimited Active Workflows',
        'Premium Connectors & Webhooks',
        'Advanced Analytics Dashboard',
        '5 User Accounts',
        'Priority Slack Support'
      ],
      cta: 'Get Started Pro'
    },
    enterprise: {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Custom pipelines, advanced compliance, and dedicated infrastructure.',
      monthly: {
        INR: 7999,
        USD: 99,
        EUR: 92
      },
      features: [
        'Unlimited automated tasks/mo',
        'Custom Runner Infrastructure',
        'Advanced IAM & Security Audits',
        'SOC2 & HIPAA Compliance',
        'Unlimited User Accounts',
        '24/7 Dedicated SLA Support'
      ],
      cta: 'Contact Sales'
    }
  }
};
export default pricingData;
