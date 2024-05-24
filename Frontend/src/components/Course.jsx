import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {

      // Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser and 
      // Axios supports the Promise API that is native to JS ES6. 
      // Axios can be used intercept HTTP requests and responses and enables client-side protection against XSRF,
      // Axios also has the ability to cancel requests. 

      // Link to Know more about axios: "https://axios-http.com/docs/intro"

      // Axios is a promise-based HTTP Client for node.js and the browser. 
      // Axios is isomorphic (= it can run in the browser and nodejs with the same codebase). 
      // Axios on the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.
      try {
        const res = await axios.get("http://localhost:4001/book"); //connecting to the PORT = 4001
        // mongodb://127.0.0.1/
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-28 mt-2 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map(    (item) => ( <Cards key={item.id} item={item} />)    )}
        </div>
      </div>
    </>
  );
}

export default Course;
