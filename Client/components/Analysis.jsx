var Analysis = ({name, value}) => (
  <tr id="concept">
      <td id="data">{name}</td>
      <td id="data">{(value * 100).toFixed(1)}%</td>
  </tr>
)