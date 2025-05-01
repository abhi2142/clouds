
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Clock, FileText, DollarSign, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';

const features = [
  {
    icon: Users,
    title: "Employee Onboarding",
    description: "Streamline the process of welcoming new hires.",
  },
  {
    icon: Clock,
    title: "Leave & Attendance",
    description: "Track time off and attendance effortlessly.",
  },
  {
    icon: FileText,
    title: "Performance Reviews",
    description: "Manage employee evaluations and feedback.",
  },
  {
    icon: DollarSign,
    title: "Payroll Management",
    description: "Simplify payroll processing and compliance.",
  },
];

const testimonials = [
  {
    name: "Alice Chen",
    role: "HR Manager, Tech Innovate",
    quote: "HR Cloud Hub transformed our onboarding. What used to take days now takes hours!",
    avatar: "https://picsum.photos/id/1/100/100",
  },
  {
    name: "Bob Williams",
    role: "CEO, Creative Solutions",
    quote: "Managing leave requests is finally simple. Our team loves the transparency.",
    avatar: "https://picsum.photos/id/2/100/100",
  },
    {
    name: "Charlie Davis",
    role: "Employee, Global Corp",
    quote: "Accessing my payslips and checking attendance is super easy now. Great platform!",
    avatar: "https://picsum.photos/id/3/100/100",
  },
];

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="text-center pt-12 pb-8 md:pt-20 md:pb-12 bg-gradient-to-b from-secondary/50 to-background rounded-lg shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-primary">
            Modernize Your HR Operations
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            HR Cloud Hub simplifies employee management, from onboarding to payroll, empowering both HR teams and employees.
          </p>
          <Link href="/services">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-150 ease-in-out group">
              Explore Features
              <CheckCircle className="ml-2 h-5 w-5 transition-transform duration-150 ease-in-out group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow duration-150 ease-in-out">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <feature.icon className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section (Optional) */}
      <section className="bg-secondary py-16 md:py-20 rounded-lg">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-secondary-foreground">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card text-card-foreground flex flex-col">
                <CardContent className="pt-6 flex-grow flex flex-col">
                  <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center mt-auto">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
