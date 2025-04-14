
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, UserPlus, Mail, Phone, Building, FileText, MoreHorizontal } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

// Mock data - will be replaced with actual data from Firebase
const mockClients = [
  { 
    id: '1', 
    name: 'Acme Corporation', 
    contact: 'John Smith', 
    email: 'john@acmecorp.com', 
    phone: '(555) 123-4567', 
    status: 'Active',
    totalBilled: 12500,
    lastInvoice: '2023-04-01'
  },
  { 
    id: '2', 
    name: 'Globex Industries', 
    contact: 'Jane Doe', 
    email: 'jane@globex.com', 
    phone: '(555) 234-5678', 
    status: 'Active',
    totalBilled: 8750,
    lastInvoice: '2023-03-15'
  },
  { 
    id: '3', 
    name: 'Initech LLC', 
    contact: 'Michael Bolton', 
    email: 'michael@initech.com', 
    phone: '(555) 345-6789', 
    status: 'Inactive',
    totalBilled: 5200,
    lastInvoice: '2023-02-28'
  },
  { 
    id: '4', 
    name: 'Massive Dynamic', 
    contact: 'Walter Bishop', 
    email: 'walter@massive.com', 
    phone: '(555) 456-7890', 
    status: 'Active',
    totalBilled: 15800,
    lastInvoice: '2023-03-28'
  },
  { 
    id: '5', 
    name: 'Stark Industries', 
    contact: 'Tony Stark', 
    email: 'tony@stark.com', 
    phone: '(555) 567-8901', 
    status: 'Active',
    totalBilled: 22300,
    lastInvoice: '2023-04-05'
  },
];

const BusinessClients = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  
  // Filter clients
  const filteredClients = mockClients.filter(client => {
    // Search filter
    const matchesSearch = 
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.contact.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Status filter
    const matchesStatus = statusFilter === 'all' || client.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  return (
    <Card className="mt-4 shadow-md">
      <CardHeader className="pb-3">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <CardTitle className="text-xl">Clients</CardTitle>
            <CardDescription>Manage your business clients and their details</CardDescription>
          </div>
          <Button>
            <UserPlus className="h-4 w-4 mr-2" />
            Add Client
          </Button>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search clients..."
              className="pl-8"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div>
            <Select 
              value={statusFilter} 
              onValueChange={setStatusFilter}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredClients.map((client, index) => (
            <Card key={client.id} className="border animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
              <CardHeader className="pb-2 pt-4">
                <div className="flex justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-1">
                      <Building className="h-4 w-4 text-primary" />
                      <span>{client.name}</span>
                    </CardTitle>
                    <CardDescription className="flex items-center mt-0.5">
                      Contact: {client.contact}
                    </CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Client</DropdownMenuItem>
                      <DropdownMenuItem>Create Invoice</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Delete Client</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                    <a href={`mailto:${client.email}`} className="hover:underline">{client.email}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>{client.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-3.5 w-3.5 text-muted-foreground" />
                    <span>Last Invoice: {new Date(client.lastInvoice).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-4 pt-3 border-t">
                  <div>
                    <p className="text-xs text-muted-foreground">Total Billed</p>
                    <p className="font-medium">${client.totalBilled.toLocaleString()}</p>
                  </div>
                  <div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      client.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {client.status}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {filteredClients.length === 0 && (
            <div className="col-span-1 md:col-span-2 py-10 text-center text-muted-foreground">
              No clients found matching your search
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="text-sm text-muted-foreground">
          Showing {filteredClients.length} of {mockClients.length} clients
        </div>
      </CardFooter>
    </Card>
  );
};

export default BusinessClients;
