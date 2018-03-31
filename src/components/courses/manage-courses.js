import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import CourseList from './course-list';

class ManageCourses extends React.Component{

  editCourseHandler(courseId){
    browserHistory.push(`/courses/${courseId}`);
  }

  render(){
    const courses = this.props.courses || [];
    return(
      <div className="manage--courses">
        <CourseList courses={courses} editCourseHandler={this.editCourseHandler}/>

        <Link to="/courses/add" params={{ courseId: '' }}> Add New Course </Link>
      </div>
    );
  }
}

ManageCourses.propTypes = {
  courses: PropTypes.array.isRequired
};


const mapStateToProps = (state) =>{
  return {
    courses: state.courses
  };
};

export default connect(mapStateToProps)(ManageCourses);
