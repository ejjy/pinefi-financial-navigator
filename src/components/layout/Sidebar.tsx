
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  X, 
  Home, 
  CreditCard, 
  PieChart, 
  Wallet, 
  Calendar, 
  MessageSquare, 
  FileText, 
  Settings,
  Building,
  PiggyBank,
  BarChart4 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, isActive }) => (
  <Link to={to}>
    <Button
      variant={isActive ? "secondary" : "ghost"}
      className={cn(
        "w-full justify-start gap-2 mb-1",
        isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
      )}
    >
      {icon}
      <span>{label}</span>
    </Button>
  </Link>
);

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  const isMobile = useIsMobile();
  
  // Determine current path
  const currentPath = window.location.pathname;

  return (
    <aside
      className={cn(
        "bg-sidebar fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out flex flex-col border-r border-sidebar-border",
        isMobile && !isOpen && "-translate-x-full",
        !isMobile && !isOpen && "-translate-x-full"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-primary rounded-md w-8 h-8 flex items-center justify-center">
            <PiggyBank className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-semibold text-lg">PineFi</span>
        </Link>
        
        {isMobile && (
          <Button variant="ghost" size="sm" onClick={closeSidebar}>
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>

      <div className="flex-1 p-4 overflow-auto">
        <div className="mb-6">
          <h2 className="text-xs font-semibold text-sidebar-foreground/60 mb-2 pl-2">PERSONAL</h2>
          <nav className="space-y-1">
            <NavItem to="/" icon={<Home className="h-5 w-5" />} label="Dashboard" isActive={currentPath === '/'} />
            <NavItem to="/expenses" icon={<CreditCard className="h-5 w-5" />} label="Expenses" isActive={currentPath === '/expenses'} />
            <NavItem to="/budgets" icon={<PieChart className="h-5 w-5" />} label="Budgets" isActive={currentPath === '/budgets'} />
            <NavItem to="/savings" icon={<Wallet className="h-5 w-5" />} label="Savings" isActive={currentPath === '/savings'} />
            <NavItem to="/calendar" icon={<Calendar className="h-5 w-5" />} label="Bill Calendar" isActive={currentPath === '/calendar'} />
          </nav>
        </div>

        <div className="mb-6">
          <h2 className="text-xs font-semibold text-sidebar-foreground/60 mb-2 pl-2">BUSINESS</h2>
          <nav className="space-y-1">
            <NavItem to="/business" icon={<Building className="h-5 w-5" />} label="Business" isActive={currentPath === '/business'} />
            <NavItem to="/invoices" icon={<FileText className="h-5 w-5" />} label="Invoices" isActive={currentPath === '/invoices'} />
            <NavItem to="/reports" icon={<BarChart4 className="h-5 w-5" />} label="Reports" isActive={currentPath === '/reports'} />
          </nav>
        </div>

        <div className="mb-6">
          <h2 className="text-xs font-semibold text-sidebar-foreground/60 mb-2 pl-2">OTHER</h2>
          <nav className="space-y-1">
            <NavItem to="/ai-assistant" icon={<MessageSquare className="h-5 w-5" />} label="AI Assistant" isActive={currentPath === '/ai-assistant'} />
            <NavItem to="/settings" icon={<Settings className="h-5 w-5" />} label="Settings" isActive={currentPath === '/settings'} />
          </nav>
        </div>
      </div>

      <div className="p-4 border-t border-sidebar-border">
        <div className="bg-sidebar-accent rounded-lg p-3">
          <h3 className="font-medium text-sm mb-1">Need help?</h3>
          <p className="text-xs text-sidebar-foreground/70 mb-2">Access AI-powered support anytime</p>
          <Button variant="default" size="sm" className="w-full">
            <MessageSquare className="h-4 w-4 mr-2" />
            Ask AI Assistant
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
