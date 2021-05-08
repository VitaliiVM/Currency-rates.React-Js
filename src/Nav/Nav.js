import './nav.css';
import React from "react";
class Nav extends React.Component {

    render() {
        return(
            <div className="header-nav">
                <div className="container">
                    <nav>
                        <ul>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a href="/">Главная</a></li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a href="/about">О нас</a></li>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <li><a href="https://itgid.info/">Контакты</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}
export default Nav;