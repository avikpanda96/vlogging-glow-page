
import { Button } from "@/components/ui/button";
import { 
  Camera, 
  TrendingUp, 
  Zap, 
  Music, 
  Utensils, 
  Plane, 
  Palette, 
  Laugh, 
  BookOpen, 
  ArrowRight 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import VideoCard from "@/components/VideoCard";
import CategoryCard from "@/components/CategoryCard";
import CreatorCard from "@/components/CreatorCard";
import TestimonialCard from "@/components/TestimonialCard";
import HowItWorks from "@/components/HowItWorks";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  const featuredVideos = [
    {
      id: "1",
      title: "Day in the Life of a Digital Nomad in Bali",
      creator: "Travel With Emma",
      creatorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      duration: "12:45",
      views: "245K",
      date: "2 weeks ago"
    },
    {
      id: "2",
      title: "Summer Makeup Look Tutorial | Natural Glow",
      creator: "Beauty Insider",
      creatorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      duration: "18:22",
      views: "1.2M",
      date: "3 days ago"
    },
    {
      id: "3",
      title: "Building a Modern Home Office | DIY Desk Setup",
      creator: "Home & Design",
      creatorAvatar: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      duration: "22:15",
      views: "386K",
      date: "1 month ago"
    },
    {
      id: "4",
      title: "How I Learned to Code in 6 Months | Journey to Developer",
      creator: "Tech & Code",
      creatorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      duration: "15:36",
      views: "542K",
      date: "2 months ago"
    },
  ];

  const categories = [
    { title: "Travel", icon: <Plane />, bgColor: "bg-vlog-purple" },
    { title: "Technology", icon: <Zap />, bgColor: "bg-vlog-blue" },
    { title: "Food", icon: <Utensils />, bgColor: "bg-vlog-orange" },
    { title: "Music", icon: <Music />, bgColor: "bg-vlog-pink" },
    { title: "Art", icon: <Palette />, bgColor: "bg-green-500" },
    { title: "Comedy", icon: <Laugh />, bgColor: "bg-yellow-500" },
    { title: "Education", icon: <BookOpen />, bgColor: "bg-indigo-500" },
    { title: "Trending", icon: <TrendingUp />, bgColor: "bg-red-500" },
  ];

  const popularCreators = [
    {
      name: "Emma Wilson",
      username: "travelwithemma",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      followers: "1.2M",
      videos: 87,
      category: "Travel"
    },
    {
      name: "Alex Chen",
      username: "alexcreates",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      followers: "845K",
      videos: 62,
      category: "Technology"
    },
    {
      name: "Sophia Lee",
      username: "sophiastyle",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
      followers: "2.3M",
      videos: 124,
      category: "Fashion"
    },
  ];

  const testimonials = [
    {
      quote: "VlogGlow has transformed how I share my travel experiences. The engagement from viewers is incredible!",
      author: "Jessica Miller",
      role: "Travel Vlogger",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "As a cooking channel, the video quality and audience analytics have helped me grow my channel exponentially.",
      author: "Mark Johnson",
      role: "Culinary Creator",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "The monetization options on VlogGlow have allowed me to turn my passion for teaching into a full-time career.",
      author: "Alicia Zhang",
      role: "Educational Content Creator",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-hero-gradient">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Share Your Story Through Video
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0">
                Create, share, and grow with VlogGlow - the platform built for passionate video creators and their audiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="font-medium">
                  Start Creating
                </Button>
                <Button size="lg" variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                  Explore Videos
                </Button>
              </div>
            </div>
            
            <div className="relative lg:h-[500px] hidden lg:block">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 backdrop-blur-sm rounded-2xl p-3 shadow-lg animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Vlogger with camera" 
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-sm text-white p-3 rounded-lg">
                  <div className="flex items-center">
                    <Camera className="h-5 w-5 mr-2" />
                    <span className="font-medium">Recording: Travel Diary</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-72 h-64 bg-white/10 backdrop-blur-sm rounded-2xl p-3 shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                  alt="Laptop with video editing" 
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-sm text-white p-3 rounded-lg">
                  <div className="flex items-center">
                    <span className="font-medium">Editing in progress...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Featured Videos</h2>
              <p className="text-muted-foreground">Discover popular content from our community of creators</p>
            </div>
            <a href="#" className="group hidden md:flex items-center text-primary font-medium mt-4">
              View all videos
              <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredVideos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Button variant="outline" className="gap-1">
              View all videos
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
            <p className="text-muted-foreground">
              Explore content in your favorite categories or discover something new
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Creators */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Popular Creators</h2>
              <p className="text-muted-foreground">Follow your favorite vloggers and never miss their content</p>
            </div>
            <a href="#" className="group hidden md:flex items-center text-primary font-medium mt-4">
              Discover more creators
              <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {popularCreators.map((creator, index) => (
              <CreatorCard key={index} {...creator} />
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Button variant="outline" className="gap-1">
              Discover more creators
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Creator Success Stories</h2>
            <p className="text-muted-foreground">
              See what creators are saying about their experience on VlogGlow
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-vlog-purple to-vlog-pink text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Vlogging Journey?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are sharing their stories and building communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="font-medium text-primary">
              Create Your Channel
            </Button>
            <Button size="lg" variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
