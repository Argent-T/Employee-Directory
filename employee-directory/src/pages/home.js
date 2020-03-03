import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Alert from "../components/Alert";
import EmployeeInfo from "../components/EmployeeInfo";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchForm from "../components/SearchForm";

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
            .then(res => this.setState({ employees: res.data.results, results: res.data.results }))
            
            .catch(err => console.log(err));
            
    };

    handleInputChange = event => {
        // search state seems to be behind by one keypress at all times. 
        this.setState({ 
            search: event.target.value, 
            results: this.state.employees }, () => {console.log(search)});
        
        var search = this.state.search
        var filtered = this.state.employees.filter(function(name){
            return name.name.first.includes(search)
        })
        this.setState({results: filtered})
        console.log(filtered)
      
        

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
                        <Col />
                        <Col size="sm-4">
                        <SearchForm 
                        handleInputChange={this.handleInputChange}
                        
                        />
                            
                        
                        </Col>
                        <Col />
                    </Row>

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


                    <EmployeeInfo employees={this.state.results} />
                </Container>
            </div>
        );
    }


}

export default Employees;