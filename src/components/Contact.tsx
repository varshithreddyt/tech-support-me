import { Mail, Phone, Linkedin, BookOpen, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8897102140",
      href: "tel:+918897102140",
    },
    {
      icon: Mail,
      label: "Email",
      value: "varshithreddy1516@gmail.com",
      href: "mailto:varshithreddy1516@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/sai-varshith-reddy-545774257",
    },
  ];

  const hobbies = ["Reading News", "Playing Chess", "Watching Cricket"];

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Let's connect and discuss opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.label}
                className="border-0 shadow-lg hover:shadow-xl transition-all group"
              >
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <Button
                      variant="link"
                      className="h-auto p-0 text-base font-medium"
                      asChild
                    >
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.value}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-0 shadow-lg">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold flex items-center gap-2 justify-center">
                  <BookOpen className="h-5 w-5" />
                  Hobbies & Interests
                </h3>
                <div className="flex flex-wrap gap-3 justify-center pt-4">
                  {hobbies.map((hobby) => (
                    <span
                      key={hobby}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
