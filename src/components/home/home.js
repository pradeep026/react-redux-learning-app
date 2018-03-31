import React from 'react';
import { Link } from 'react-router';

class HomeRoute extends React.Component{

  render(){
      return (
        <div className="jumortron">
          <h1> Home </h1>
          <p> Building a website is, in many ways, an exercise of willpower.
            It’s tempting to get distracted by the bells and whistles of the design process,
            and forget all about creating compelling content.
            But it's that last part that's crucial to making inbound marketing work for your business.
          </p>
          <Link to="/about"> About </Link>
        </div>
      );
  }
}

export default HomeRoute;
