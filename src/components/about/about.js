import React from 'react';
import { Link } from 'react-router';

class AboutRoute extends React.Component {

  render(){
      return (
        <div className="jumortron">
          <h1> About </h1>
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
            it to make a type specimen book
          </p>
          <Link to="/"> Home </Link>
        </div>
      );
  }
}

export default AboutRoute;
