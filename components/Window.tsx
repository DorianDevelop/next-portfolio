'use client';
import Image from 'next/image'
import React from "react";

// Interface for the props
interface WindowProps {
    title: string;
    height: number;
    width: number;
    children: React.ReactNode; // The content inside the window
    onClose: () => void;
}

const Window = ({title, height, width, children, onClose}: WindowProps) => {
    return (
        <section id="window" style={{height: `${height}vh`, width: `${width}vw`}}>
            <section className="window-header">
                <div></div>
                <h1>{title}</h1>
                <div className="window-controls">
                    <div onClick={onClose}>
                        <Image className="close-icon" src="/icons/close.svg" alt="close-icon" width="16" height="16" />
                    </div>
                </div>
            </section>
            {/* Render the specific page content here */}
            <div className="window-content">
                {children}
            </div>
        </section>
    )
}
export default Window