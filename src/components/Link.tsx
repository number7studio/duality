import React from 'react'
import { Link as RLink } from 'react-router-dom'

interface LinkProps {
    href: string;
    children: any;
}

export default function Link({href, children}:LinkProps) {
    return (
        <RLink to={href}>
            {children}
        </RLink>
    )
}
