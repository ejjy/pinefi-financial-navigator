
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, LogIn, Mail, Lock, AlertCircle, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

// Firebase authentication will be integrated later
const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // Email form schema
  const emailFormSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  });

  // Phone form schema
  const phoneFormSchema = z.object({
    phone: z.string().min(10, { message: "Please enter a valid phone number" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  });

  // Email form
  const emailForm = useForm<z.infer<typeof emailFormSchema>>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // Phone form
  const phoneForm = useForm<z.infer<typeof phoneFormSchema>>({
    resolver: zodResolver(phoneFormSchema),
    defaultValues: {
      phone: '',
      password: '',
    },
  });

  const handleEmailLogin = async (values: z.infer<typeof emailFormSchema>) => {
    setIsLoading(true);

    try {
      // For now, simulate successful login with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Temporary login success - will be replaced with Firebase authentication
      toast({
        title: "Login successful",
        description: "Welcome back to PineFi!",
      });
      navigate('/');
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: "Please check your email and password.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhoneLogin = async (values: z.infer<typeof phoneFormSchema>) => {
    setIsLoading(true);

    try {
      // For now, simulate successful login with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Temporary login success - will be replaced with Firebase authentication
      toast({
        title: "Login successful",
        description: "Welcome back to PineFi!",
      });
      navigate('/');
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: "Please check your phone and password.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);

    try {
      // For now, simulate successful login with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Temporary login success - will be replaced with Firebase authentication
      toast({
        title: "Google login successful",
        description: "Welcome back to PineFi!",
      });
      navigate('/');
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Login failed",
        description: "Could not authenticate with Google.",
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
            <CardTitle className="text-2xl">Welcome back</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="phone">Phone</TabsTrigger>
              </TabsList>
              
              <TabsContent value="email">
                <Form {...emailForm}>
                  <form onSubmit={emailForm.handleSubmit(handleEmailLogin)} className="space-y-4">
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
                          <div className="flex items-center justify-between">
                            <FormLabel>Password</FormLabel>
                            <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                              Forgot password?
                            </Link>
                          </div>
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
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Logging in...' : 'Log in'}
                      {!isLoading && <LogIn className="ml-2 h-4 w-4" />}
                    </Button>
                  </form>
                </Form>
              </TabsContent>
              
              <TabsContent value="phone">
                <Form {...phoneForm}>
                  <form onSubmit={phoneForm.handleSubmit(handlePhoneLogin)} className="space-y-4">
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
                          <div className="flex items-center justify-between">
                            <FormLabel>Password</FormLabel>
                            <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                              Forgot password?
                            </Link>
                          </div>
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
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Logging in...' : 'Log in'}
                      {!isLoading && <LogIn className="ml-2 h-4 w-4" />}
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
              onClick={handleGoogleLogin}
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
              Don't have an account?{' '}
              <Link to="/signup" className="text-primary font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
