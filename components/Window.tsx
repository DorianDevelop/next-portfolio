'use client';
import Image from 'next/image'
import React, {useCallback, useEffect, useRef, useState} from "react";

// Interface for the props
interface WindowProps {
    title: string;
    width: number;
    children: React.ReactNode; // The content inside the window
    onClose: () => void;
    // New props to support z-index stacking and focus behavior
    zIndex?: number;
    onFocus?: () => void;
}

const Window = ({title, width, children, onClose, zIndex = 1000, onFocus}: WindowProps) => {
    const containerRef = useRef<HTMLElement | null>(null);
    const headerRef = useRef<HTMLElement | null>(null);

    // When true, we keep CSS centered translate(-50%, -50%)
    const [isCentered, setIsCentered] = useState(true);
    const [pos, setPos] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
    const dragStartRef = useRef<{ x: number; y: number } | null>(null);
    const startPosRef = useRef<{ top: number; left: number }>({ top: 0, left: 0 });
    const [dragging, setDragging] = useState(false);

    const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);

    const onPointerMove = useCallback((clientX: number, clientY: number) => {
        if (!dragStartRef.current || !containerRef.current) return;

        const dx = clientX - dragStartRef.current.x;
        const dy = clientY - dragStartRef.current.y;

        const el = containerRef.current;
        const rect = el.getBoundingClientRect();

        const winW = window.innerWidth;
        const winH = window.innerHeight;

        // Element dimensions (use rect width/height which stay constant during drag)
        const elW = rect.width;
        const elH = rect.height;

        const minLeft = 0;
        const minTop = 0;
        const maxLeft = Math.max(0, winW - elW);
        const maxTop = Math.max(0, winH - elH);

        const newLeft = clamp(startPosRef.current.left + dx, minLeft, maxLeft);
        const newTop = clamp(startPosRef.current.top + dy, minTop, maxTop);

        setPos({ left: newLeft, top: newTop });
    }, []);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        onPointerMove(e.clientX, e.clientY);
    }, [onPointerMove]);

    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (e.touches && e.touches[0]) {
            // prevent page from scrolling while dragging
            e.preventDefault();
            onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
        }
    }, [onPointerMove]);

    const stopDragging = useCallback(() => {
        setDragging(false);
        dragStartRef.current = null;
        document.body.style.userSelect = '';
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', stopDragging as any);
        document.removeEventListener('touchmove', handleTouchMove, { passive: false } as any);
        document.removeEventListener('touchend', stopDragging as any);
    }, [handleMouseMove, handleTouchMove]);

    const startDragging = useCallback((clientX: number, clientY: number) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        // On the first drag, switch from CSS centered to explicit top/left
        if (isCentered) {
            setIsCentered(false);
            setPos({ top: rect.top, left: rect.left });
            startPosRef.current = { top: rect.top, left: rect.left };
        } else {
            startPosRef.current = { top: pos.top, left: pos.left };
        }

        dragStartRef.current = { x: clientX, y: clientY };
        setDragging(true);
        document.body.style.userSelect = 'none';
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', stopDragging as any);
        document.addEventListener('touchmove', handleTouchMove, { passive: false } as any);
        document.addEventListener('touchend', stopDragging as any);
    }, [handleMouseMove, handleTouchMove, isCentered, pos.left, pos.top, stopDragging]);

    // Cleanup on unmounting
    useEffect(() => {
        return () => stopDragging();
    }, [stopDragging]);

    const onHeaderMouseDown = (e: React.MouseEvent) => {
        // Only start dragging with the primary button
        if (e.button !== 0) return;
        // When interacting with the header, bring to front
        onFocus?.();
        startDragging(e.clientX, e.clientY);
    };

    const onHeaderTouchStart = (e: React.TouchEvent) => {
        e.preventDefault();
        const touch = e.touches[0];
        if (!touch) return;
        onFocus?.();
        startDragging(touch.clientX, touch.clientY);
    };

    const style: React.CSSProperties = {
        width: `${width}vw`,
        // When centered, rely on CSS (#window) transform rules. When dragged, use explicit positioning.
        top: isCentered ? undefined : `${pos.top}px`,
        left: isCentered ? undefined : `${pos.left}px`,
        transform: isCentered ? 'translate(-50%, -50%)' : 'none',
        position: 'absolute',
        zIndex: zIndex,
    };

    return (
        <section
            id="window"
            ref={(el) => (containerRef.current = el)}
            style={style}
            onMouseDown={() => onFocus?.()}
            onTouchStart={() => onFocus?.()}
        >
            <section
                className="window-header"
                ref={(el) => (headerRef.current = el)}
                onMouseDown={onHeaderMouseDown}
                onTouchStart={onHeaderTouchStart}
                role="button"
                aria-label="Drag Window"
                style={{ touchAction: 'none', cursor: dragging ? 'grabbing' : 'move' }}
            >
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