import React from 'react';
import "./Table.css";


const Table = ({playerGames}) => {
  let tableData;
   tableData = playerGames.map(game => {
         
          return(
            <tr className = "tbl-content">
              <td>{game.pts}</td>
              <td>{game.ast}</td>
              <td>{game.reb}</td>
              <td>{game.blk}</td>
              <td>{(game.fg_pct) + "%"}</td>
            </tr>  
          );
  
    })
   
  return(
    <table cellpadding="0" cellspacing="0" border="0">
      <thead className = "tbl-header">
        <tr>
          <th>Points</th>
          <th>Assists</th>
          <th>Rebounds</th>
          <th>Blocks</th>
          <th>Field Goal</th>
        </tr>
      </thead>
      <tbody>
        {tableData}
      </tbody>
    </table>
  );
 }
 export default Table;
 