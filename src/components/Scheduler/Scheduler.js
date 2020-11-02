import {NavLink} from 'react-router-dom';

import Auxi from '../../hoc/Auxi/Auxi';
import MainCard from '../MainCard/MainCard';

import classes from './Scheduler.module.css';


import './Scheduler.module.css';

const schedular = (props) => (
        <Auxi>
            <div className= {classes.Scheduler} >
                <NavLink to='/scheduler' style={{textDecoration:"none"}} >
                    <MainCard>
                        <p>Scheduler</p>
                    </MainCard>
                </NavLink >
            </div>
        </Auxi>
    );


export default schedular;