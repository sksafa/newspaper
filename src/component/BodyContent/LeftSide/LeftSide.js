
import { Link } from 'react-router-dom';
import './LeftSide.css'

const LeftSide = () => {



    return (
        <div className="leftSide" >
            {/* <h4>News Category</h4> */}
            <div className="CategoryList">
                    <li><Link to="/politics">Politics </Link></li>
                    <li>  <Link to="/culture">Culture </Link></li>
                    <li> <Link to="/sports">Sports</Link></li>
                    <li><Link to="/fashion"> Fashion </Link></li>
            </div>

        </div>
    );
};

export default LeftSide;