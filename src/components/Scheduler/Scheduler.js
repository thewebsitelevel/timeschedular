
import Auxi from '../../hoc/Auxi/Auxi';
import Instructor from '../../containers/Instructor/Instructor';
import Student from '../Student/Student';


import './Scheduler.module.css';

const schedular = (props) => (
        <Auxi>
            <div className="Scheduler" >
                <Instructor/>
                <Student/>
            </div>
        </Auxi>
    );


export default schedular;