'use client'
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };
  
  return (
    <Card className="border-blue-100 shadow-md">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
        <CardTitle className="text-2xl text-blue-900">Send Us a Message</CardTitle>
        <CardDescription>
          Fill out the form below and we'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-6">
        {submitted ? (
          <Alert className="bg-green-50 border-green-200 text-green-800 mb-4">
            <AlertDescription>
              Thank you for your message! We'll get back to you shortly.
            </AlertDescription>
          </Alert>
        ) : null}
        
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-700">Full Name</Label>
                <Input 
                  id="name" 
                  placeholder="John Doe" 
                  required 
                  className="border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  required 
                  className="border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-slate-700">Please Select a Subject Line</Label>
              <Select>
                <SelectTrigger className="border-slate-200 focus:border-blue-400 focus:ring-blue-400">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="support">Technical Support</SelectItem>
                  <SelectItem value="sales">Sales Question</SelectItem>
                  <SelectItem value="billing">Billing Issue</SelectItem>
                  <SelectItem value="feedback">Product Feedback</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-slate-700">Your Message</Label>
              <Textarea 
                id="message" 
                placeholder="How can we help you?" 
                required 
                className="min-h-32 border-slate-200 focus:border-blue-400 focus:ring-blue-400"
              />
            </div>
            
            <div className="flex items-start space-x-2 pt-2">
              <Checkbox id="robot" className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600" />
              <div className="grid gap-1.5 leading-none">
                <Label 
                  htmlFor="robot" 
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I am not a robot
                </Label>
                <p className="text-sm text-slate-500">
                  This helps us prevent automated spam submissions.
                </p>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      
      <CardFooter className="bg-slate-50 border-t border-slate-100 flex justify-end gap-2">
        <Button 
          variant="outline" 
          className="text-slate-700 border-slate-300 hover:bg-slate-100"
        >
          Clear Form
        </Button>
        <Button 
          type="submit" 
          onClick={handleSubmit} 
          className="bg-blue-600 hover:bg-blue-700"
        >
          Submit Message
        </Button>
      </CardFooter>
    </Card>
  );
};