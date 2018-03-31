import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { saveCourse } from '../../actions/courseActions';
import CourseList from './course-list';
import AddNewCourseForm from './add-new-course-form';

const emptyCourse = {
  title: '',
  authorId: '',
  category: '',
  length: 0
};

const merge = (oldObj, newObj) => Object.assign(oldObj, newObj);

class CoursesPage extends React.Component{

  constructor(props, context){
    super(props, context);
    const title = '';
    const course =  Object.assign({}, emptyCourse);
    this.state = { course };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
    this.editCourse = this.editCourse.bind(this);
  }

  onTitleChange(event){
    const { target: { value }} = event;
    const title = value;
    const course = Object.assign({}, this.state.course, { title });
    this.setState({ course });
  }

  resetTitleField(){
    const title = '';
    const course = Object.assign({}, this.state.course, { title });
    this.setState({ course });
  }

  saveCourse(){
    console.debug(' DEBUG :: Action : saveCourse ');
    // connect function injects dispatch method to props automatically when mapDispatchToProps is not added to connect function
    this.props.createCourse(this.state.course);
    this.resetTitleField();
  }

  editCourse(courseToBeEdited){
    this.setState({ course: courseToBeEdited});
  }

  createCourseList(course, index){
    return (
      <li key={index}> --- {course.title} </li>
    );
  }

  render(){
    const { course } = this.state;
    const { courses } = this.props;
    console.log('this.props.courses : length  changed ', courses, ' course to be edited :: ', course);

    return(
      <div>
        <h1> Courses </h1>
        <br />

        <AddNewCourseForm course={course} />

      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    courses: state.courses
  };
};

const mapDispatchToProps = (dispatch) =>{
  return {
    createCourse: (course) => dispatch(saveCourse(course))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
