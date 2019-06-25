var customerName = 'bob';
const leastFavoriteCustomer = 'bab';


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

 function changeLeastFavoriteCustomer() {
  let leastFavoriteCustomer = 'not bab';
}