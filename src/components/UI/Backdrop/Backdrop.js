import classes from './Backdrop.module.css';


const backdrop = (props) => (
    
        props.show?  <div 
                        style={props.css}
                        className={classes.Backdrop} 
                        onClick ={props.hide}
                        >
                            {props.children} </div> : null
        
    
)


export default backdrop;