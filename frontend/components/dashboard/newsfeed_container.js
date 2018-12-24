import { connect } from 'react-redux';

import Newsfeed from './newsfeed';
import { fetchNews } from '../../actions/news_actions';

const mapStateToProps = state => ({
  news: state.entities.news
});

const mapDispatchToProps = dispatch => ({
  fetchNews: ticker => dispatch(fetchNews(ticker))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Newsfeed);
