import classes from './Backdrop.module.css';


const backdrop = (props) => {
    return(
        <div className={classes.Backdrop} >{props.children} </div>
    );
}


export default backdrop;