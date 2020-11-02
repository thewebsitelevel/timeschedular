import Auxi from '../../../hoc/Auxi/Auxi';

import classes from './SubScheduleCard.module.css';

const subScheduleCard = (props) => {
    const loadList = props.details.concepts.map(listitem => {
        return  <li>{listitem} </li>
    })
    return(
        <div className={classes.DivCard} >
            {props.children}
            <div className={classes.TopicCard} >
            
                <p className={classes.Subtopic} >{props.details.subTopic} </p>
                <p className={classes.Time} >{props.details.time} </p>
                <ul>
                {loadList}
                </ul>
                
            </div>
        </div>
        
    )
}

export default subScheduleCard;