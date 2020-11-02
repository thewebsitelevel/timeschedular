

import classes from './Schedule.module.css';

const schedule = (props) => (
    
        props.show?<div className={classes.Schedule} >
                {console.log(props)}

                        <div className={classes.Heading} >
                            <p className={classes.Title} >{props.currSchedule.topic} </p>
                            <p className={classes.Date} >{props.currSchedule.date.split('-').reverse().join('-')} </p>
                        </div>
                        <div className={classes.TopicCards} >
                            {props.children}
                        </div>
                    </div>: null
    
)

export default schedule;