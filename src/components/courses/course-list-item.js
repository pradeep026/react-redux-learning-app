import React, { PropTypes } from 'react';


const CourseListItemComponent = (props) =>{
  const { sNo, course, editCourseHandler } = props;
  const handler = () => editCourseHandler(course.id);
  return(
    <div className="course--row">
      <div className="course--column">
        {sNo}
      </div>
      <div className="course--column">
        {course.title}
      </div>
      <div className="course--column">
        {course.authorId}
      </div>
      <div className="course--column">
        {course.category}
      </div>
      <div className="course--column">
        {course.length}
      </div>
      <div className="course--column">
        <input type="button" value="Edit" data-course-id={course.id} onClick={handler}/>
      </div>
    </div>
  );
};

CourseListItemComponent.propTypes = {
  sNo: PropTypes.number.isRequired,
  course: PropTypes.object.isRequired,
  editCourseHandler: PropTypes.func.isRequired
};

export default CourseListItemComponent;
