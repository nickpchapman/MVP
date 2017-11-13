var Analysis = ({name, value}) => (
  <tr id="concept">
      <td id="data">{name}</td>
      <td id="data">{value.toFixed(2)}%</td>
  </tr>
)