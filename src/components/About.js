import Profile from "./ProfileClass";
import React from "react";


class About extends React.Component{
  constructor(props){
    super(props);
    console.log("Parent - constructor");
  }

componentDidMount(){
  console.log("Parent - componentDidMount")
}

  render(){
    console.log("Parent - render")
    return (
      <>
        <h1>About Us</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi unde
          reiciendis accusantium, quisquam vel nobis rerum suscipit a nam
          temporibus fuga pariatur facilis optio veniam quasi nulla praesentium
          quam esse?
        </h2>

        <Profile name="Suyash" />
      </>
    );
  }
}

export default About;
