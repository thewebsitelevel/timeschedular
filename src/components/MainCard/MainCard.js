import classes from './MainCard.module.css';

const mainCard = (props) => (
    <div 
        style={props.position}
        onClick = {props.clicked}
        className={classes.MainCard} 
        >
        {props.children}
    </div>
)

export default mainCard;

