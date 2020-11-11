const KEYS = {
  transactions: '',
  transactionId: '',
};
export const getBalanceCollection = () => [
  { id: '1', title: 'Юр. карта' },
  { id: '2', title: 'KICB элсом' },
  { id: '3', title: 'Demir' },
  { id: '4', title: 'Optima' },
];
export const getCategoryCollection = () => [
  { id: '1', title: 'Проект' },
  { id: '2', title: 'Курсы' },
  { id: '3', title: 'Офис' },
  { id: '4', title: 'Оборудование' },
];
export const getContractorCollection = () => [
  { id: '1', title: 'Айдана' },
  { id: '2', title: 'Медина' },
  { id: '3', title: 'Санира' },
];
export const getProjectCollection = () => [
  { id: '1', title: 'FMS' },
  { id: '2', title: 'NeoHP' },
  { id: '3', title: 'NeoStats' },
];

export function insertTransaction(data) {
  let transactions = getAllTransactions();
  data['id'] = generateTransactionId();
  transactions.push(data);
  localStorage.setItem(KEYS.transactions, JSON.stringify(transactions));
}
export function updateTransaction(data) {
  let transactions = getAllTransactions();
  let recordIndex = transactions.findIndex((x) => x.id == data.id);
  transactions[recordIndex] = { ...data };
  localStorage.setItem(KEYS.transactions, JSON.stringify(transactions));
}

export function generateTransactionId() {
  if (localStorage.getItem(KEYS.transactionId) == null)
    localStorage.setItem(KEYS.transactionId, '0');
  var id = parseInt(localStorage.getItem(KEYS.transactionId));
  localStorage.setItem(KEYS.transactionId, (++id).toString());
  return id;
}

export function getAllTransactions() {
  if (localStorage.getItem(KEYS.transactions) == null)
    localStorage.setItem(KEYS.transactions, JSON.stringify([]));
  let transactions = JSON.parse(localStorage.getItem(KEYS.transactions));
  //map departmentID to department title
  let balances = getBalanceCollection();
  return JSON.parse(localStorage.getItem(KEYS.transactions));
}
