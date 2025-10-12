import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const modules = [
    "Salesforce Fundamentals",
    "Organizational Setup",
    "Relationship & Process Automation",
    "Types of Flows & Security",
    "Testing & Debugging",
    "VS Code Setup",
  ];

  const certificates = ["Salesforce", "Data Analytics Essentials"];

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Experience & Certifications</h2>
          <p className="text-lg text-muted-foreground">
            Professional development and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                Salesforce Internship
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Completed comprehensive Salesforce Trailhead modules over 8 weeks
              </p>
              <div className="space-y-2">
                <p className="font-medium text-sm">Completed Modules:</p>
                <div className="flex flex-wrap gap-2">
                  {modules.map((module) => (
                    <Badge
                      key={module}
                      variant="outline"
                      className="text-xs border-primary/20"
                    >
                      {module}
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
                  <Award className="h-5 w-5 text-primary" />
                </div>
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Professional certifications demonstrating expertise
              </p>
              <div className="space-y-3">
                {certificates.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
