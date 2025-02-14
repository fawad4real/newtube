'use client'
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { useClerk, useAuth } from '@clerk/nextjs'
import { FlameIcon, HistoryIcon, HomeIcon, ListVideoIcon, PlaySquareIcon, ThumbsUpIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const items = [
    {
        title: "History",
        url: "/playlists/history",
        icon: HistoryIcon,
        auth: true
    },
    {
        title: "Linked Videos",
        url: "/playlists/liked",
        icon: ThumbsUpIcon,
        auth: true
    },
    {
        title: "Playlist",
        url: "/playlists",
        icon: ListVideoIcon
    },
]

export const PersonalSection = () => {

    const clerk = useClerk();
    const { isSignedIn } = useAuth();
    return (
        <SidebarGroup>
            <SidebarGroupLabel>
                You
            </SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {
                        items.map((item) => {
                            return (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton tooltip={item.title} asChild isActive={false}
                                        onClick={(e) => {
                                            if (!isSignedIn && item.auth) {
                                                e.preventDefault();
                                                return clerk.openSignIn();
                                            }
                                        }}>
                                        <Link href={item.url} className='flex items-center gap-4'>
                                            <item.icon />
                                            <span className='text-small'>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )
                        })
                    }
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}
