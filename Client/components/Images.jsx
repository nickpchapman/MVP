var Images = ({urls}) => (

  <div>
    <div>{urls.map(url => <Image url={url}/>)}</div>
  </div>

  )