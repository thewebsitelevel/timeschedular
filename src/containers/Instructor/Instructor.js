import React, {Component} from 'react';

import Auxi from '../../hoc/Auxi/Auxi';
import AddButton from '../../components/UI/AddButton/AddButton';
import Card from '../../components/Card/Card';
import BackDrop from '../../components/UI/Backdrop/Backdrop';
import Schedule from '../../components/Schedule/Schedule';

import classes from './Instructor.module.css';

class Instructor extends Component {

    state ={
        topics: 0,
        topiclist: [
            {
                id: 0,
                topicname:"",
                topicdate: 0,
                subtopiccount:0,
                subtopiclist:[
                    {
                        sid:0,
                        subtopicname:"",
                        time:0,
                        concepts:[]

                    }
                ]
            }
        ]
    }

    render(){
        return(
            <Auxi>
                <AddButton/>
                <div className={classes.Container} >
                    <Schedule/>
                </div>
            </Auxi>
        );
    }
}


export default Instructor;