'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }){
    const [active, setActive] = useState<string | null>(null);

    return (
        <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
                <MenuItem setActive={setActive} active={active} item="Our Courses">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/courses">All Courses</HoveredLink>
                        <HoveredLink href="/basic-music-theory">Basic Music Theory</HoveredLink>
                        <HoveredLink href="/advanced-composition">Advanced Composition</HoveredLink>
                        <HoveredLink href="/song-writing">Song Writing</HoveredLink>
                        <HoveredLink href="/music-production">Music Production</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
            </Menu>
        </div>
    )
}