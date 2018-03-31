import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { saveCourse, updateCourse } from '../../actions/courseActions';
import InputComponent from '../form-components/input-component';
import SelectComponent from '../form-components/select-component';

const merge = (oldObj, newObj) => Object.assign(oldObj, newObj);

const emptyCourse = {
  title: '',
  authorId: '',
  category: '',
  length: 0
};

class AddNewCourseForm extends React.Component{



  constructor(props, context){
    super(props, context);
    this.state = {
      course: props.course
    };
    this.onFieldValueChange = this.onFieldValueChange.bind(this);
    this.updateState = this.updateState.bind(this);
    this.submitCourse = this.submitCourse.bind(this);
    this.handler = this.handler.bind(this);
  }

  componentWillReceiveProps({ course }){
    this.updateState(course);
  }

  updateState(obj){
    const course = merge(merge({}, this.state.course), obj);
    this.setState({  course }, ()=>{
      console.info(" State Changed ::  ", this.state.course);
    });
  }

  onFieldValueChange(event){
    const { name, value } = event.target;
    const obj = {};
    obj[`${name}`] = value;
    this.updateState(obj);
  }

  resetFields(){
    console.log('emptyCourse :: ', emptyCourse);
    this.updateState(merge({}, emptyCourse));
  }

  submitCourse(event){
    this.props.createCourse(this.state.course).then( ()=> {
      console.info('Course is added successfully');
      console.info('Course is added successfully !!!');
      this.resetFields();
      browserHistory.push('/courses');
    });
  }

  updateCourse(){
    const { course } = this.state;
    this.props.updateCourse(Object.assign({}, course)).then( ()=> {
      console.info('Course is update successfully');
      console.info('Course is update successfully !!!');
      this.resetFields();
      browserHistory.push('/courses');
    });
  }

  handler(){
    const { formType } = this.props;
    if(formType === 'EDIT'){
      this.updateCourse();
    }else{
      this.submitCourse();
    }
  }

  render(){
    const { title, authorId, category, length } = this.state.course || {};
    const { formType } = this.props;
    const buttonText = (formType === 'EDIT') ? `UPDATE` : 'ADD';

    return(
      <div className="course--add-form">

        <InputComponent
          label="Course Title"
          value={title}
          name="title"
          placeholder="Course"
          error=""
          onFieldValueChange={this.onFieldValueChange} />

        <InputComponent
          label="Author"
          value={authorId}
          name="authorId"
          placeholder="Author"
          error=""
          onFieldValueChange={this.onFieldValueChange} />

        <SelectComponent
          label="Category"
          value={category}
          name="category"
          defaultOption="Select Category"
          error=""
          options={["JavaScript", "Software Practices", "Software Architecture", "Career", "HTML5", "CSS3", "ReactJs", "AngularJs"]}
          onFieldValueChange={this.onFieldValueChange}
          />

        <div className="form--row">
          <label htmlFor="length">Duration</label>
          <input type="range" onChange={this.onFieldValueChange} value={length}  name="length" min="0" step="0.5" max="30" />
        </div>

        <input type="button" value={buttonText} onClick={this.handler}/>
      </div>
    );
  }
}

AddNewCourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  formType: PropTypes.string.isRequired,
  createCourse: PropTypes.func.isRequired,
  updateCourse: PropTypes.func.isRequired
};

const getCourseById = (courses = [], courseId) => {
  const filteredCourse = courses.filter((course) => course.id === courseId);
  return filteredCourse[0] || merge({}, emptyCourse);
};

const mapStateToProps = (state, ownProps) => {
  const { params: { courseId }} = ownProps;
  const course = (courseId) ? getCourseById(state.courses, courseId) : merge({}, emptyCourse);
  const formType = (`${courseId}`.toUpperCase() !== 'ADD') ? 'EDIT' : 'ADD';
  return { course, formType };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCourse: (course) => dispatch(saveCourse(course)),
    updateCourse: (course) => dispatch(updateCourse(course))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewCourseForm);
