import { Award, Clock, Heart, Users } from "lucide-react";

const stats = [
  { icon: Clock, value: "10+", label: "Jahre Erfahrung" },
  { icon: Users, value: "500+", label: "Schüler unterrichtet" },
  { icon: Award, value: "C2", label: "Zertifiziert" },
  { icon: Heart, value: "100%", label: "Leidenschaft" },
];

const AboutMeSection = () => {
  return (
    <section id="about-me" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-medium tracking-wider uppercase text-sm mb-4">
              Über Mich
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Deine Deutschlehrerin
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Hallo! Ich bin Maria, gebürtige Deutsche mit einer tiefen
              Leidenschaft für Sprachen und das Unterrichten. Nach meinem Studium
              der Germanistik und Linguistik habe ich über zehn Jahre Erfahrung
              im Deutschunterricht gesammelt – sowohl in Deutschland als auch
              international.
            </p>
            <p>
              Mein Unterrichtsstil ist persönlich, geduldig und praxisorientiert.
              Ich glaube fest daran, dass jeder Deutsch lernen kann – es braucht
              nur die richtige Methode und eine unterstützende Umgebung. In meinen
              Kursen lernst du nicht nur Grammatik und Vokabeln, sondern auch die
              deutsche Kultur und Alltagssprache kennen.
            </p>
            <p>
              Was mich antreibt? Die Freude in den Augen meiner Schüler, wenn sie
              zum ersten Mal ein Gespräch auf Deutsch führen können. Diesen Moment
              möchte ich auch mit dir erleben!
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-secondary/50"
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="font-heading text-2xl font-semibold text-foreground">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
