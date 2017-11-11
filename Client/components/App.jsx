class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: ['www.google.com', 'www.reddit.com']
    }
  }


  render() {
    return (

      <div>
        <h1>My Images</h1>
        <div>
          <Images urls={this.state.urls}/>
        </div>
        <div>
          <AddUrl />
        </div>
      </div>

    );
  }
}