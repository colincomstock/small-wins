import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter,
} from "../ui/sidebar.tsx";
import { 
    Calendar,
    Home, 
    NotebookPen, 
    Goal, 
    ListChecks, 
    LayoutDashboard 
} from "lucide-react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

export function AppSidebar() {
    const items = [
        { title: "Dashboard", url: "#", icon: LayoutDashboard },
        { title: "Tasks", url: "#", icon: ListChecks },
        { title: "Goals", url: "#", icon: Goal },
        { title: "Calendar", url: "#", icon: Calendar },
        { title: "Journal", url: "#", icon: NotebookPen },
    ]
    
    return (
        <Sidebar variant="floating">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                    <a href={item.url}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
        )
    }