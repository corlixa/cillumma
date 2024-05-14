interface IncomeRecord {
  [key: string]: number;
}

const riyadIncome2: IncomeRecord = {
  // ... (other properties with number values)
};

const prop2: string = 'somePropertyKey'; // Replace with actual property key

if (prop2 in riyadIncome2) {
  console.log(riyadIncome2[prop2]);
} else {
  console.error(`Property ${prop2} does not exist on riyadIncome2.`);
}
