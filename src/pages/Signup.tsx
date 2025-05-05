
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { LineChart, UserPlus, Mail, Lock, AlertCircle, User, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const Signup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // Email form schema
  const emailFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  });

  // Phone form schema
  const phoneFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    phone: z.string().min(10, { message: "Please enter a valid phone number" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  });

  // Email form
  const emailForm = useForm<z.infer<typeof emailFormSchema>>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  // Phone form
  const phoneForm = useForm<z.infer<typeof phoneFormSchema>>({
    resolver: zodResolver(phoneFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      password: '',
    },
  });

  const handleEmailSignup = async (values: z.infer<typeof emailFormSchema>) => {
    setIsLoading(true);

    try {
      // For now, simulate successful signup with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Temporary signup success - will be replaced with Firebase authentication
      toast({
        title: "Account created",
        description: "Welcome to PineFi! Your account has been created.",
      });
      navigate('/');
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Signup failed",
        description: "There was a problem creating your account.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhoneSignup = async (values: z.infer<typeof phoneFormSchema>) => {
    setIsLoading(true);

    try {
      // For now, simulate successful signup with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Temporary signup success - will be replaced with Firebase authentication
      toast({
        title: "Account created",
        description: "Welcome to PineFi! Your account has been created.",
      });
      navigate('/');
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Signup failed",
        description: "There was a problem creating your account.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setIsLoading(true);

    try {
      // For now, simulate successful signup with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Temporary signup success - will be replaced with Firebase authentication
      toast({
        title: "Google signup successful",
        description: "Welcome to PineFi! Your account has been created.",
      });
      navigate('/');
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Signup failed",
        description: "Could not create account with Google.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[url('/placeholder.svg')] bg-cover bg-center flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/50 backdrop-blur-sm"></div>
      
      <div className="w-full max-w-md relative z-10">
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <div className="bg-primary rounded-md w-10 h-10 flex items-center justify-center shadow-md">
              <LineChart className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="font-semibold text-xl text-white">PineFi</span>
          </Link>
        </div>

        <Card className="animate-fade-in shadow-2xl border-primary/10 backdrop-blur-md bg-card/90">
          <CardHeader>
            <CardTitle className="text-2xl">Create an account</CardTitle>
            <CardDescription>Enter your information to get started</CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="phone">Phone</TabsTrigger>
              </TabsList>
              
              <TabsContent value="email">
                <Form {...emailForm}>
                  <form onSubmit={emailForm.handleSubmit(handleEmailSignup)} className="space-y-4">
                    <FormField
                      control={emailForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <FormControl>
                              <Input 
                                placeholder="John Doe" 
                                className="pl-10"
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={emailForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <FormControl>
                              <Input 
                                placeholder="you@example.com" 
                                className="pl-10"
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={emailForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <FormControl>
                              <Input 
                                type="password" 
                                placeholder="••••••••" 
                                className="pl-10"
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                          <p className="text-xs text-muted-foreground mt-1">
                            Password must be at least 8 characters long
                          </p>
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Creating account...' : 'Create account'}
                      {!isLoading && <UserPlus className="ml-2 h-4 w-4" />}
                    </Button>
                  </form>
                </Form>
              </TabsContent>
              
              <TabsContent value="phone">
                <Form {...phoneForm}>
                  <form onSubmit={phoneForm.handleSubmit(handlePhoneSignup)} className="space-y-4">
                    <FormField
                      control={phoneForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <FormControl>
                              <Input 
                                placeholder="John Doe" 
                                className="pl-10"
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={phoneForm.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <FormControl>
                              <Input 
                                placeholder="+1 (555) 123-4567" 
                                className="pl-10"
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={phoneForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <FormControl>
                              <Input 
                                type="password" 
                                placeholder="••••••••" 
                                className="pl-10"
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormMessage />
                          <p className="text-xs text-muted-foreground mt-1">
                            Password must be at least 8 characters long
                          </p>
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Creating account...' : 'Create account'}
                      {!isLoading && <UserPlus className="ml-2 h-4 w-4" />}
                    </Button>
                  </form>
                </Form>
              </TabsContent>
            </Tabs>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-muted"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-card px-2 text-muted-foreground">or continue with</span>
              </div>
            </div>

            <Button 
              type="button" 
              variant="outline" 
              className="w-full"
              onClick={handleGoogleSignup}
              disabled={isLoading}
            >
              <img 
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
                alt="Google"
                className="h-5 w-5 mr-2"
              />
              Google
            </Button>
          </CardContent>
          
          <CardFooter className="justify-center">
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link to="/login" className="text-primary font-medium hover:underline">
                Log in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
