var News = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {newsItems: []};
  },

  componentWillMount: function() {
    this.bindAsArray(new Firebase('https://hacker-news.firebaseio.com/v0/topstories'),
        'newsItems');
  },

  render: function() {
    var items = [];

    this.state.newsItems.forEach(function(item) {
      items.push(<NewsItem id={item} key={item} />);
    });

    return (
      <ol>
        {items.slice(0, 30)}
      </ol>
    );
  }
});
