import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Alert from "../components/Alert";


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
                   
          
                </Container>
            </div>
        );
    }


}

export default Employees;