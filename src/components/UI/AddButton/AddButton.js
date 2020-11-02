

import classes from './AddButton.module.css';

const addbutton = (props) => {
    return (
        <div
            style={props.position}
            onClick= {props.clicked}
            className={classes.AddButton} >
            <p
                style={props.pPosition}
            >{props.children} </p>
        </div>
    )
}

export default addbutton;