"use client"

// src/components/layout/Sidebar.tsx
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  BarChart,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  User
} from 'lucide-react'

const sidebarItems = [
  { name: 'Dashbaord', href: '/dashbaord', icon: LayoutDashboard },
  { name: 'Analytics', href: '/dashbaord/analytics', icon: BarChart },
  { name: 'Users', href: '/dashbaord/users', icon: Users },
  { name: 'Settings', href: '/dashaord/settings', icon: Settings },
  { name: 'Support', href: '/dashbaord/support', icon: HelpCircle },
]

export  function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <div className={cn(
      "flex flex-col border-r",
      collapsed ? "w-16" : "w-64",
      "transition-all duration-300 ease-in-out"
    )}>
      <div className="flex h-14 items-center justify-between px-4">
        {!collapsed && <span className="font-bold">SaaS Dashboard</span>}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-2 p-2">
          {sidebarItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                pathname === item.href
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>
      </ScrollArea>
      <div className="p-4">
        <Button variant="outline" className="w-full justify-start gap-2">
          <User className="h-4 w-4" />
          {!collapsed && <span>Profile</span>}
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2 mt-2">
          <LogOut className="h-4 w-4" />
          {!collapsed && <span>Log out</span>}
        </Button>
      </div>
    </div>
  )
}