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
    LayoutDashboard,
    Sparkles
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function AppSidebar() {
    const items = [
        { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
        { title: "Tasks", url: "/tasks", icon: ListChecks },
        { title: "Goals", url: "/goals", icon: Goal },
        { title: "Calendar", url: "/calendar", icon: Calendar },
        { title: "Journal", url: "/journal", icon: NotebookPen },
        { title: "Weekly Summary", url: "/weekly-summary", icon: Sparkles }
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