const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = bills.map(calcTip);
const totals = bills.map((bill, index) => bill + tips[index]);

console.log(bills);
console.log(tips);
console.log(totals);
