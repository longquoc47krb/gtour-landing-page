// useMenuBar.js
import { useEffect } from 'react';

export function useMenuBar() {
    const body = document.body;
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const navbar = document.getElementById("navbar");
    console.log({ navbar, sidebar })
    function openMenuBar() {
        body.style.overflow = "hidden";
        sidebar?.classList.remove("inactive");
        sidebar?.classList.add("active");
        overlay?.classList.add("active");
        navbar?.classList.add("hidden");

    }

    function closeMenuBar() {
        body.style.overflow = "auto";
        sidebar?.classList.remove("active");
        sidebar?.classList.add("inactive");
        overlay?.classList.remove("active");
        navbar?.classList.remove("hidden");

    }

    function toggleMenu() {
        if (sidebar?.classList.contains("active")) {
            closeMenuBar();
        } else {
            openMenuBar();
        }
    }

    return { openMenuBar, closeMenuBar, toggleMenu };
}
