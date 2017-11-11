class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: ["www.reddit.com", "www.google.com"],
      entry: ''
    }
  }
  entryChange(event) {
    console.log('before', this.state)
    this.setState({entry: event.target.value})
    console.log('current state:', this.state.entry);
  }
  insertUrl(url) {
    console.log('insert this====>', this.state.entry)
    url.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>My Images</h1>
        <div>
          <Images urls={this.state.urls}/>
        </div>
        <div>
          <AddUrl entryChange={this.entryChange.bind(this)} insertUrl={this.insertUrl.bind(this)} entry={this.state.entry}/>
        </div>
      </div>
    );
  }
}