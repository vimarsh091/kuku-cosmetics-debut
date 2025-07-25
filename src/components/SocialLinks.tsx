import { Instagram, Music, Facebook } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: '#',
      color: 'hover:text-rose-gold',
    },
    {
      name: 'TikTok',
      icon: Music,
      href: '#',
      color: 'hover:text-soft-pink',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: '#',
      color: 'hover:text-accent',
    },
  ];

  return (
    <div className="flex justify-center space-x-6 fade-in-right">
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            className={`p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all duration-300 hover:scale-110 hover:bg-white/20 ${social.color} shadow-soft hover:shadow-glow`}
            aria-label={social.name}
          >
            <IconComponent size={24} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;