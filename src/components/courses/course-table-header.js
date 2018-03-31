import React from 'react';

const CourseTableHeaderComponent = () => {
  return (
    <div className="course--row-head">
      <div className="course--row">
        <div className="course--column">
            S.No
        </div>
        <div className="course--column">
            Course
        </div>
        <div className="course--column">
            Author
        </div>
        <div className="course--column">
          Category
        </div>
        <div className="course--column">
          Duration
        </div>
        <div className="course--column">
          &nbsp;
        </div>
      </div>
    </div>
  );
};

export default CourseTableHeaderComponent;
