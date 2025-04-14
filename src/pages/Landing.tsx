
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LineChart, Building, Shield, BarChart4, CreditCard, Sparkles } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      {/* Header/Navigation */}
      <header className="border-b border-border/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary rounded-md w-8 h-8 flex items-center justify-center shadow-sm">
              <LineChart className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg">PineFi</span>
          </div>
          <div className="flex gap-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/login')}
              className="hover:bg-primary/10"
            >
              Log in
            </Button>
            <Button 
              onClick={() => navigate('/signup')}
              className="shadow-sm"
            >
              Sign up
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Smart financial management for everyone
            </h1>
            <p className="text-xl text-muted-foreground">
              Take control of your finances with PineFi's intuitive tools, AI insights, and personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => navigate('/signup')}
                className="shadow-md"
              >
                Get started for free
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => {
                  const demoEl = document.getElementById('features');
                  demoEl?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                See how it works
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/30 rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl opacity-50"></div>
            <div className="relative bg-card rounded-xl shadow-2xl overflow-hidden border border-border">
              <img 
                src="/placeholder.svg" 
                alt="PineFi Dashboard Preview" 
                className="w-full"
                style={{ height: '400px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Everything you need to manage your finances</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful tools designed to help you track, plan, and grow your wealth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <CreditCard className="h-8 w-8 text-primary" />,
              title: "Expense Tracking",
              description: "Automatically categorize and track your expenses to understand where your money goes."
            },
            {
              icon: <BarChart4 className="h-8 w-8 text-primary" />,
              title: "Budget Planning",
              description: "Create custom budgets and get alerts when you're close to your spending limits."
            },
            {
              icon: <Shield className="h-8 w-8 text-primary" />,
              title: "Secure Banking",
              description: "Connect your accounts securely with bank-level encryption and security protocols."
            },
            {
              icon: <Building className="h-8 w-8 text-primary" />,
              title: "Business Tools",
              description: "Manage your business finances with specialized tools for invoices and reporting."
            },
            {
              icon: <Sparkles className="h-8 w-8 text-primary" />,
              title: "AI Assistant",
              description: "Get personalized financial advice and insights powered by artificial intelligence."
            },
            {
              icon: <LineChart className="h-8 w-8 text-primary" />,
              title: "Investment Tracking",
              description: "Monitor your investments and track your progress toward financial goals."
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-card border border-border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 bg-primary/10 p-2 inline-block rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 border-y border-border/50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to take control of your finances?</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of users who are already managing their money smarter with PineFi.
            </p>
            <Button 
              size="lg" 
              onClick={() => navigate('/signup')}
              className="shadow-md"
            >
              Start your free account
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="bg-primary rounded-md w-8 h-8 flex items-center justify-center shadow-sm">
                <LineChart className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-lg">PineFi</span>
            </div>
            <div className="flex gap-6">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PineFi. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
