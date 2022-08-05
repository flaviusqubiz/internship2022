import React from 'react';
import ReactDOM from 'react-dom/client';
import './day1-2.css';

function PanelHeader() {
    return (
      <div className="some_header">
        <div>
          <a href="#"><img src="./Heroku_logo.svg.png" alt="Heroku logo" width="200" height="55" /></a>
        </div>
        <div>
           <ul>
              <li><a href="#">Apps</a></li>
              <li><a href="#">Add-ons</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#"><i className="material-icons">cell_tower</i></a></li>
              <li><a href="#"><i className="material-icons">account_circle</i></a></li>
            </ul>
        </div>
      </div>
    );
}

function Panel() {
  return (
    <div className='panel'>
      <PanelHeader />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Panel />);