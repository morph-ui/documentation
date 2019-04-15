import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default Main = () => {
    return (
        <Router>
            <Route exact path="/" component={Home} />
        </Router>
    )
} 