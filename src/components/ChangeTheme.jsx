"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import { CgDarkMode } from "react-icons/cg";

function ChangeTheme() {

    const [theme, setTheme] = useState("light")

    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('html')?.classList.add('dark')
        } else {
            document.querySelector('html')?.classList.remove('dark')
        }

    }, [theme])

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme == 'light' ? 'dark' : 'light')
    }


    return (
        <button
            className="text-4xl"
            onClick={handleChangeTheme}
        >
            <CgDarkMode />
        </button>
    )
}

export default ChangeTheme