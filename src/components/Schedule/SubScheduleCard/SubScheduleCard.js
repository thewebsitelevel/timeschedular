// import Auxi from '../../../hoc/Auxi/Auxi';

import classes from './SubScheduleCard.module.css';

const subScheduleCard = (props) => {
    const loadList = props.details.concepts.map((listitem, index) => {
        return  <li 
                    style={{display:"flex"}} 
                    >
                    <p 
                        style={{fontWeight:"bold"}} 
                        >
                            {index}. 
                    </p>
                    {listitem} 
                </li>
    })
    return(
        <div className={classes.DivCard} >
            {props.children}
            <div className={classes.TopicCard} >
            
                <p className={classes.Subtopic} >Sub Topic: {props.details.subTopic} </p>
                <p className={classes.Time} >Time: {props.details.time} </p>
                <hr></hr>
                <p>Concepts:</p>
                <ul>
                {loadList}
                </ul>
                
            </div>
        </div>
        
    )
}

export default subScheduleCard;