
import { Button } from "@/components/ui/button";
import { Play, Clock, Heart } from "lucide-react";

interface VideoCardProps {
  id: string;
  title: string;
  creator: string;
  creatorAvatar: string;
  thumbnail: string;
  duration: string;
  views: string;
  date: string;
}

const VideoCard = ({
  id,
  title,
  creator,
  creatorAvatar,
  thumbnail,
  duration,
  views,
  date,
}: VideoCardProps) => {
  return (
    <div className="video-card group">
      <div className="aspect-video relative overflow-hidden rounded-lg">
        <img 
          src={thumbnail} 
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
          {duration}
        </div>
        <div className="video-card-overlay">
          <Button size="sm" variant="secondary" className="gap-1.5 rounded-full">
            <Play className="h-3.5 w-3.5" fill="currentColor" />
            Watch Now
          </Button>
        </div>
      </div>
      <div className="pt-3 pb-5">
        <div className="flex gap-3">
          <img 
            src={creatorAvatar} 
            alt={creator} 
            className="h-9 w-9 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-base leading-tight truncate mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{creator}</p>
            <div className="flex items-center text-xs text-muted-foreground mt-1.5 gap-3">
              <span>{views} views</span>
              <span>•</span>
              <span>{date}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full">
            <Clock className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
