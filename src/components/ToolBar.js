import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import './ToolBar.css';



const ToolBar = props => {

    useEffect(() => {
        const toggle = document.querySelector(".toggle");
        const menu = document.querySelector(".menu");
     
        /* Toggle mobile menu */
        function toggleMenu() {
            if (menu.classList.contains("active")) {
                menu.classList.remove("active");
                
            } else {
                menu.classList.add("active");
            
            }
        }
     
        /* Event Listener */
        toggle.addEventListener("click", toggleMenu, false);

    });
    

    return(
    <nav>
        <ul class="menu">
            <li class="name"><a href="/">Photo or Painting Classifier</a></li>
            <li class="item"><a href="http://www.github.com/wongjulian4213">Github</a></li>
            <li class="item"><a href="mailto:wongjulian4213@gmail.com">Contact me!</a></li>
            <li class="toggle"><a href="#"><FontAwesomeIcon icon={faAlignJustify} /></a></li>
        </ul>
    </nav>
    );
}

export { ToolBar };