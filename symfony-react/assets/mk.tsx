import './bootstrap';
import React from 'react';
import {Layout} from "antd";
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from "react-router-dom";
import AppNavigation from "./mk/shared/AppNavigation";

import 'antd/dist/antd.css';
// import "tailwindcss/tailwind.css";
import './mk/styles/mk.less';

const {Header, Footer, Sider, Content} = Layout;

ReactDOM.render(
   <React.StrictMode>
      <HashRouter basename={''}>
         <div className={'flex'}>
            <Sider>
               <AppNavigation/>
            </Sider>
            <Switch>
               <Route exact path="/">
                  <div className={'bg-red-100'}>app</div>
               </Route>
            </Switch>
         </div>
      </HashRouter>
   </React.StrictMode>,
   document.getElementById('app')
);