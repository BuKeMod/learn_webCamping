import React from 'react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { AlignLeft } from 'lucide-react';
import UserIcon from './UserIcon';
import { Button } from '../ui/button';
import { publicLinks,privateLinks } from '@/utils/links';
import { Link } from 'react-router';

import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import SignOutLink from './SignOutLink';

const DropdownListMenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline'>

                    <AlignLeft />
                    <UserIcon />
                </Button>

            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />

                {
                    publicLinks.map((item, index) => {
                        return (
                            <DropdownMenuItem key={index}>
                                <Link to={item.href}>
                                    {item.label}
                                </Link>
                            </DropdownMenuItem>

                        )
                    })
                }
                <DropdownMenuSeparator />
                <SignedOut>
                    <DropdownMenuItem>
                        {/* กรณียังไม่ได้ล็อกอิน */}
                        <SignInButton mode="modal">
                            <button>Login.</button>
                        </SignInButton>
                    </DropdownMenuItem>

                    <DropdownMenuItem>   

                        <SignUpButton mode="modal">
                            <button>Register</button>
                        </SignUpButton>
                    </DropdownMenuItem>
                </SignedOut>

                {/* กรณีล็อกอินเเล้ว */}
                <SignedIn>
                {
                    privateLinks.map((item, index) => {
                        return (
                            <DropdownMenuItem key={index}>
                                <Link to={item.href}>
                                    {item.label}
                                </Link>
                            </DropdownMenuItem>

                        )
                    })
                }
                <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        {/* <UserButton />
                        <SignOutButton /> */}
                        <SignOutLink />
                    </DropdownMenuItem>

                </SignedIn>


            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default DropdownListMenu