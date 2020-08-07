import React from 'react';
import {Link} from  'react-router-dom';
import { BsFolder,BsEnvelopeOpen,BsInboxesFill,BsFilePost } from 'react-icons/bs';



import './styles.css';

export default function menulat(){
    return(
        <div className="menu">
            <nav className="menu-sup">
                <ul>
                    <li>
                        <p>Profile</p>
                    </li>
                    <li>
                        <p>Config</p>
                    </li>
                </ul>
            </nav>
            <nav className="menu-lat-content">
                
                <div className="menu-lat-main">
                    <div className="menu-lat-itens">
                        <Link to="/">
                            <BsFolder style={{height:'30px',width:'30px'}}/>
                        </Link>
                    </div>
                    <div className="menu-lat-itens">
                        <h3>1</h3>
                        <BsEnvelopeOpen style={{width:'30px', height: '30px'}}/>
                    </div>
                    <div className="menu-lat-itens">
                        <h3>2</h3>
                        
                        <BsInboxesFill style={{width:'30px', height:'30px'}}/>
                    </div>
                    <div className="menu-lat-itens">
                        <h3>3</h3>
                        <BsFilePost style={{width:'30px', height:'30px'}}/>
                    </div>
                </div>
                <div className="menu-lat-footer"></div>
            </nav>
       </div>
    );
}
