import {library} from '@fortawesome/fontawesome-svg-core';
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

library.add(fas);

const IconComponer = (props) => {

    const {icon , text, id, databstarget, link1, name1, link2, name2, link3 ,name3, link4, name4, link5, name5, link6, name6 } = props;


    return (
        <>
            <div className="col-12 col-sm-4 text-center mb-5">
                        <div className="d-grid">
                            <button className="btn btn-white mb-3" type="button" data-bs-toggle="collapse" data-bs-target={databstarget}
                                aria-expanded="false" aria-controls={id}>
                                <h3>                                    
                                    <div className="icon  text-primary mx-sm-3 mx-2">
                                    <FontAwesomeIcon icon = {icon}/>
                                    </div>
                                    <p >{text}</p>
                                </h3>
                            </button>
                        </div>
                        <div className="collapse" id={id}>
                            <div className="card card-body">
                                <p><a href={link1} target="_blank"> {name1}</a></p>
                                <p><a href={link2} target="_blank"> {name2}</a></p>
                                <p><a href={link3} target="_blank"> {name3}</a></p>
                                <p><a href={link4} target="_blank"> {name4}</a></p>
                                <p><a href={link5} target="_blank"> {name5}</a></p>
                                <p><a href={link6} target="_blank"> {name6}</a></p>
                            </div>
                        </div>
                    </div>
               </>        
    );
}

export default IconComponer;