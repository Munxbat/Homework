import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { NavLink } from "react-router-dom";
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        submenu: [
            {
                id: 11,
                title: 'Home style 1',
                link: '/home'
            },
            {
                id: 12,
                title: 'Home style 2',
                link: '/home-2'
            },
            {
                id: 13,
                title: 'Home style 3',
                link: '/home-3'
            },
            {
                id: 14,
                title: 'Home style 4',
                link: '/home-4'
            },
            {
                id: 15,
                title: 'Home style 5',
                link: '/home-5'
            },
            {
                id: 16,
                title: 'Home style 6',
                link: '/home-6'
            },


        ]
    },
    {
        id: 88,
        title: 'About',
        link: '/about',
    },
    {
        id: 3,
        title: 'Services',
        link: '#',
        submenu: [
            {
                id: 31,
                title: 'Service',
                link: '/service',
            },

            {
                id: 31,
                title: 'Service Single',
                link: '/service-single/Air-Transport',
            },
        ]
    },
    {
        id: 4,
        title: 'Project',
        link: '#',
        submenu: [
            {
                id: 31,
                title: 'Project',
                link: '/project',
            },

            {
                id: 31,
                title: 'Project Single',
                link: '/project-single/Special-Transport-Solutions',
            },
        ]
    },
    {
        id: 4,
        title: 'Blog',
        link: '/blog',
        submenu: [
            {
                id: 41,
                title: 'Blog',
                link: '/blog'
            },
            {
                id: 42,
                title: 'Blog Left sidebar',
                link: '/blog-left-sidebar'
            },
            {
                id: 43,
                title: 'Blog full width',
                link: '/blog-fullwidth'
            },
            {
                id: 44,
                title: 'Blog single',
                link: '/blog-single/Why-Industry-Are-A-Juicy'
            },
            {
                id: 45,
                title: 'Blog single Left sidebar',
                link: '/blog-single-left-sidebar/Why-Industry-Are-A-Juicy'
            },
            {
                id: 46,
                title: 'blog-single-fullwidth',
                link: '/blog-single-fullwidth/Why-Industry-Are-A-Juicy'
            },
        ]
    },

    {
        id: 5,
        title: 'Pages',
        link: '#',
        submenu: [
            {
                id: 51,
                title: 'Shop',
                link: '/Shop',
            },
            {
                id: 52,
                title: 'Shop Single',
                link: '/shop-single/Fresh-key-Lime'
            },
            {
                id: 53,
                title: 'Cart',
                link: '/cart'
            },
            {
                id: 54,
                title: 'Checkout',
                link: '/checkout'
            },
            {
                id: 55,
                title: 'Pricing',
                link: '/pricing'
            },
            {
                id: 56,
                title: 'Team Single',
                link: '/team-single/Esther-Howard'
            },
            {
                id: 57,
                title: '404',
                link: '/404'
            },
        ]
    },

    {
        id: 6,
        title: 'Contact',
        link: '/contact',
    }


]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <NavLink onClick={ClickHandler} className="active"
                                                                    to={submenu.link}>{submenu.title}</NavLink>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <NavLink className="active"
                                        to={item.link}>{item.title}</NavLink>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu mobail-menu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;