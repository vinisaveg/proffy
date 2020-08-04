import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Landing from "./pages/Landing"
import TeacherList from "./pages/TeacherList"
import TeacherForm from "./pages/TeacherForm"

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </Router>
  )
}

export default Routes
