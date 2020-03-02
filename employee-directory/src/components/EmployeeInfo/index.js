import React from "react";
import Row from "../Row";
import Col from "../Col";
import "./style.css";

function bdate(date) {
    var bdate = date
    var [yyyy, mm, dd] =bdate.substring(0, 10).split("-")
    var revdate= `${mm}-${dd}-${yyyy}`
    return revdate
};


function EmployeeInfo(props) {


    return (
        
        <ul>
            {props.employees.map(result => (

                <li key={result.login.username} className="list-group-item">
                    {/* how do you add two props? Example: Alt: first name last name */}
                    <Row>
                        <Col>
                            <img alt={result.name.first} src={result.picture.medium} className="img-fluid" />
                        </Col>
                        <Col >
                            {result.name.first} {result.name.last}
                        </Col>
                        <Col>
                            {result.phone}
                        </Col>
                        <Col >
                            <a href={"mailto:"+result.email}> {result.email} </a>
                        </Col>
                        <Col >
                            {bdate(result.dob.date)}
                        </Col>

                    </Row>



                </li>
            ))}
        </ul>
    );
}

export default EmployeeInfo;