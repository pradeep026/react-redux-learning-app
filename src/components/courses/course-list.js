import React, { PropTypes } from 'react';
import CourseListItemComponent from './course-list-item';
import CourseTableHeaderComponent from './course-table-header';

/**
 * Course Component
 *
 */
const CourseList = (props) =>{
  const { courses, editCourseHandler } = props;
  return(
    <div className="course--table">
        <CourseTableHeaderComponent />
        <div className="course--row-body">
          {courses.map((course, index) =>
            <CourseListItemComponent key={index} sNo={index + 1} course={course} editCourseHandler={editCourseHandler} />
          )}
        </div>
    </div>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  editCourseHandler: PropTypes.func.isRequired
};

export default CourseList;
