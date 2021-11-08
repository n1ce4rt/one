import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import style from './header.module.css'

function Header() {

    const [state, setState] = useState(false);

    return (

            <div className={`${style.container} ${state && style.focus}`} onMouseOver={() => setState(true)} onMouseOut={() => setState(false)}>

                

                <Link to='/pre-junior' >pre-junior</Link>
                <Link to='/junior' >junior</Link>
                <Link to='/junior_+' >junior +</Link>
                <Link to='/' className={style.box}></Link>

            </div>
    )
}



export default Header;
