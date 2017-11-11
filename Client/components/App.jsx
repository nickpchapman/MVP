class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: ["www.reddit.com", "www.google.com"]
    }
  }

  insertUrl(url) {
    console.log('insert this====>', url)
  }

  render() {
    return (
      <div>
        <h1>My Images</h1>
        <div>
          <Images urls={this.state.urls}/>
        </div>
        <div>
          <AddUrl insertUrl={this.insertUrl.bind(this)}/>
        </div>
      </div>
    );
  }
}