

import Button from '../UI/Button/Button';
import Auxi from '../../hoc/Auxi/Auxi';

import classes from './Card.module.css';

const card = (props) => {
    let date = props.details.date;
    date= date.split("-").reverse().join("-")
    return (
            <div className={classes.Card} >
                <p className={classes.Date}>{date} </p>
                <p className={classes.Topic} >{props.details.topic}</p>
                <div>
                    <Button clicked = {props.openSchedule} >Open</Button>
                    <Button clicked={props.editSchedule} >Edit</Button>
                    <Button clicked = {props.deleteSchedule} >Delete</Button>
                </div>
            </div>
    );
}

export default card;