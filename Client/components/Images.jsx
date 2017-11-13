var Images = ({urls,deleteUrl, imageClick}) => (

  <div>
    <div>{
      urls.map(imageObj =>
        <Image
          deleteUrl={deleteUrl}
          key={imageObj.url}
          url={imageObj.url}
          analysis={imageObj.analysis}
          imageClick ={imageClick}
        />
      )
    }</div>
  </div>

  )