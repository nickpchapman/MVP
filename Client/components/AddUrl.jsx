var AddUrl = ({entryChange, insertUrl, entry}) => (

  <div>
    <form onSubmit={insertUrl}>
      <label>
        Add Image url:
        <input type="text" value={entry} onChange={entryChange}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>

)