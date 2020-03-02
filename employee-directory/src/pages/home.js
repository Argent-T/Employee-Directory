import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Alert from "../components/Alert";
import EmployeeInfo from "../components/EmployeeInfo";
import Row from "../components/Row";
import Col from "../components/Col";

class Employees extends Component {

    state = {
        search: "",
        employees: [],
        results: [],
        error: ""
    };

    componentDidMount() {
        API.getEmployees()
            // .then(res => console.log(res.data.results))
            .then(res => this.setState({ employees: res.data.results }))
            .catch(err => console.log(err));

    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });

    };

    render() {
        return (
            <div>
                <Container style={{ minHeight: "80%" }}>
                    <h1 className="text-center">Employee Directory</h1>
                    <Alert
                        type="danger"
                        style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
                    >
                        {this.state.error}
                    </Alert>

                    <Row>
                        <Col >
                        <h4>Image</h4>
                        </Col>
                        <Col >
                        <h4>Name</h4>
                        </Col>
                        <Col >
                        <h4>Phone</h4>
                        </Col>
                        <Col >
                        <h4>Email</h4>
                        </Col>
                        <Col >
                        <h4>DOB</h4>
                        </Col>
                    </Row>


                    <EmployeeInfo employees={this.state.employees} />
                </Container>
            </div>
        );
    }


}

export default Employees;