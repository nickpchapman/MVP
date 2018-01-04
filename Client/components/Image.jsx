var Image = ({ url, deleteUrl, analysis, imageClick }) => (
  <div id="singleEntry">
    <img
      onClick={imageClick.bind(this, url)}
      id="image"
      src={url}
      height="503"
      width="auto"
    />
    <table id="table">
      <tbody>
        <tr>
          <th>Concept</th>
          <th>Probability</th>
        </tr>
        {JSON.parse(analysis).outputs[0].data.concepts.map(function(
          keywordObj
        ) {
          return (
            <Analysis
              key={keywordObj.id}
              name={keywordObj.name}
              value={keywordObj.value}
            />
          );
        })}
      </tbody>
    </table>
    <div>
      <button id="delete" onClick={deleteUrl.bind(this, url)}>
        delete image
      </button>
    </div>
  </div>
);
