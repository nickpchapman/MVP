var Image = ({url, deleteUrl, analysis}) => (

  <div>
    <img src={url} height="100" width="100"/>
    <span>
      <button onClick={deleteUrl.bind(this, url)}>delete image</button>
    </span>
    <div>{JSON.parse(analysis).outputs[0].data.concepts.map(function(keywordObj) {
      return <Analysis key={keywordObj.id} name={keywordObj.name} value={keywordObj.value}/>
    })}</div>
  </div>

)