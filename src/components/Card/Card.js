

import Button from '../UI/Button/Button';

import classes from './Card.module.css';

const card = (props) => {
    return (
        <div className={classes.Card} >
            <p className={classes.Topic} >Topic</p>
            <p className={classes.Date}>Date</p>
            <div>
                <Button>View</Button>
                <Button>Edit</Button>
                <Button>Delete</Button>
            </div>
        </div>
    );
}

export default card;