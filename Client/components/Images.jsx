var Images = ({urls,deleteUrl}) => (

  <div>
    <div>{urls.map(imageObj => <Image deleteUrl={deleteUrl} key={imageObj.url} url={imageObj.url}/> )}</div>
  </div>

  )