var Image = ({url, deleteUrl}) => (

  <div>
    <span>{url}
      <button onClick={deleteUrl.bind(this, url)} >delete image</button>
    </span>
  </div>

)