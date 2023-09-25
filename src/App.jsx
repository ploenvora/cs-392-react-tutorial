import { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/Banner";
import CourseList from "./components/CourseList";
import Navigation from "./components/Navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";

const queryClient = new QueryClient();
const title = "CS Courses for 2018-2019";

const App = () => {
  return (
    <Fragment>
      <Router>
        <QueryClientProvider client={queryClient}>
          <Banner title={title}></Banner>
          <Navigation></Navigation>
          <CourseList></CourseList>
        </QueryClientProvider>
      </Router>
    </Fragment>
  );
};

export default App;
