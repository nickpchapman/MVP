var Image = ({url, deleteUrl, analysis}) => (

  <div>
    <img src={url} height="100" width="100"/>
    <span>
      <button onClick={deleteUrl.bind(this, url)}>delete image</button>
    </span>
  </div>

)