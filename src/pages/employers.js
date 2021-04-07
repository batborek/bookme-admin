import React from "react";
import Menu from "../components/menu";

export const Employers = () => {
  return (
    <>
      <Menu />
      <div className="myTable">
        <table style={{ width: "100%" }}>
          <caption>Employers</caption>
          <tbody>
            <tr className="border_bottom">
              <th>Housekeeper</th>
              <th>Front-desk</th>
              <th>Guard</th>
              <th>Driver</th>
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

export default Employers;
