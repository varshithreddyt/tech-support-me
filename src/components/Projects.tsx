import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, PenTool } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Twitter Sentiment Analysis Using Machine Learning",
      description: "Implemented sentiment analysis on tweets using machine learning to analyze customer perspectives. The project includes data collection, text pre-processing, sentiment detection and classification, along with model training and testing.",
      icon: Brain,
      tags: ["Machine Learning", "NLP", "Python", "Data Analysis"],
    },
    {
      title: "Signature Verification Using CNN and HOG",
      description: "Developed a hybrid approach combining CNN and HOG techniques for feature extraction from signature images. Achieved 99.99% learning accuracy through multi-classification approach with high predictive capacity.",
      icon: PenTool,
      tags: ["Deep Learning", "CNN", "Computer Vision", "Feature Extraction"],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
          <p className="text-lg text-muted-foreground">
            Innovative solutions combining machine learning and computer vision
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
