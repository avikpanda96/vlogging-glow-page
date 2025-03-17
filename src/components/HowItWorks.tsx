
import { Check, Video, Upload, Coins } from "lucide-react";

const steps = [
  {
    icon: <Video className="h-6 w-6" />,
    title: "Create Your Channel",
    description: "Sign up and customize your vlogging channel with your personal branding.",
    color: "text-vlog-purple",
    bgColor: "bg-vlog-light-purple",
  },
  {
    icon: <Upload className="h-6 w-6" />,
    title: "Upload Your Videos",
    description: "Share your stories through our easy-to-use video upload and editing tools.",
    color: "text-vlog-pink",
    bgColor: "bg-pink-50",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Grow & Monetize",
    description: "Build your audience and earn through memberships, tips, and partnerships.",
    color: "text-vlog-orange",
    bgColor: "bg-orange-50",
  },
];

const features = [
  "4K Video Quality",
  "Creator Analytics",
  "Live Streaming",
  "Mobile Apps",
  "Community Tools",
  "Multiple Monetization Options",
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">How VlogGlow Works</h2>
          <p className="text-muted-foreground">
            Join thousands of creators who are sharing their stories and building communities through video.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm border animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`${step.bgColor} ${step.color} p-3 rounded-full mb-5`}>
                {step.icon}
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="font-display text-2xl font-bold mb-6">Everything You Need to Succeed</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="rounded-full bg-primary/10 p-1 mr-3">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-60 md:h-auto bg-gradient-to-br from-vlog-purple to-vlog-pink flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
              <div className="relative z-10 p-8 text-center">
                <h3 className="text-white font-display text-2xl font-bold mb-4">Start Creating Today</h3>
                <p className="text-white/80 mb-4 max-w-xs mx-auto">Join our community of creators and share your unique perspective with the world.</p>
                <button className="bg-white text-primary font-medium py-2 px-6 rounded-full hover:bg-white/90 transition-colors">
                  Sign Up Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
