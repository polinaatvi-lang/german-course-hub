import heroImage from "@/assets/hero-teacher.jpg";
import { User, BookOpen, Mail } from "lucide-react";

const navWidgets = [
  { id: "about-me", label: "Über Mich", icon: User },
  { id: "about-course", label: "Der Kurs", icon: BookOpen },
  { id: "contact", label: "Mitmachen", icon: Mail },
];

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-hero-gradient relative">
      <div className="container mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <p className="text-accent font-medium tracking-wider uppercase text-sm">
                Deutsch lernen in Person
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                Entdecke die Schönheit der{" "}
                <span className="text-primary">deutschen Sprache</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed">
                Persönlicher Unterricht in kleinen Gruppen. Von Anfänger bis
                Fortgeschritten – gemeinsam erreichen wir deine Sprachziele.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-soft hover:shadow-card"
              >
                Kurs buchen
              </button>
              <button
                onClick={() => scrollToSection("about-course")}
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Mehr erfahren
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={heroImage}
                alt="German language teacher in classroom"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-accent/30 rounded-2xl -z-10" />
          </div>
        </div>

        {/* Navigation Widgets */}
        <div className="mt-16 lg:mt-24">
          <div className="grid md:grid-cols-3 gap-6">
            {navWidgets.map((widget, index) => (
              <button
                key={widget.id}
                onClick={() => scrollToSection(widget.id)}
                className="group bg-card p-6 rounded-xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border/50"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <widget.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="font-heading text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                    {widget.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
