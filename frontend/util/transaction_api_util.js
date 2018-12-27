// Creates new Transaction
export const createTransaction = transaction => (
  $.ajax({
    url: '/api/transactions',
    method: 'POST',
    data: { transaction }
  })
);
