var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  console.log('setBestCustomer enacted');
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}