class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [{url: "www.reddit.com"}, {url: "www.google.com"}],
      entry: ''
    }
  }

  entryChange(event) {
    this.setState({entry: event.target.value})
  }

  deleteUrl(url) {
    console.log('url', url)
    console.log('delete me')
  }

  insertUrl(url) {
    console.log('insert this====>', this.state.entry)
    var app = this;
  axios.post('/', {
    url: this.state.entry
  })
  .then(function (response) {
    app.setState({urls: response.data});
  })
  .catch(function (error) {
    console.log(error);
  });
    url.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>My Images</h1>
        <div>
          <Images deleteUrl={this.deleteUrl.bind(this)} urls={this.state.urls}/>
        </div>
        <div>
          <AddUrl entryChange={this.entryChange.bind(this)} insertUrl={this.insertUrl.bind(this)} entry={this.state.entry}/>
        </div>
      </div>
    );
  }
}