import courseImage from "@/assets/course-classroom.jpg";
import { Check } from "lucide-react";

const features = [
  "Kleine Gruppen mit maximal 8 Teilnehmern",
  "Alle Niveaustufen: A1 bis C2",
  "Flexible Kurszeiten – morgens, abends oder am Wochenende",
  "Praxisnaher Unterricht mit Alltagssituationen",
  "Kulturelle Einblicke und Landeskunde",
  "Regelmäßige Übungen und Feedback",
];

const AboutCourseSection = () => {
  return (
    <section id="about-course" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <p className="text-accent font-medium tracking-wider uppercase text-sm">
                Der Kurs
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
                Persönlicher Deutschunterricht
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Meine Offline-Kurse finden in einer angenehmen, motivierenden
                Atmosphäre statt. Hier kannst du dich voll auf das Lernen
                konzentrieren – ohne Ablenkungen durch Bildschirme.
              </p>
            </div>

            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-medium hover:bg-accent/90 transition-all duration-300 shadow-soft hover:shadow-card"
              >
                Jetzt anmelden
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={courseImage}
                alt="German language classroom with engaged students"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-primary/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCourseSection;
