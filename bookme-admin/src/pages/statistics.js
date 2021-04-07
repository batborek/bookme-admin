import React from "react";
import Menu from "../components/menu";

export const Statistics = () => {
  return (
    <>
      <Menu />
      <div className="myTable">
        <table style={{ width: "100%" }}>
          <caption>Statistics</caption>
          <tbody>
            <tr className="border_bottom">
              <th>Type</th>
              <th>Current month</th>
              <th>Last month</th>
              <th>Rate</th>
            </tr>
            <tr>
              <td>Single room</td>
              <td>10</td>
              <td>22</td>
              <td>32</td>
            </tr>
            <tr>
              <td>King size</td>
              <td>15</td>
              <td>5</td>
              <td>20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Statistics;
