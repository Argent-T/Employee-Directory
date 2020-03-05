import React, { useState } from "react";
// import Row from "../Row";
// import Col from "../Col";
import "./style.css";

function bdate(date) {
    var bdate = date
    var [yyyy, mm, dd] = bdate.substring(0, 10).split("-")
    var revdate = `${mm}-${dd}-${yyyy}`
    return revdate
};



function EmployeeInfo(props) {
    const [alpha, setAlpha] = useState(true);
    const [order, setOrder] = useState(true);
    const sortHandler = event => {

        var sorted
        if (event === "name") {
            if (!alpha) {
                sorted = props.employees.sort(function (a, b) {
                    if (a.name.first > b.name.first) {
                        return -1;
                    }
                    if (b.name.first > a.name.first) {
                        return 1;
                    }
                    return 0;
                });
                setAlpha(true);

                props.change(sorted);
            }
            if (alpha) {
                sorted = props.employees.sort(function (a, b) {
                    if (a.name.first < b.name.first) {
                        return -1;
                    }
                    if (b.name.first < a.name.first) {
                        return 1;
                    }
                    return 0;
                });
                setAlpha(false);

                props.change(sorted);
            }

        }

        if (event === "phone") {
            if (order) {
                sorted = props.employees.sort(function (a, b) {

                    return parseInt(a.phone.substring(1, 4)) - parseInt(b.phone.substring(1, 4))
                });
                setOrder(false);
               
                props.change(sorted)
            }
            if (!order) {
                sorted = props.employees.sort(function (a, b) {

                    return  parseInt(b.phone.substring(1, 4)) - parseInt(a.phone.substring(1, 4))
                });
                setOrder(true);
              
                props.change(sorted)
            }
        }


    }


    return (

        <table className="table">
            <thead>
                <tr>
                    <th scope="col"> Image </th>
                    <th className="point" scope="col" onClick={() => sortHandler("name")}> Name </th>
                    <th className="point" scope="col" onClick={() => sortHandler("phone")}> Phone </th>
                    <th className="point" scope="col"> Email </th>
                    <th className="point" scope="col"> DOB </th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map(result => (
                    <tr key={result.login.username}>
                        <td><img alt={result.name.first} src={result.picture.medium} className="img-fluid" /></td>
                        <td> {result.name.first} {result.name.last} </td>
                        <td>{result.phone}</td>
                        <td> <a href={"mailto:" + result.email}> {result.email} </a></td>
                        <td>{bdate(result.dob.date)}</td>
                    </tr>
                ))}


            </tbody>

        </table>


    );
}

export default EmployeeInfo;