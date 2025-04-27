"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageSquareText } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Define form schema
const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name is required"),
  jobRole: z.string().min(2, "Role is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide some details about your needs"),
});

export function ContactButtonModal() {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      company: "",
      jobRole: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log(values);
    setIsSubmitting(false);
    form.reset();
    setOpen(false);
    
    // Here you would typically send the data to your backend
  };

  return (
    <>
      {/* Floating contact button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setOpen(true)}
          size="lg"
          className="rounded-full h-16 w-16 shadow-lg bg-blue-600 hover:bg-blue-700 text-white p-0 flex items-center justify-center group relative overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-500 opacity-100"></span>
          <span className="absolute -inset-0 bg-gradient-to-bl from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <MessageSquareText className="h-7 w-7 transition-transform group-hover:scale-110 relative z-10" />
          <span className="sr-only">Contact Us</span>
        </Button>
      </div>

      {/* Contact form dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[650px] p-0 rounded-xl border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden">
          {/* Very subtle top border instead of the blue background */}
          <div className="border-t-2 border-blue-400/30 dark:border-blue-500/20"></div>
          
          <div className="p-8">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl font-bold text-center text-slate-800 dark:text-slate-100">Get in Touch</DialogTitle>
              <DialogDescription className="text-center text-base text-slate-600 dark:text-slate-300 mt-2">
                Fill out the form below and our team will get back to you shortly.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-blue-700 dark:text-blue-300 text-sm flex items-center">
                    <span className="bg-blue-100 dark:bg-blue-800 p-1 rounded-full mr-2">
                      <MessageSquareText className="h-4 w-4" />
                    </span>
                    We'll respond to your inquiry within 1 business day
                  </p>
                </div>
              
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 dark:text-slate-200">Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Doe" 
                          {...field} 
                          className="border-slate-200 dark:border-slate-700 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 dark:text-slate-200">Company</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your Company Name" 
                            {...field} 
                            className="border-slate-200 dark:border-slate-700 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
    
                  <FormField
                    control={form.control}
                    name="jobRole"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 dark:text-slate-200">Role/Job Function</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="CTO, Marketing Manager, etc." 
                            {...field} 
                            className="border-slate-200 dark:border-slate-700 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 dark:text-slate-200">Work Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="you@company.com" 
                            {...field} 
                            className="border-slate-200 dark:border-slate-700 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 dark:text-slate-200">Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="+1 (555) 000-0000" 
                            {...field} 
                            className="border-slate-200 dark:border-slate-700 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 dark:text-slate-200">Enterprise Services</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-slate-200 dark:border-slate-700 focus:ring-blue-500 focus:border-blue-500">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="border-slate-200 dark:border-slate-700">
                          <SelectItem value="technology">Technology Solutions</SelectItem>
                          <SelectItem value="marketing">Marketing Excellence</SelectItem>
                          <SelectItem value="consulting">Business Consulting</SelectItem>
                          <SelectItem value="training">Training & Development</SelectItem>
                          <SelectItem value="other">Other Services</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 dark:text-slate-200">How can we help you?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project or requirements..." 
                          className="min-h-[120px] border-slate-200 dark:border-slate-700 focus:ring-blue-500 focus:border-blue-500" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="border-t border-slate-200 dark:border-slate-700 pt-5 mt-6">
                  <DialogFooter>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 text-lg rounded-lg shadow-md transition-all hover:shadow-lg" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </div>
                      ) : (
                        "Submit Request"
                      )}
                    </Button>
                  </DialogFooter>
                </div>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}