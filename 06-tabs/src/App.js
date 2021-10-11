import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newjobs = await response.json();
    setJobs(newjobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs(url);
  }, []);

  if (isLoading) {
    return (
      <section className="section loading">
        <h1>loading...</h1>
      </section>
    );
  }

  return <h2>tabs project setup</h2>;
}

export default App;
