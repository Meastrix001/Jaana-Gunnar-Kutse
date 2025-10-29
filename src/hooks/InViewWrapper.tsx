"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type Direction = "top" | "bottom" | "left" | "right" | "none";

interface InViewWrapperProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    direction?: Direction;
    distance?: number;
    className?: string
}

export const InViewWrapper = ({
    children,
    delay = 0,
    duration = 0.6,
    direction = "bottom",
    distance = 40,
    className
}: InViewWrapperProps) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [inView, controls]);

    // Compute motion offset based on direction
    const getOffset = () => {
        switch (direction) {
            case "top":
                return { y: -distance };
            case "bottom":
                return { y: distance };
            case "left":
                return { x: -distance };
            case "right":
                return { x: distance };
            default:
                return {};
        }
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, ...getOffset() }}
            animate={controls}
            transition={{ duration, delay, ease: "easeOut" }}
            variants={{
                visible: { opacity: 1, x: 0, y: 0 },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
