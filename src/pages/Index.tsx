import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ECard from "@/components/ElectricBorder";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, MapPin, Users, Sparkles, Rocket, Zap, ChevronRight, Star, Terminal, Code2, Cpu, Trophy, Award, Medal, TrendingUp } from "lucide-react";
import { TerminalText } from "@/components/TerminalText";
import { useState, useEffect } from "react";
import { Instagram, Mail, Heart } from "lucide-react";
import redshiftedLogo from "@/assets/redshifted-logo.png";
import xyzLogo from "@/assets/xyz-logo-white.png"; // Import the XYZ logo
import GlitchText from '@/components/GlitchText';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import PromoBanner from '@/components/promo';


const Index = () => {
  const [activeTag, setActiveTag] = useState(0);
  const tags = ["ONLINE", "READY", "INNOVATING", "BUILDING"];
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredSponsor, setHoveredSponsor] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTag((prev) => (prev + 1) % tags.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
              <PromoBanner />
      {/* Animated background stars */}
      <div className="fixed inset-0 star-field pointer-events-none" />
      
      {/* Shooting stars */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="shooting-star shooting-star-1" />
        <div className="shooting-star shooting-star-2" />
        <div className="shooting-star shooting-star-3" />
        <div className="shooting-star shooting-star-4" />
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/80" />
        <div className="container relative z-10 max-w-6xl">
          <div className="text-center space-y-8 animate-fade-in">
            {/* Main Title */}
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
                <GlitchText
                  speed={1.5}
                  enableShadows={true}
                  enableOnHover={false}
                  className='custom-class'
                >
                  Catalyst
                </GlitchText>
            </div>
            
            {/* Decorative line */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary" />
              <Star className="w-6 h-6 text-primary animate-pulse" />
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary" />
            </div>
            
            {/* Presented by */}
            <div className="text-muted-foreground text-lg space-y-2">
              <p className="text-sm uppercase tracking-widest">presented by</p>
              <img src={redshiftedLogo} alt="Redshifted Logo" className="mx-auto w-48 sm:w-64" />
            </div>
            
            {/* Info Cards */}
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <div className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-card/30 backdrop-blur-sm px-6 py-4 hover:border-primary/60 transition-all hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="relative flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-medium">November XX 2025</span>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-2xl border border-secondary/30 bg-card/30 backdrop-blur-sm px-6 py-4 hover:border-secondary/60 transition-all hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/10 to-secondary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="relative flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span className="font-medium">Ottawa, Canada</span>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-2xl border border-accent/30 bg-card/30 backdrop-blur-sm px-6 py-4 hover:border-accent/60 transition-all hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="relative flex items-center gap-3">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="font-medium">100+ hackers</span>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="pt-8">
              <Button 
                size="lg" 
                className="relative group text-lg px-10 py-7 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-2xl shadow-primary/50 hover:shadow-primary/70 transition-all hover:scale-105"
                asChild
              >
                <a href="https://forms.gle/b2n71kTgUs7ddHD98" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center gap-2">
                    Register Now
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 blur transition-opacity" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-8 h-8 text-primary rotate-90" />
        </div>
      </section>

      {/* What is a Hackathon */}
      <section className="relative py-32 px-4">
        <div className="container max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              <h2 className="text-5xl md:text-7xl font-black text-gradient">
                What is a hackathon?
              </h2>
              <Sparkles className="w-8 h-8 text-accent animate-pulse" />
            </div>
          </div>
          
          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ECard className="relative overflow-hidden p-10 md:p-12 bg-card/40 backdrop-blur-xl border-primary/30 shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all group h-full">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <p className="relative text-lg leading-relaxed text-foreground/90">
                A Hackathon is a social coding marathon where teenagers come together to build projects for a weekend and share them with the world. A hackathon is a space that helps give makers everything they need to start building–mentors, collaborators, inspiration, and a goal to work towards. Hackers will leave a hackathon with a project of their own, ready and excited to keep hacking once they get home.
              </p>
            </ECard>
            
          <div 
              className="relative rounded-2xl overflow-hidden group cursor-pointer h-full"
              style={{
                transform: `perspective(1000px) rotateX(${(mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 800) / 2) / 100}deg) rotateY(${(mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 800) / 2) / 100}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              {/* Animated cosmic glow */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/40 via-secondary/40 to-accent/40 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              
              {/* Orbiting particles */}
              <div className="absolute -inset-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping" />
                <div className="absolute top-1/4 right-0 w-2 h-2 bg-secondary rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-1/4 left-0 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
              </div>

              {/* Video Section */}
              <div className="relative h-full border-2 border-primary/30 rounded-3xl overflow-hidden shadow-2xl group-hover:border-primary/60 group-hover:shadow-primary/50 transition-all duration-500 bg-card/30 backdrop-blur-sm">
                {/* Corner glow effects */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-primary/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Scanline effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                     style={{ animation: 'scanline 2s linear infinite' }} />
                
                <div className="relative w-full h-full">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/eoovOvF7nKM"
                    title="Inside an Ottawa High School Hackathon: Lockdown 2025"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples of Hackathons */}
      <section className="relative py-32 px-4">
        <div className="container max-w-6xl">
          <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-black text-gradient mb-4">
          Examples of Hackathons
        </h2>
        <p className="text-muted-foreground text-lg">
          Join the legacy of innovation
        </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
        {[
          { 
            name: "Hack the North", 
            subtitle: "One of the biggest hackathons in Canada", 
            url: "https://hackthenorth.com/", 
            color: "primary",
            image: "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/562/719/datas/original.png"
          },
          { 
            name: "Scrapyard", 
            subtitle: "A recent hackathon in Ottawa", 
            url: "https://scrapyard.hackclub.com/", 
            color: "secondary",
            image: "https://scrapyard.hackclub.com/favicon.png"
          },
          { 
            name: "Counterspell", 
            subtitle: "Another recent Ottawa hackathon", 
            url: "https://counterspell.hackclub.com/", 
            color: "accent",
            image: "https://counterspell.hackclub.com/title.png"
          },
          { 
            name: "Lockdown", 
            subtitle: "Another recent Ottawa hackathon", 
            url: "https://lockdown.youthhacks.ca/", 
            color: "primary",
            image: "https://youthhacks.ca/herologo.png"
          }
        ].map((hackathon, index) => (
          <a 
            key={index}
            href={hackathon.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className={`absolute -inset-1 bg-gradient-to-r from-${hackathon.color}/50 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
            <ECard className="relative h-full bg-card/40 backdrop-blur-xl border-primary/20 group-hover:border-primary/60 transition-all group-hover:translate-y-[-4px] overflow-hidden">
          {/* Image or Icon */}
          <div className="relative h-40 flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 overflow-hidden">
            {hackathon.image ? (
              <img
            src={hackathon.image}
            alt={`${hackathon.name} logo`}
            className="max-h-24 max-w-40 object-contain mx-auto drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
            style={{ width: "auto", height: "96px" }}
              />
            ) : (
              <Rocket className={`w-16 h-16 text-${hackathon.color}/30 group-hover:rotate-12 group-hover:scale-110 transition-transform`} />
            )}
            <div className="absolute top-4 right-4">
              <ChevronRight className="w-6 h-6 text-foreground/50 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
          
          {/* Content */}
          <div className="p-8">
            <h3 className="text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
              {hackathon.name}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {hackathon.subtitle}
            </p>
          </div>
            </ECard>
          </a>
        ))}
          </div>
        </div>
      </section>

      {/* About Catalyst */}
      <section id="about" className="relative py-32 px-4">
        <div className="container max-w-6xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <Terminal className="w-8 h-8 text-primary" />
              <h2 className="text-5xl md:text-7xl font-black text-gradient">
                About Catalyst.exe
              </h2>
              <Code2 className="w-8 h-8 text-accent" />
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-3xl" />
            <Card className="relative bg-[#0a0a0a] backdrop-blur-xl border-primary/40 shadow-2xl overflow-hidden font-mono">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-6 py-4 bg-card/50 border-b border-primary/30">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="ml-4 text-sm text-muted-foreground">catalyst.exe</span>
              </div>
              
              {/* Terminal Content */}
              <div className="p-8 md:p-12 space-y-6 text-foreground/90">
                <div className="flex gap-2">
                  <span className="text-primary">$</span>
                  <div className="flex-1">
                    <TerminalText 
                      text="cat about_catalyst.txt"
                      speed={50}
                      className="text-secondary"
                    />
                  </div>
                </div>
                
                <div className="pl-4 space-y-4 text-sm md:text-base leading-relaxed">
                  <p>
                    <span className="text-accent">{'>'}</span> Catalyst is Ottawa&apos;s{" "}
                    <span className="text-primary font-bold">first high-school hardware hackathon</span>
                  </p>
                  <p>
                    <span className="text-accent">{'>'}</span> 24-hour innovation sprint
                  </p>
                  <p>
                    <span className="text-accent">{'>'}</span> Teams go from idea to working prototype
                  </p>
                  <p className="pt-4 border-t border-primary/20">
                    <span className="text-secondary">{'#'}</span> Unlike traditional software hackathons...
                  </p>
                  <p>
                    <span className="text-accent">{'>'}</span> Catalyst empowers students to design, build{" "}
                    <span className="text-secondary font-semibold">physical hardware</span>
                  </p>
                  <p>
                    <span className="text-accent">{'>'}</span> Circuits, sensors, mechanical systems
                  </p>
                  <p>
                    <span className="text-accent">{'>'}</span> Expert mentorship and hands-on support
                  </p>
                </div>
                
                <div className="flex gap-2 pt-6">
                  <span className="text-primary">$</span>
                  <div className="flex-1 flex items-center gap-4">
                    <span className="text-muted-foreground">System Status:</span>
                    <div className="flex gap-6">
                      <span className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-primary animate-pulse" />
                        <span className="text-primary">ACTIVE</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <Rocket className="w-4 h-4 text-secondary" />
                        <span className="text-secondary">READY</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-accent" />
                        <span className="text-accent">POWERED</span>
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <span className="text-primary">$</span>
                  <span className="text-muted-foreground animate-pulse">_</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section id="sponsors" className="relative py-32 px-4">
        <div className="container max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-gradient mb-4">
              Our Sponsors
            </h2>
            <p className="text-muted-foreground text-lg">
              Powering innovation together
            </p>
          </div>
          
          <div className="space-y-16">
            {/* Platinum Sponsors */}
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3">
                <Trophy className="w-8 h-8 text-primary" />
                <h3 className="text-3xl md:text-4xl font-bold text-gradient">Platinum Sponsors</h3>
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <div className={`flex flex-wrap justify-center transition-gap duration-300 ${hoveredCategory === 'platinum' ? 'gap-12 md:gap-16' : 'gap-8'}`}>
                {[
                  { name: "Your logo here", logo: null, url: null },
                  //{ name: "Your logo here", logo: null, url: null },
                ].map((sponsor, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => { setHoveredSponsor(`platinum-${i}`); setHoveredCategory('platinum'); }}
                    onMouseLeave={() => { setHoveredSponsor(null); setHoveredCategory(null); }}
                    className={`group relative rounded-3xl border-2 border-primary/40 bg-gradient-to-br from-primary/20 via-card/40 to-card/40 backdrop-blur-xl hover:border-primary/80 transition-all hover:scale-105 overflow-hidden ${hoveredSponsor === `platinum-${i}` ? 'scale-[1.04] shadow-2xl z-10' : ''}`}
                    style={{ flex: '0 1 560px', maxWidth: '56%' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <AspectRatio ratio={16 / 9}>
                      <div className="relative h-full flex items-center justify-center p-10">
                        {sponsor.logo ? (
                          sponsor.url ? (
                            <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                              <img src={sponsor.logo} alt={sponsor.name} className="max-h-40 mx-auto object-contain" />
                            </a>
                          ) : (
                            <img src={sponsor.logo} alt={sponsor.name} className="max-h-40 mx-auto object-contain" />
                          )
                        ) : (
                          <span className="text-center text-muted-foreground font-semibold text-2xl">
                            {sponsor.name}
                          </span>
                        )}
                      </div>
                    </AspectRatio>
                    <div className="absolute top-4 right-4">
                      <Trophy className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gold Sponsors */}
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3">
                <Award className="w-7 h-7 text-yellow-500" />
                <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Gold Sponsors</h3>
                <Award className="w-7 h-7 text-yellow-500" />
              </div>
              <div className={`flex flex-wrap justify-center transition-gap duration-300 ${hoveredCategory === 'gold' ? 'gap-6 md:gap-8' : 'gap-6'}`}>
                {[
                  { name: "YRI Fellowship", logo: "YRI-logo-white.webp", url: "https://yriscience.com/" },
                  { name: "Your logo here", logo: null, url: null },
                  //{ name: "Gold 3", logo: null, url: null },
                ].map((sponsor, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => { setHoveredSponsor(`gold-${i}`); setHoveredCategory('gold'); }}
                    onMouseLeave={() => { setHoveredSponsor(null); setHoveredCategory(null); }}
                    className={`group relative rounded-2xl border-2 border-yellow-500/40 bg-gradient-to-br from-yellow-500/20 via-card/40 to-card/40 backdrop-blur-xl hover:border-yellow-500/80 transition-all hover:scale-105 overflow-hidden ${hoveredSponsor === `gold-${i}` ? 'scale-[1.04] shadow-2xl z-10' : ''}`}
                    style={{ flex: '0 1 360px', maxWidth: '34%' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <AspectRatio ratio={16 / 9}>
                      <div className="relative h-full flex items-center justify-center p-6">
                        {sponsor.logo ? (
                          sponsor.url ? (
                            <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                              <img src={sponsor.logo} alt={sponsor.name} className="max-h-32 mx-auto object-contain" />
                            </a>
                          ) : (
                            <img src={sponsor.logo} alt={sponsor.name} className="max-h-32 mx-auto object-contain" />
                          )
                        ) : (
                          <span className="text-center text-muted-foreground font-medium text-xl">
                            {sponsor.name}
                          </span>
                        )}
                      </div>
                    </AspectRatio>
                    <div className="absolute top-3 right-3">
                      <Award className="w-5 h-5 text-yellow-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Silver Sponsors */}
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3">
                <Award className="w-7 h-7 text-gray-400" />
                <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">Silver Sponsors</h3>
                <Award className="w-7 h-7 text-gray-400" />
              </div>
              <div className={`flex flex-wrap justify-center transition-gap duration-300 ${hoveredCategory === 'silver' ? 'gap-6 md:gap-8' : 'gap-6'}`}>
                {[
                  { name: "Your logo here", logo: null, url: null },
                  { name: "Your logo here", logo: null, url: null },
                  //{ name: "Your logo here", logo: null, url: null },
                ].map((sponsor, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => { setHoveredSponsor(`silver-${i}`); setHoveredCategory('silver'); }}
                    onMouseLeave={() => { setHoveredSponsor(null); setHoveredCategory(null); }}
                    className={`group relative rounded-2xl border-2 border-gray-400/40 bg-gradient-to-br from-gray-400/20 via-card/40 to-card/40 backdrop-blur-xl hover:border-gray-400/80 transition-all hover:scale-105 overflow-hidden ${hoveredSponsor === `silver-${i}` ? 'scale-[1.04] shadow-2xl z-10' : ''}`}
                    style={{ flex: '0 1 300px', maxWidth: '30%' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <AspectRatio ratio={16 / 9}>
                      <div className="relative h-full flex items-center justify-center p-6">
                        {sponsor.logo ? (
                          sponsor.url ? (
                            <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                              <img src={sponsor.logo} alt={sponsor.name} className="max-h-32 mx-auto object-contain" />
                            </a>
                          ) : (
                            <img src={sponsor.logo} alt={sponsor.name} className="max-h-32 mx-auto object-contain" />
                          )
                        ) : (
                          <span className="text-center text-muted-foreground font-medium text-xl">
                            {sponsor.name}
                          </span>
                        )}
                      </div>
                    </AspectRatio>
                    <div className="absolute top-3 right-3">
                      <Award className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bronze Sponsors */}
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3">
                <TrendingUp className="w-6 h-6 text-primary/60" />
                <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Bronze Sponsors</h3>
                <TrendingUp className="w-6 h-6 text-primary/60" />
              </div>
              <div className={`flex flex-wrap justify-center transition-gap duration-300 ${hoveredCategory === 'bronze' ? 'gap-6 md:gap-8' : 'gap-4'}`}>
                {[
                  { name: "Your logo here", logo: null, url: null },
                  { name: "Your logo here", logo: null, url: null },
                  //{ name: "Your logo here", logo: null, url: null },
                  //{ name: "Your logo here", logo: null, url: null },
                  //{ name: "Your logo here", logo: null, url: null },
                ].map((sponsor, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => { setHoveredSponsor(`bronze-${i}`); setHoveredCategory('bronze'); }}
                    onMouseLeave={() => { setHoveredSponsor(null); setHoveredCategory(null); }}
                    className={`group relative rounded-xl border border-primary/20 bg-card/20 backdrop-blur-sm hover:border-primary/40 transition-all hover:scale-105 overflow-hidden ${hoveredSponsor === `bronze-${i}` ? 'scale-[1.04] shadow-md z-10' : ''}`}
                    style={{ flex: '0 1 200px', maxWidth: '20%' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <AspectRatio ratio={16 / 9}>
                      <div className="relative h-full flex items-center justify-center p-4">
                        {sponsor.logo ? (
                          sponsor.url ? (
                            <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                              <img src={sponsor.logo} alt={sponsor.name} className="max-h-20 mx-auto object-contain" />
                            </a>
                          ) : (
                            <img src={sponsor.logo} alt={sponsor.name} className="max-h-20 mx-auto object-contain" />
                          )
                        ) : (
                          <span className="text-center text-muted-foreground font-medium text-sm">
                            {sponsor.name}
                          </span>
                        )}
                      </div>
                    </AspectRatio>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Partners */}
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3">
                <Heart className="w-6 h-6 text-primary/60" />
                <h3 className="text-xl md:text-2xl font-bold text-muted-foreground">Community Partners</h3>
                <Heart className="w-6 h-6 text-primary/60" />
              </div>
              <div className={`flex flex-wrap justify-center transition-gap duration-300 ${hoveredCategory === 'community' ? 'gap-6 md:gap-8' : 'gap-4'}`}>
                {[
                  { name: ".xyz", logo: xyzLogo, url: "https://gen.xyz" },
                  { name: "Your logo here", logo: null, url: null },
                  { name: "Your logo here", logo: null, url: null },
                  //{ name: "Your logo here", logo: null, url: null },
                  //{ name: "Your logo here", logo: null, url: null },
                  //{ name: "Your logo here", logo: null, url: null },
                ].map((sponsor, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => { setHoveredSponsor(`community-${i}`); setHoveredCategory('community'); }}
                    onMouseLeave={() => { setHoveredSponsor(null); setHoveredCategory(null); }}
                    className={`group relative rounded-xl border border-primary/20 bg-card/20 backdrop-blur-sm hover:border-primary/40 transition-all hover:scale-105 overflow-hidden ${hoveredSponsor === `community-${i}` ? 'scale-[1.04] shadow-md z-10' : ''}`}
                    style={{ flex: '0 1 180px', maxWidth: '18%' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <AspectRatio ratio={16 / 9}>
                      <div className="relative h-full flex items-center justify-center p-3">
                        {sponsor.logo ? (
                          sponsor.url ? (
                            <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                              <img src={sponsor.logo} alt={sponsor.name} className="max-h-20 mx-auto object-contain" />
                            </a>
                          ) : (
                            <img src={sponsor.logo} alt={sponsor.name} className="max-h-20 mx-auto object-contain" />
                          )
                        ) : (
                          <span className="text-center text-muted-foreground font-medium text-xs">
                            {sponsor.name}
                          </span>
                        )}
                      </div>
                    </AspectRatio>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <ECard className="p-8 bg-card/40 backdrop-blur-xl border-primary/30 text-center mt-16">
            <p className="text-lg text-muted-foreground">
              Interested in sponsoring? Contact{" "}
              <a 
                href="mailto:andy.han@redshifted.ca" 
                className="text-primary hover:text-primary/80 font-semibold underline decoration-primary/30 hover:decoration-primary/60 transition-colors"
              >
                andy.han@redshifted.ca
              </a>
            </p>
          </ECard>
        </div>
      </section>

      {/* FAQ */}
      <section id = "faq" className="relative py-32 px-4 pb-40">
        <div className="container max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-gradient mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Got questions? We've got answers.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "What is Catalyst?",
                a: "Catalyst is a high-energy hardware hackathon where students come together to build, learn, and innovate on cutting-edge tech challenges.",
                icon: Sparkles
              },
              {
                q: "Who can participate?",
                a: "Catalyst is open to high school students of all skill levels. Whether you're a beginner or a seasoned hacker, you're welcome!",
                icon: Users
              },
              {
                q: "Is there a fee to participate?",
                a: "Our price is TBD, depending on the donations from our generous sponsors, but it will be around $50-$100.",
                icon: Trophy
              },
              {
                q: "What should I bring?",
                a: "Just bring your laptop, charger, any necessary personal items, and lots of curiosity. We provide hardware kits and tools!",
                icon: Rocket
              },
              {
                q: "How do I register?",
                a: "You can sign up through our official website. Registration opens soon—stay tuned!",
                icon: Star
              }
            ].map((faq, i) => {
              const IconComponent = faq.icon;
              return (
                <AccordionItem 
                  key={i}
                  value={`item-${i}`} 
                  className="group border border-primary/20 rounded-2xl px-6 bg-card/30 backdrop-blur-sm hover:border-primary/40 transition-all data-[state=open]:border-primary/60 data-[state=open]:shadow-xl data-[state=open]:shadow-primary/10 data-[state=open]:scale-[1.02]"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary py-6 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <IconComponent className="w-5 h-5 text-primary group-data-[state=open]:animate-pulse" />
                      {faq.q}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 pl-8">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={redshiftedLogo} alt="Redshifted Logo" className="w-64 mb-2" />
            <p className="text-background/80">
              Empowering Ottawa's youth through hands-on STEM education and
              innovation.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://forms.gle/b2n71kTgUs7ddHD98" target="_blank" rel="noopener noreferrer">
                  Register
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-primary transition-colors">
                  About Catalyst
                </a>
              </li>
              <li>
                <a href="#sponsors" className="text-background/80 hover:text-primary transition-colors">
                  Sponsors
                </a>
              </li>
              <li>
                <a href="#faq" className="text-background/80 hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/redshifted.ottawa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-3 rounded-full hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:programs@redshifted.ca"
                className="bg-background/10 p-3 rounded-full hover:bg-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-primary" /> by the Redshifted Team
          </p>
          <p className="mt-2">© {new Date().getFullYear()} Redshifted. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Index;
