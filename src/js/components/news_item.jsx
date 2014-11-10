var NewsItem = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {newsItem: {}};
  },

  componentWillMount: function() {
    this.bindAsObject(new Firebase('https://hacker-news.firebaseio.com/v0/item/' +
        this.props.id), 'newsItem');
  },

  render: function() {
    var newsItem = this.state.newsItem,
      source,
      url;

    if (!newsItem.by) {
      return null;
    }

    url = 'https://news.ycombinator.com/item?id=' + this.props.id;
    source = '';
    if (newsItem.url) {
      url = newsItem.url;
      source = '(' + getSource(url) + ')';
    }

    return (
        <li className="item">
          <p>
            <a href={url}>{newsItem.title}</a>
            <span className="source">{source}</span>
          </p>
          <p className="meta">
            {newsItem.score > 0 ? <span className="points">{newsItem.score} points</span> : ''}
            <span>by</span>
            <span className="author"><a href="#">{newsItem.by}</a></span>
            <span className="time">{moment(newsItem.time * 1000).fromNow()}</span>
            <span className="comments">
              {
                newsItem.kids && newsItem.kids.length > 0 ?
                    newsItem.kids.length + ' comments' : 'discuss'
              }
            </span>
          </p>
        </li>
    );
  }
});
