import {Route} from "react-router-dom";


import Auxi from '../Auxi/Auxi';
import Header from '../../components/Header/Header';
import Scheduler from '../../components/Scheduler/Scheduler';
import Instructor from '../../containers/Instructor/Instructor';
import Student from '../../components/Student/Student';

import './Layout.module.css';
import classes from "./Layout.module.css";

const layout = (props) => {
    return (
        <Auxi>
            <Header/>
            <main  className={classes.Content} >
                <Route path="/student"  exact component={Student} />
                <Route path='/scheduler' exact component={Instructor} />
                <Route path="/" exact component={Scheduler} />
            </main>
        </Auxi>
    );
};

export default layout;