import React from 'react';
//import {BsFolderFill} from 'react-icons/bs';
import { useState } from 'react';
import { Link } from 'react-router-dom';


import './styles.css';
import LateralMenu from '../MenuLateral';



export default function Folders(){

    const [show, setShowfunc] = useState(false);

    function openModal(){
        var modal = document.getElementById("theModal");
        modal.style.display = 'block';
        setShowfunc(true);
    }
    function closeModal(){
        if(show === true){
            var modal = document.getElementById("theModal");
            modal.style.display = 'none';
            setShowfunc(false);
        }    
    }
    window.onclick = function(event) {
        var modal = document.getElementById("theModal");
        if(event.target === modal){
            modal.style.display = 'none';
            setShowfunc(false); 
        }
          
    }

    function accessFunc(e){
        e.preventDefault();
        closeModal();
        
    }

    return(
        <div className="App">
            <LateralMenu/>
            <div className="content">
                <div id="theModal" className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={ closeModal } >&times;</span>
                        <section className="modal-content-section">
                            <h1>Nome da Pasta</h1>
                            <p>Para ver o cadastro, entre com seu código de segurança</p>
                            <form onSubmit={accessFunc}>
                                <input placeholder="Codigo" type="password"/>
                                <Link to="/folderLinks"><button type="submit">Acessar</button></Link>
                            </form>
                            
                        </section>
                    </div>
                </div> 
                <div className="main">
                    <div className="grid-column">
                        <div className="flipper">
                        <div className="flipper-card" onClick={ openModal } style={{cursor: 'pointer'}}>
                            <div className="flipper-front">
                                <div id="openModal" className="foldering reactioner" >
                                    <div className="foldering-cover">
                                        <p className="foldering-cover-text">Número de Links</p>
                                        <p className="foldering-cover-title">Nome da Pasta</p>
                                    </div>
                                    <div className="foldering-stat-info">
                                        {/* <div className="folder-icon"><BsFolderFill style={{color:'#e03'}}/></div> */}
                                        <p className="foldering-title">~número de contas~ Contas</p>
                                        <p className="foldering-subtitle">Acessar</p>
                                        <div className="foldering-text resume">
                                            <ul>
                                                <li><p>Primeiro Item</p></li>
                                                <li><p>Segundo Item</p></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flipper-back">
                                <div id="openModal" className="foldering reactioner" >
                                    <div className="foldering-cover" style={{backgroundImage:'none'}}>
                                        
                                    </div>
                                    <div className="foldering-stat-info">
                                        <div className="folder-icon"></div>
                                        <p className="foldering-title">~número de contas~ Contas</p>
                                        <p className="foldering-subtitle">Acessar</p>
                                        <div className="foldering-text resume">
                                            <ul>
                                                <li><p>outra coisa</p></li>
                                                <li><p>coisa</p></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}