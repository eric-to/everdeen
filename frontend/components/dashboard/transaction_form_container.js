import { connect } from 'react-redux';

import TransactionForm from './transaction_form';
import { createTransaction } from '../../actions/transaction_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  intradayData: state.entities.stocks.intradayData,
});

const mapDispatchToProps = dispatch => ({
  createTransaction: transaction => dispatch(createTransaction(transaction))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionForm);
