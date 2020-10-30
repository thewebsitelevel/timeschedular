import classes from './MainCard.module.css';

const mainCard = (props) => (
    <div className={classes.MainCard} >
        {props.children}
    </div>
)

export default mainCard;

