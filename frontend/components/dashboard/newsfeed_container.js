import { connect } from 'react-redux';

import { fetchNews } from '../../actions/news_actions';
import Newsfeed from './newsfeed';

const mapStateToProps = state => ({
  news: state.entities.news
});

const mapDispatchToProps = dispatch => ({
  fetchNews: () => dispatch(fetchNews())
});

export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed);
