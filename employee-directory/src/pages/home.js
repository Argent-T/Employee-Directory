import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Alert from "../components/Alert";
import EmployeeInfo from "../components/EmployeeInfo";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchForm from "../components/SearchForm";

function Employees() {
    const [search, setSearch] = useState("");
    const [employees, setEmployees] = useState([]);
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        API.getEmployees()
            .then(res => {
                setEmployees(res.data.results);
                setResults(res.data.results);
            })
            .catch(err => setError(err));
    }, []);

    useEffect(() => {
       
        var text = search.toLocaleLowerCase();
        var filtered = employees.filter(function (data) {
            return data.name.first.toLowerCase().includes(text)
        });
        setResults(filtered);
        // console.log(text)

    }, [search]);

    const changeResults = newResults => {
        setResults(newResults)
      
    }

    const handleInputChange = event => {
        setSearch(event.target.value);
    };
    

    return (
        <div>
            <Container style={{ minHeight: "80%" }}>
                <h1 className="text-center">Employee Directory</h1>
                <Alert
                    type="danger"
                    style={{ opacity: error ? 1 : 0, marginBottom: 10 }}
                >
                    {error}
                </Alert>

                <Row>
                    <Col />
                    <Col size="sm-4">
                        <SearchForm
                            handleInputChange={handleInputChange}

                        />
                    </Col>
                    <Col />
                </Row>

                <EmployeeInfo change ={changeResults} employees={results} />
            </Container>
        </div>

    );



}

export default Employees;