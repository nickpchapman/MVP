var AddUrl = ({entryChange, insertUrl, entry}) => (

  <div id="input">
    <form onSubmit={insertUrl}>
      <label>
        Add Image url:
        <input type="text" value={entry} onChange={entryChange}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>

)