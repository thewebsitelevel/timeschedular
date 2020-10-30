
import classes from './Schedule.module.css';

const schedule = (props) => {
    return(
        <div className={classes.Schedule} >
            <div className={classes.Heading} >
                <p className={classes.Title} >Title</p>
                <p className={classes.Date} >Date</p>
            </div>
            <div className={classes.TopicCard} >
                <p className={classes.Subtopic} >Subtopic</p>
                <p className={classes.Time} >Time</p>
                <ul>
                    <li>Concepts</li>
                </ul>
            </div>
        </div>
    );
}

export default schedule;