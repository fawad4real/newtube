'use client'
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { FlameIcon, HomeIcon, PlaySquareIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const items = [
    {
        title: "Home",
        url: "/",
        icon: HomeIcon
    },
    {
        title: "Subscriptions",
        url: "/feed/subscriptions",
        icon: PlaySquareIcon,
        auth: true
    },
    {
        title: "Treanding",
        url: "/feed/trending",
        icon: FlameIcon
    },
]

export const MainSection = () => {


    return (
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                    {
                        items.map((item) => {
                            return (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton tooltip={item.title} asChild isActive={false} onClick={() => { }}></SidebarMenuButton>
                                    <Link href={item.url} className='flex items-center gap-4'>
                                        <item.icon />
                                        <span className='text-small'>{item.title}</span>
                                    </Link>
                                </SidebarMenuItem>
                            )
                        })
                    }
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}
