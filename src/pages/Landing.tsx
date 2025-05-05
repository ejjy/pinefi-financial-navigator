
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  LineChart, Building, Shield, BarChart4, CreditCard, 
  Sparkles, ChevronRight, ArrowRight, Check, Brain, 
  BellRing, Wallet, TrendingUp, Smartphone
} from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      {/* Header/Navigation */}
      <header className="border-b border-border/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary rounded-md w-8 h-8 flex items-center justify-center shadow-sm">
              <LineChart className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg">PineFi</span>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it works</a>
            <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          </div>
          <div className="flex gap-3">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/login')}
              className="hover:bg-primary/10"
              size="sm"
            >
              Log in
            </Button>
            <Button 
              onClick={() => navigate('/signup')}
              className="shadow-sm"
              size="sm"
            >
              Sign up
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 md:pt-20 lg:pt-24">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        
        <div className="container mx-auto px-4 py-10 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 animate-fade-in lg:pr-10">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-2">
                <Sparkles className="mr-1 h-3 w-3" /> Smart financial tools for everyone
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Take control of your <span className="text-primary">finances</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                PineFi combines AI-powered insights with intuitive tools to help you manage money, save more, and achieve your financial goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/signup')}
                  className="shadow-md group"
                >
                  Get started for free
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
              
              <div className="pt-4 flex items-center gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-1 rounded-full">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">Free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-1 rounded-full">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">No credit card</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-primary/10 p-1 rounded-full">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">Cancel anytime</span>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in hidden md:block">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/30 rounded-full filter blur-3xl opacity-50"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl opacity-50"></div>
              <div className="relative bg-card rounded-xl shadow-2xl overflow-hidden border border-border">
                <img 
                  src="/placeholder.svg" 
                  alt="PineFi Dashboard Preview" 
                  className="w-full"
                  style={{ height: '400px', objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent flex items-end p-6">
                  <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-border w-full">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium">Monthly Summary</h3>
                        <p className="text-xs text-muted-foreground">You're on track with your savings goal</p>
                      </div>
                      <Button size="sm" variant="ghost" className="h-8 gap-1">
                        <TrendingUp className="h-3 w-3" /> +12.4%
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Active Users", value: "10K+" },
            { label: "Money Managed", value: "$12M+" },
            { label: "Saved by Users", value: "$2.5M+" },
            { label: "Client Satisfaction", value: "97%" }
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-1">
              <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Smart features for smarter finances</h2>
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
              icon: <Brain className="h-8 w-8 text-primary" />,
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
              className="group bg-card border border-border p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-in hover:border-primary/40"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 bg-primary/10 p-3 inline-block rounded-lg group-hover:bg-primary/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-muted/30 border-y border-border/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">How PineFi works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Take control of your finances in just a few simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {/* Timeline connector */}
            <div className="hidden md:block absolute top-24 left-1/2 -translate-x-1/2 w-[80%] h-0.5 bg-primary/20"></div>
            
            {[
              {
                icon: <Smartphone className="h-8 w-8 text-primary" />,
                title: "Connect your accounts",
                description: "Link your bank accounts, credit cards, and investments for a complete financial picture."
              },
              {
                icon: <BellRing className="h-8 w-8 text-primary" />,
                title: "Set up goals & alerts",
                description: "Define your savings goals and get notifications when bills are due or you exceed budgets."
              },
              {
                icon: <Wallet className="h-8 w-8 text-primary" />,
                title: "Track & optimize",
                description: "Monitor your progress and get AI-powered recommendations to optimize your finances."
              },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="bg-primary/10 p-4 rounded-full border-4 border-background">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section (Placeholder) */}
      <section id="testimonials" className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Loved by users</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here's what our users have to say about PineFi
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "PineFi helped me save an extra $250 each month by identifying unnecessary subscriptions and optimizing my spending.",
              author: "Sarah K.",
              role: "Small Business Owner"
            },
            {
              quote: "The AI assistant feature is incredible. It's like having a financial advisor in my pocket that's available 24/7.",
              author: "Michael T.",
              role: "Software Engineer"
            },
            {
              quote: "I've tried other financial apps, but PineFi's interface and insights are simply better. It's helped me pay off my debt faster.",
              author: "Jamie L.",
              role: "Healthcare Professional"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-card border border-border p-6 rounded-lg shadow-sm relative">
              <div className="absolute -top-4 left-6 text-4xl text-primary/20">"</div>
              <p className="pt-4 italic text-muted-foreground mb-4">{testimonial.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section (Placeholder) */}
      <section id="pricing" className="bg-primary/5 border-y border-border/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Simple, transparent pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose a plan that works for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Basic",
                price: "Free",
                description: "Perfect for getting started",
                features: [
                  "Basic expense tracking",
                  "Up to 2 bank accounts",
                  "Monthly spending reports",
                  "Basic budgeting tools"
                ]
              },
              {
                title: "Premium",
                price: "$9.99/month",
                description: "For individuals who want more control",
                features: [
                  "Unlimited expense tracking",
                  "Unlimited bank accounts",
                  "AI-powered insights",
                  "Custom budget categories",
                  "Bill reminders & alerts",
                  "Investment tracking"
                ],
                highlighted: true
              },
              {
                title: "Business",
                price: "$19.99/month",
                description: "For small businesses & professionals",
                features: [
                  "Everything in Premium",
                  "Business expense categorization",
                  "Tax preparation insights",
                  "Invoice management",
                  "Multiple users",
                  "Business financial reports"
                ]
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`bg-card rounded-lg overflow-hidden border ${
                  plan.highlighted ? 'border-primary shadow-lg relative' : 'border-border shadow-sm'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                  <Button 
                    className={`w-full ${plan.highlighted ? '' : 'bg-muted-foreground/80 hover:bg-muted-foreground'}`}
                    onClick={() => navigate('/signup')}
                  >
                    Get started
                  </Button>
                </div>
                <div className="border-t border-border p-6">
                  <p className="font-medium mb-4 text-sm">What's included:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to take control of your finances?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their money smarter with PineFi.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/signup')}
            className="shadow-md text-lg px-8"
          >
            Start your free account
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-primary rounded-md w-8 h-8 flex items-center justify-center shadow-sm">
                  <LineChart className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-semibold text-lg">PineFi</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Smart financial management for everyone. Track, save, and grow your wealth.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium mb-3">Product</h4>
              <a href="#features" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#pricing" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Integrations</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Updates</a>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium mb-3">Company</h4>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium mb-3">Resources</h4>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Help Center</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left text-sm text-muted-foreground mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} PineFi. All rights reserved.
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
