

import Button from '../UI/Button/Button';
import Auxi from '../../hoc/Auxi/Auxi';

import classes from './Card.module.css';

const card = (props) => {
    let date = props.details.date;
    date= date.split("-").reverse().join("-");
    let buttons;
    if(props.nobutton === 'student'){
        buttons= null;
    }else{
        buttons = <Auxi>
                    <Button clicked={props.editSchedule} >Edit</Button>
                    <Button clicked = {props.deleteSchedule} >Delete</Button>
                </Auxi>
    }
    return (
            <div className={classes.Card} >
                <p className={classes.Date}><stong>Date: </stong>{date} </p>
                <p className={classes.Topic} ><strong>Topic:  </strong>{props.details.topic}</p>
                <div>
                    <Button size={props.size}   clicked = {props.openSchedule} >Open</Button>
                    {buttons}
                </div>
            </div>
    );
}

export default card;