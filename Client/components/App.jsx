class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      entry: ''
    }
  }

  componentDidMount() {
    var app = this;
    axios.get('/urls')
    .then(function (response) {
      console.log(response);
      app.setState({urls: response.data})
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  entryChange(event) {
    this.setState({entry: event.target.value})
  }

  deleteUrl(url) {
    var app = this;
    axios.post('/delete', {
      url: url
    })
    .then(function (response) {
      console.log('returned', response)
      app.setState({urls: response.data});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  insertUrl(url) {
    var app = this;
    axios.post('/add', {
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