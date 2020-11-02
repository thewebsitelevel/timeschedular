

import classes from './AddSchedule.module.css';


const addSchedule = (props) => (
        props.show ? <div className={classes.AddSchedule} >
                        <h1>Create Schedule</h1>
                        <form   className={classes.form}>
                            <label className={classes.formTopic} >Topic </label>
                            <input
                            
                                onChange={props.topicChanged}
                                defaultValue={(props.inputDetails? props.inputDetails.topic: null)}
                                className={classes.inputTopic}
                                type="text"
                                placeholder="Database Hands-on Lab Training For Beginners"
                                required
                                /> <br/>
                            <label className={classes.formDate} >Date</label>
                            <input
                                onChange={props.dateChanged}
                                defaultValue={(props.inputDetails? (props.inputDetails.date.split('-').reverse().join('-')): null)}
                                className={classes.inputDate}
                                type="date"
                                required
                                /> <br/>
                            <button type="button" onClick={props.newSchedule}  >Add Schedule</button>
                        </form>
                    </div>:null
);


export default addSchedule;