import { useState, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/Banner";
import CourseList from "./components/CourseList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const title = "CS Courses for 2018-2019";

const App = () => {
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <Banner title={title}></Banner>
        <CourseList></CourseList>
      </QueryClientProvider>
    </Fragment>
  );
};

export default App;
