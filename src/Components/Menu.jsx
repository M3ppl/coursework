import { Link } from 'react-router-dom';
import React from "react";

export const Menu = ({ isMenuOpen }) => {
    return (
        <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
            <div className="main-menu">
                <img width={60} height={60} src="./img/ava.png" />
                <h1>Alex Shaw</h1>
                <div className="menu-description">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" /></svg>
                    <span>Ho Chi Minh City, Vietnam</span>
                </div>
                <button className='button'>Student</button>
                <ul>
                    <li><a href="/Dashboard"><img src="./img/home.png " /><span>Dashboard</span></a></li>
                    <li><a href="/Calendar"><img src="./img/event.png " /><span>Calendar</span></a></li>
                    <li><a href="/Announcement"><img src="./img/announcement.png " /><span>Announcement</span></a></li>
                    <li><a href="/Courses"><img src="./img/assignment.png " /><span>Courses</span></a></li>
                    <li><a href="/Messages"><img src="./img/email.png " /><span>Messages</span></a></li>
                    <li><a href="/Forum"><img src="./img/forum.png " /><span>Forum</span></a></li>
                </ul>
                <div className="menu-footer">
                    <a class="settings" href="/Settings"><img src="./img/settings.png" /></a>
                    <a class="logout" href="/Logout"><img src="./img/logout.png" /></a>
                </div>
            </div>
        </div>
    );
};

export default Menu;