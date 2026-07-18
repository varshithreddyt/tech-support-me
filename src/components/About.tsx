import { GraduationCap, Award, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      institution: "Pursuing Master of Business Administration (MBA)",
      degree: "Business Administration, Osmania University",
      location: "Hyderabad, India",
    },
    {
      institution: "Jawaharlal Nehru Technological University, Hyderabad",
      degree: "Bachelor of Technology - Computer Science Engineering",
      location: "Hyderabad, India",
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "Intermediate",
      location: "Hyderabad, India",
    },
    {
      institution: "TS Model School",
      degree: "SSC",
      location: "Kosgi",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Associate Software Engineer with a strong drive for innovation, problem-solving, 
            and troubleshooting. I excel in both collaborative team settings and as an 
            independent contributor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Objective</h3>
              <p className="text-muted-foreground">
                Seeking software engineering roles to build scalable solutions and contribute to impactful products
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
              <p className="text-muted-foreground">
                B.Tech Graduate pursuing MBA with a strong academic foundation
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Achievements</h3>
              <p className="text-muted-foreground">
                DevSecOps certified by Kyndryl and NIELIT with hands-on AWS labs
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold">{edu.institution}</h4>
                      <p className="text-muted-foreground">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
