import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !question.trim()) {
      toast({
        title: "Bitte fülle alle Felder aus",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank für deine Anfrage. Ich melde mich bald bei dir!",
    });
    
    setEmail("");
    setQuestion("");
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4">
              Mitmachen
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Hast du Fragen oder möchtest du dich für einen Kurs anmelden? 
              Schreib mir einfach – ich freue mich auf deine Nachricht!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-primary-foreground font-medium mb-2"
              >
                Deine E-Mail-Adresse
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="deine@email.de"
                className="w-full px-4 py-4 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                required
              />
            </div>

            <div>
              <label
                htmlFor="question"
                className="block text-primary-foreground font-medium mb-2"
              >
                Deine Frage oder Nachricht
              </label>
              <textarea
                id="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Erzähl mir von deinen Lernzielen oder stelle mir eine Frage..."
                rows={5}
                className="w-full px-4 py-4 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent text-accent-foreground py-4 rounded-lg font-medium hover:bg-accent/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span>Wird gesendet...</span>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Nachricht senden</span>
                </>
              )}
            </button>
          </form>

          <p className="text-center text-primary-foreground/60 text-sm mt-8">
            Ich antworte in der Regel innerhalb von 24 Stunden.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
