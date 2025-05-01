
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Target, Eye, Users, Sparkles } from "lucide-react";
import Image from 'next/image';

const teamMembers = [
  { name: "Jane Doe", role: "Founder & CEO", avatar: "https://picsum.photos/id/11/100/100" },
  { name: "John Smith", role: "Lead Developer", avatar: "https://picsum.photos/id/12/100/100" },
  { name: "Emily White", role: "Head of Product", avatar: "https://picsum.photos/id/13/100/100" },
  { name: "Michael Brown", role: "Marketing Lead", avatar: "https://picsum.photos/id/14/100/100" },
];

export default function AboutPage() {
  return (
    <div className="space-y-16 md:space-y-20">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-primary">
          About HR Cloud Hub
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Learn about our mission, vision, and the passionate team dedicated to revolutionizing HR management.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <Card className="hover:shadow-md transition-shadow duration-150 ease-in-out">
          <CardHeader className="flex flex-row items-center gap-4">
            <Target className="h-8 w-8 text-primary" />
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To empower organizations with intuitive and efficient HR tools, simplifying complex processes and fostering a better work environment for everyone.
            </p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-md transition-shadow duration-150 ease-in-out">
          <CardHeader className="flex flex-row items-center gap-4">
            <Eye className="h-8 w-8 text-primary" />
            <CardTitle className="text-2xl">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To be the leading cloud-based HR platform, recognized for innovation, user-friendliness, and commitment to customer success.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Why HR Cloud */}
       <section className="bg-secondary p-8 md:p-12 rounded-lg">
         <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 order-2 md:order-1">
                 <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="h-8 w-8 text-accent" />
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground">Why HR Cloud Hub?</h2>
                 </div>
                <p className="text-muted-foreground mb-4">
                    We believe that managing human resources shouldn't be complicated. Traditional HR systems are often clunky, outdated, and frustrating for both HR admins and employees.
                </p>
                <p className="text-muted-foreground">
                    HR Cloud Hub was born out of the need for a modern, streamlined solution that prioritizes user experience, efficiency, and data security. We aim to free up HR professionals from administrative burdens so they can focus on strategic initiatives and employee well-being.
                </p>
            </div>
            <div className="flex-1 order-1 md:order-2 relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-md">
                 <Image
                    src="https://picsum.photos/seed/whyhr/800/600"
                    alt="Team working together"
                    layout="fill"
                    objectFit="cover"
                 />
            </div>
         </div>
       </section>


      {/* Team Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <Avatar className="h-24 w-24 md:h-32 md:w-32 mx-auto mb-3 transition-transform duration-150 ease-in-out group-hover:scale-105">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

       {/* Brand Values/Goals (Optional) */}
      <section className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <span className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm">Efficiency</span>
          <span className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm">Transparency</span>
          <span className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm">User-Centricity</span>
          <span className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm">Innovation</span>
          <span className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm">Security</span>
        </div>
      </section>

    </div>
  );
}

