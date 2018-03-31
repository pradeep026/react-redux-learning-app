import React, { PropTypes } from 'react';


const CourseListItemComponent = (props) =>{
  const { sNo, course, editCourseHandler } = props;
  const handler = () => editCourseHandler(course.id);
  return(
    <div className="course--row course--list-item">
      <div className="course--column course--sno">
        {sNo}
      </div>
      <div className="course--column course--title">
        {course.title}
      </div>
      <div className="course--column course--authorid">
        {course.authorId}
      </div>
      <div className="course--column course--category">
        {course.category}
      </div>
      <div className="course--column course--length">
        {course.length}
      </div>
      <div className="course--column course--btn">
        <input type="button" value="Edit" onClick={handler}/>
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
