
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  Bell, 
  Search,
  User,
  MessageSquare,
  X
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const handleNotificationClick = () => {
    toast({
      title: "Notifications",
      description: "You have no new notifications",
    });
  };

  return (
    <nav className="bg-background border-b border-border px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <Button 
          onClick={onMenuClick} 
          variant="ghost" 
          size="icon" 
          className="mr-2 hover:bg-secondary transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
        
        {!isMobile && !searchVisible && (
          <div className="hidden md:flex items-center w-96 relative animate-fade-in">
            <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search transactions, budgets..."
              className="pl-8 bg-secondary"
            />
          </div>
        )}

        {searchVisible && isMobile && (
          <div className="flex items-center relative w-full animate-fade-in">
            <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-8 bg-secondary w-full"
            />
            <Button 
              onClick={toggleSearch} 
              variant="ghost" 
              size="icon" 
              className="ml-2 absolute right-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      <div className="flex items-center space-x-2">
        {isMobile && !searchVisible && (
          <Button variant="ghost" size="icon" onClick={toggleSearch}>
            <Search className="h-5 w-5" />
          </Button>
        )}
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative hover:bg-secondary transition-colors"
          onClick={handleNotificationClick}
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
        </Button>

        <Button 
          variant="ghost" 
          size="icon" 
          className="hover:bg-secondary transition-colors"
          onClick={() => window.location.href = '/ai-assistant'}
        >
          <MessageSquare className="h-5 w-5" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-secondary transition-colors"
            >
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <div className="flex items-center justify-start p-2">
              <div className="bg-primary/10 p-2 rounded-full mr-2">
                <User className="h-4 w-4 text-primary" />
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-medium">Taylor Swift</p>
                <p className="text-xs text-muted-foreground">taylor@example.com</p>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Account Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
