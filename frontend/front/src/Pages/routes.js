import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom';


// Importar aqui as páginas
import Folders from './FoldersPage';
import FolderLinks from './FolderOfPage';

export default function routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Folders}/>
                <Route path="/folderLinks" component={FolderLinks}/>
            </Switch>
        </BrowserRouter>
    );
}