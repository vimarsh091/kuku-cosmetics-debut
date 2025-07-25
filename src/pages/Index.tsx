import ParticleBackground from '@/components/ParticleBackground';
import NewsletterForm from '@/components/NewsletterForm';
import SocialLinks from '@/components/SocialLinks';
import Logo from '@/components/Logo';
import heroBackground from '@/assets/hero-background.jpg';

const Index = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-deep-plum/80 via-primary/60 to-rose-gold/40"></div>
      </div>

      {/* Particle Background */}
      <ParticleBackground />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Logo */}
          <Logo />

          {/* Coming Soon Headline */}
          <div className="space-y-6">
            <h2 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-bold text-white fade-in-up">
              <span className="text-shimmer">Coming</span>
              <br />
              <span className="text-white">Soon</span>
            </h2>
            
            <p className="font-inter text-xl md:text-2xl text-white/90 font-light fade-in-up max-w-2xl mx-auto">
              Natural Beauty. Bold Confidence.
            </p>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl md:text-3xl text-white fade-in-left">
              Join Our Exclusive Launch List
            </h3>
            <NewsletterForm />
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h4 className="font-inter text-lg text-white/80 fade-in-right">
              Follow Our Journey
            </h4>
            <SocialLinks />
          </div>

        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-rose-gold rounded-full opacity-60 float"></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-soft-pink rounded-full opacity-50 float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-accent rounded-full opacity-40 float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-white rounded-full opacity-60 float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-plum/60 to-transparent pointer-events-none"></div>
    </main>
  );
};

export default Index;
