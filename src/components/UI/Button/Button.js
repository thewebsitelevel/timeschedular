
import classes from './Button.module.css';


const button = (props)  => {
    return (
        <button
            onClick={props.clicked }
            className={classes.Button}
            >{props.children} </button>
    );
}

export default button;