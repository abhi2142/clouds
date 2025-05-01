
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, FileText, DollarSign, CalendarCheck, BarChart3 } from "lucide-react";
import Image from 'next/image';

const services = [
  {
    icon: Users,
    title: "Employee Tracking & Database",
    description: "Maintain comprehensive employee records, manage roles, permissions, and organizational structure.",
    imgSrc: "https://picsum.photos/seed/employeetrack/600/400",
  },
  {
    icon: Clock,
    title: "Attendance Management",
    description: "Monitor employee work hours, track logins/logouts, and manage attendance policies seamlessly.",
    imgSrc: "https://picsum.photos/seed/attendance/600/400",
  },
  {
    icon: DollarSign,
    title: "Payroll Insights & Processing",
    description: "Generate accurate payslips, manage deductions, and gain insights into payroll trends.",
    imgSrc: "https://picsum.photos/seed/payroll/600/400",
  },
  {
    icon: CalendarCheck,
    title: "Leave Approvals & Tracking",
    description: "Streamline leave requests, approvals, and balance tracking for all employees.",
    imgSrc: "https://picsum.photos/seed/leave/600/400",
  },
  {
    icon: FileText,
    title: "Performance Management",
    description: "Conduct performance reviews, set goals, and track employee development effectively.",
    imgSrc: "https://picsum.photos/seed/performance/600/400",
  },
  {
    icon: BarChart3,
    title: "HR Analytics & Reporting",
    description: "Access key HR metrics, generate reports, and make data-driven decisions.",
    imgSrc: "https://picsum.photos/seed/analytics/600/400",
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-primary">
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover how HR Cloud Hub can streamline your HR processes and empower your workforce.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-150 ease-in-out">
             <div className="relative h-48 w-full">
               <Image
                src={service.imgSrc}
                alt={`${service.title} illustration`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
            <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <service.icon className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div className="flex-grow">
                  <CardTitle className="text-xl mb-1">{service.title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
