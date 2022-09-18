/*
For this component you're going to need to get the data about the players and then use the .map function and then
for every item from the data, a table row should exist. If possible, you could try to change the order of the table
Like the default will be the one with the highest asset value, but this could change to whatever, idk. This is a possible option, we don't need to do it
As of right now, it's nothing
*/


const Table=()=>{
    return(
        <table>
            <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>

        
        </table>



    )


};

export default Table;