import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Brain } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Cloud Cost Optimization on AWS",
      description: "Developed a Lambda function that fetches all EBS snapshots owned by the same account and retrieves a list of active EC2 instances. For each snapshot, it checks if the associated volume is not linked to any active instance. If a stale snapshot is found, it deletes it to optimize storage costs effectively.",
      icon: Cloud,
      tags: ["AWS", "Lambda", "EBS", "EC2", "Cost Optimization", "DevOps"],
    },
    {
      title: "Twitter Sentiment Analysis Using Machine Learning",
      description: "Implemented Twitter sentiment analysis under text and opinion mining. The project analyzes tweet sentiments, feeds data to a machine learning model for training, checks accuracy, and enables future predictions. Includes data collection, text preprocessing, sentiment detection, classification, training, and testing.",
      icon: Brain,
      tags: ["Python", "Machine Learning", "NLP", "Sentiment Analysis"],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
          <p className="text-lg text-muted-foreground">
            Hands-on experience in cloud automation and machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
