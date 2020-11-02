

import classes from './SubTopicForm.module.css';

const subTopicForm = (props) => (
    props.show ?<div className={classes.SubTopicForm} >
        <form  >
            <p>Sub Topics</p>
            <label>Select Time</label>
            <input
                onChange = {props.timeChanged}
                type="time"
                placeholder="09:00"  /> <br/>
            <label>Topic</label>
            <input
                onChange = {props.subTopicChanged}
                type='text'
                placeholder="Interactive Introduction to SQL " /> <br/>
            <label>Concepts</label>
            <textarea
                onChange = {props.conceptsChanged}
                placeholder="Create Table, Insert Data, Selecting Data, Updating Data" 
                ></textarea>
            <button type="button" onClick= {props.submitted}>Add Schedule</button>
        </form>
    </div>:null
)


export default subTopicForm;