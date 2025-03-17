
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  bgColor?: string;
  className?: string;
}

const CategoryCard = ({ title, icon, bgColor = "bg-vlog-purple", className }: CategoryCardProps) => {
  return (
    <div className={cn("category-card group", className)}>
      <div className={cn("aspect-square flex flex-col items-center justify-center text-white", bgColor)}>
        <div className="text-3xl mb-2">{icon}</div>
        <h3 className="font-medium text-center">{title}</h3>
      </div>
      <div className="category-card-overlay">
        <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="font-medium text-white">Explore</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
