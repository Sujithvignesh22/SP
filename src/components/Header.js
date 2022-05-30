import React from 'react';


export default function Header(props) {
    const {countCartItems }=props;
    return (
        <header className='row block center'>
            <div>
                <center>
                    <h1>Sujith Pharmacy</h1>
                    <h3>To bring medicine of International standards within our Grasps.</h3>
                </center>
            </div>
            <div>
                <h3 href="#/cart">No. Cart Items </h3>
                 {' '}
                {countCartItems?(
                    <button className='badge'>{countCartItems}</button>
                ): (' ') }
                
                <h4 href="#/signin"> Sign In</h4>

            </div>
        </header>
    );
}