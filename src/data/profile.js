import profilePhoto from '/profile.jpeg';

const profile = {
  name: 'Lesly',
  title: 'Full Stack Developer',
  tagline: 'Building seamless web experiences with React and Node.js',
  photo: profilePhoto,
  about: `I am a passionate Full Stack Developer with a strong background in building dynamic and responsive web applications.
   My expertise lies in React, Node.js, and modern web technologies. I thrive on creating seamless user experiences and writing clean, maintainable code. When I'm not coding, I enjoy exploring new technologies and contributing to open-source projects.`,
  location: 'Accra, Ghana',
  email: 'leslyambeambe@gmail.com',
  phone: '+233 539411494',

  skills: [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'python', level: 75 },
    { name: 'mysql', level: 70 },
    { name: 'HTML', level: 95 },
  ],
  projects: [
    {
      title: 'KontaBook',
      description: 'An offline-first mobile bookkeeping and inventory management solution built for micro-merchants and informal retail businesses, featuring reliable local-first synchronization and real-time ledger updates.',
      tech: ['Flutter', 'Dart', 'Hive', 'Supabase'],
      link: 'https://github.com/your-username/kontabook'
    },
    {
      title: 'Evano Streams',
      description: 'A responsive video streaming progressive web application engineered for smooth media delivery, content management, and low-latency playback across mobile and desktop environments.',
      tech: ['Flutter', 'React', 'Supabase', 'Cloudflare R2', 'Vercel'],
      link: 'https://github.com/your-username/evano-streams'
    },
    {
      title: 'VitalSync',
      description: 'A health and safety tracking mobile platform featuring secure offline logging, camera-based data verification, and automated emergency notification workflows.',
      tech: ['Flutter', 'Dart', 'Hive'],
      link: 'https://github.com/your-username/vitalsync'
    },
    {
      title: 'BlueCrest Hackathon Portal & Live Dashboard',
      description: 'An event management and registration portal featuring live team verification, developer-tool aesthetics, dynamic submission tracking, and real-time administrative metrics.',
      tech: ['React', 'Firebase Hosting', 'Cloud Firestore', 'Node.js'],
      link: 'https://github.com/your-username/bluecrest-hackathon-portal'
    },
    {
      title: 'HomeLab & Edge Media Infrastructure',
      description: 'A dedicated self-hosted server environment engineered for containerized application orchestration, media streaming, private mesh networking, and automated storage pipelines.',
      tech: ['Linux (Pop!_OS/Ubuntu)', 'Docker', 'Jellyfin', 'Tailscale', 'WireGuard'],
      link: 'https://github.com/your-username/homelab-infrastructure'
    }
  ],

  socials: [
    { label: 'GitHub', url: 'https://github.com/Monero09' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/ambe-lesly-917210247' },
  ]
};

export default profile;