import React,{useState} from 'react';
import {Link} from  'react-router-dom';
import {BsBoxArrowUpRight} from 'react-icons/bs'
import './styles.css';

import LateralMenu from '../MenuLateral';

export default function FolderLinks(){

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
               
                <div className="line-table">
                    <table>
                        <tr className="center">
                            <th>ícone C/link</th>
                            <th>Nome do site C/link</th>
                            <th>Usuário</th>
                            <th>Email</th>
                            <th>Go-To-Icon</th>
                        </tr>
                        <tr>
                            <td>Aqui tem imagem dos ícones</td>
                            <td><a href="https://app.usertesting.com/my_dashboard/">Link</a></td>
                            <td>username</td>
                            <td>username@gmail.com</td>
                            <td><BsBoxArrowUpRight onClick={openModal}/></td>
                        </tr>
                        
                        
                    </table>
                </div>
            </div>
        </div>
    );
}
