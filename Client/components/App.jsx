class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      entry: ""
    };
  }

  componentDidMount() {
    var app = this;
    axios
      .get("/urls")
      .then(function(response) {
        console.log(response);
        app.setState({ urls: response.data.reverse() });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  entryChange(event) {
    this.setState({ entry: event.target.value });
  }

  deleteUrl(url) {
    var app = this;
    axios
      .post("/delete", {
        url: url
      })
      .then(function(response) {
        console.log("returned", response);
        app.setState({ urls: response.data.reverse() });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  insertUrl(url) {
    var app = this;
    axios
      .post("/add", {
        url: this.state.entry
      })
      .then(function(response) {
        app.setState({ urls: response.data.reverse() });
      })
      .catch(function(error) {
        console.log(error);
      });
    this.state.entry = "";
    url.preventDefault();
  }

  handleImageClick(url) {
    window.open(url);
  }

  render() {
    return (
      <div>
        <h1>Image Bot</h1>
        <div id="addUrl">
          <AddUrl
            entryChange={this.entryChange.bind(this)}
            insertUrl={this.insertUrl.bind(this)}
            entry={this.state.entry}
          />
        </div>
        <h3>My Stored Images:</h3>
        <div>
          <Images
            imageClick={this.handleImageClick.bind(this)}
            deleteUrl={this.deleteUrl.bind(this)}
            urls={this.state.urls}
          />
        </div>
      </div>
    );
  }
}
