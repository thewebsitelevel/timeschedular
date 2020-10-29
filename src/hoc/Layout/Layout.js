
import Auxi from '../Auxi/Auxi';

import './Layout.module.css';

const layout = (props) => {
    return (
        <Auxi>
            <p>Header</p>
            <main>{props.children} </main>
        </Auxi>
    );
};

export default layout;