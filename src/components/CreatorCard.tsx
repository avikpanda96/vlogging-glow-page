
import { Button } from "@/components/ui/button";

interface CreatorCardProps {
  name: string;
  username: string;
  avatar: string;
  followers: string;
  videos: number;
  category: string;
}

const CreatorCard = ({ name, username, avatar, followers, videos, category }: CreatorCardProps) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-24 bg-gradient-to-r from-vlog-purple to-vlog-pink"></div>
      <div className="px-4 pb-5 pt-14 -mt-12 text-center">
        <img
          src={avatar}
          alt={name}
          className="w-20 h-20 mx-auto rounded-full border-4 border-white object-cover"
        />
        <h3 className="mt-3 font-display font-semibold text-lg">{name}</h3>
        <p className="text-sm text-muted-foreground">@{username}</p>
        
        <div className="flex justify-center gap-4 my-3 text-sm">
          <div>
            <p className="font-medium">{followers}</p>
            <p className="text-xs text-muted-foreground">Followers</p>
          </div>
          <div className="h-10 border-r border-muted"></div>
          <div>
            <p className="font-medium">{videos}</p>
            <p className="text-xs text-muted-foreground">Videos</p>
          </div>
        </div>
        
        <div className="mb-4">
          <span className="inline-block bg-muted px-2.5 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
        
        <Button size="sm" className="w-full">Follow</Button>
      </div>
    </div>
  );
};

export default CreatorCard;
