import * as TransactionAPIUtil from '../util/transaction_api_util';

export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';

const receiveTransaction = transaction => ({
  type: RECEIVE_TRANSACTION,
  transaction
});

// TODO: receiveErrors

export const createTransaction = transaction => dispatch => (
  TransactionAPIUtil.createTransaction(transaction)
    .then(transaction => dispatch(receiveTransaction(transaction)))
);
