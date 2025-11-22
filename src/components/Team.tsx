import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Award, Trophy, Star, Medal } from "lucide-react";
import { useLanguage } from "../utils/LanguageContext";
import gediminasImage from 'figma:asset/aedf0eb8614d79a3911db7236fa515cd3e0032fb.png';

interface BarberProfile {
  name: string;
  specialty: string;
  level: string;
  image: string;
  story: string;
  achievements: string[];
  freshaLink: string;
}

export function Team() {
  const { t } = useLanguage();
  const [selectedBarber, setSelectedBarber] = useState<BarberProfile | null>(null);

  const teamImages = [
    gediminasImage,
    "https://images.unsplash.com/photo-1759142016096-a9d1a5ebcc09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYXJiZXIlMjB0ZWFtfGVufDF8fHx8MTc2MzM5MzQ0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1759142449398-89357aa1bb36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwZXZlbnR8ZW58MXx8fHwxNzYzMzkzNDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1599447068894-089fabc9876c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMGdyb29taW5nfGVufDF8fHx8MTc2MzM2OTY3NXww&ixlib=rb-4.1.0&q=80&w=1080"
  ];

  const teamMembers: BarberProfile[] = t.team.members.map((member, index) => ({
    name: member.name,
    specialty: member.specialty,
    level: member.level,
    image: teamImages[index],
    story: member.story,
    achievements: member.achievements,
    freshaLink: "https://www.fresha.com"
  }));

  return (
    <>
      <section id="team" className="py-[13px] bg-black px-[0px]">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-accent tracking-widest uppercase mb-4 block text-[32px]">
              {t.team.label}
            </span>
            <h2 className="text-4xl md:text-5xl mb-6 text-white">
              {t.team.title}
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {t.team.subtitle}
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="overflow-hidden border-0 shadow-lg group cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => setSelectedBarber(member)}
              >
                <div className="aspect-[3/4] relative overflow-hidden bg-primary/20">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl mb-2">{member.name}</h3>
                    <p className="text-sm text-white/80 mb-4">{member.specialty}</p>
                    
                    <Button
                      size="sm"
                      className="bg-accent hover:bg-accent/90 text-black w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedBarber(member);
                      }}
                    >
                      {t.team.viewProfile}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Barber Profile Modal */}
      <Dialog open={!!selectedBarber} onOpenChange={() => setSelectedBarber(null)}>
        <DialogContent className="max-w-2xl w-full max-h-[95vh] md:max-h-[90vh] bg-[#0a0a0a] border-primary/50 p-0 shadow-2xl overflow-y-auto">
          {selectedBarber && (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>{selectedBarber.name} - {selectedBarber.specialty}</DialogTitle>
                <DialogDescription>
                  {selectedBarber.story}
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col">
              {/* Image Section */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <ImageWithFallback
                  src={selectedBarber.image}
                  alt={selectedBarber.name}
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h2 className="text-3xl mb-2">{selectedBarber.name}</h2>
                  <p className="text-accent">{selectedBarber.level}</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8">
                {/* Story */}
                <div className="mb-8">
                  <p className="text-white/80 leading-relaxed">
                    {selectedBarber.story}
                  </p>
                </div>

                {/* Achievements */}
                <div className="mb-8">
                  <h3 className="text-xl text-accent mb-4">Achievements</h3>
                  <div className="space-y-3">
                    {selectedBarber.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="bg-accent/20 p-2 rounded-sm mt-0.5">
                          {[Trophy, Award, Star, Medal][index % 4] && (
                            <Star className="w-4 h-4 text-accent" />
                          )}
                        </div>
                        <p className="text-white/70 flex-1">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-black w-full"
                  asChild
                >
                  <a
                    href={selectedBarber.freshaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.team.bookWith} {selectedBarber.name} {t.team.onFresha}
                  </a>
                </Button>
              </div>
            </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}