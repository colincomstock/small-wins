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
    NotebookPen, 
    Goal, 
    ListChecks, 
    LayoutDashboard,
    Sparkles
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function AppSidebar() {
    const location = useLocation();
    const items = [
        { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
        { title: "Tasks", url: "/tasks", icon: ListChecks },
        { title: "Goals", url: "/goals", icon: Goal },
        { title: "Calendar", url: "/calendar", icon: Calendar },
        { title: "Journal", url: "/journal", icon: NotebookPen },
        { title: "Weekly Summary", url: "/weekly-summary", icon: Sparkles }
    ]
    
    return (
        // Offset under a 64px (h-16) sticky header on md+ screens
        <Sidebar variant="inset" className="md:top-16 md:h-[calc(100svh-4rem)]">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => {
                                const isActive = location.pathname === item.url;
                                return (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild isActive={isActive}>
                                            <Link to={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
        )
    }