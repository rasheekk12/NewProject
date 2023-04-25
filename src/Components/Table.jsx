import React, { useEffect, useState } from "react";

const Table = ({ name }) => {
  const sortName = () => {
    console.log(name);
    name.sort(name.name);
  };

  return (
    <>
      <table align="center" style={{ border: "solid", height: "auto" }}>
        <tbody>
          <tr>
            <th>S.N</th>
            <th onClick={sortName}>Name</th>
            <th>Email</th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <ul>
                {name.map((names) => (
                  <ol>{names.id}</ol>
                ))}
              </ul>
            </td>
            <td>
              <ul>
                {name.map((names) => (
                  <ol>{names.name}</ol>
                ))}
              </ul>
            </td>
            <td>
              <ul>
                {name.map((names) => (
                  <ol>{names.email}</ol>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
