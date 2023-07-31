export const user = {
  id: 1,
  name: 'John Doe',
  balance: {
    currency: 'GBP',
    amount: 19600.75,
  },
  accountNumber: '00000000',
  sortCode: '04-14-11',
  transactions: [
    {
      id: 1,
      date: '2023-02-18T14:24:00',
      description: 'Uluslararası',
      name: 'Serhan Yılmaz',
      amount: -100,
      currency: 'GBP',
    },
    {
      id: 2,
      date: '2023-02-18T14:24:00',
      description: 'Yerel',
      name: 'Emin Can Yılmaz',
      amount: 15000,
      currency: 'GBP',
    },
    {
      id: 3,
      date: '2023-02-18T14:24:00',
      description: 'Para Yükle',
      name: 'Serhan Yılmaz',
      amount: -100,
      currency: 'GBP',
    },
  ],
};
