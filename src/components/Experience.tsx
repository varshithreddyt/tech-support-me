import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const courseTopics = [
    "Introduction to DevOps",
    "CI/CD Pipelines",
    "Infrastructure Pipeline",
    "Application Pipeline",
    "AWS Infrastructure Labs",
    "DevSecOps Practices",
  ];

  const internshipHighlights = [
    "Salesforce CRM data management",
    "Customer record updates",
    "Data accuracy maintenance",
    "Communication & problem-solving",
  ];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Experience & Training</h2>
          <p className="text-lg text-muted-foreground">
            Internships, certifications, and specialized training
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                SmartBridge Internship
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Salesforce Developer Virtual Internship focused on CRM management, customer data handling, and sales/support workflows.
              </p>
              <div className="space-y-2">
                <p className="font-medium text-sm">Key Learnings:</p>
                <div className="flex flex-wrap gap-2">
                  {internshipHighlights.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="text-xs border-primary/20"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                DevSecOps Training
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                DevSecOps Course Training by Kyndryl and NIELIT with hands-on labs on AWS infrastructure and CI/CD pipelines.
              </p>
              <div className="space-y-2">
                <p className="font-medium text-sm">Covered Topics:</p>
                <div className="flex flex-wrap gap-2">
                  {courseTopics.map((topic) => (
                    <Badge
                      key={topic}
                      variant="outline"
                      className="text-xs border-primary/20"
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
