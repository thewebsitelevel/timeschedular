
import classes from './Button.module.css';


const button = (props)  => {
    return (
        <button
            style={props.size}
            onClick={props.clicked }
            className={classes.Button}
            >{props.children} </button>
    );
}

export default button;