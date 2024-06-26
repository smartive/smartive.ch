export type PlausibleEvents = {
  'Customer Click': {
    name: string;
    url: string;
  };
  404: {
    path: string;
  };
  'Contact Click': {
    value: string;
    url: string;
    component: 'navigation' | 'footer' | 'contact-box' | 'employee-card';
  };
  'Job Click': {
    extUrl: string;
    currentUrl: string;
    title: string;
  };
  'Link Click': {
    targetUrl: string;
    currentUrl: string;
    title: string;
  };
};
