
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { QuizCategory } from "@/data/quizCategories";
import * as LucideIcons from "lucide-react";

interface CategoryCardProps {
  category: QuizCategory;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const navigate = useNavigate();
  const IconComponent = LucideIcons[category.icon as keyof typeof LucideIcons] as React.FC<React.SVGProps<SVGSVGElement>>;

  return (
    <Card className="overflow-hidden border-2 border-morocco-blue/20 hover:border-morocco-blue/40 transition-all duration-300">
      <CardHeader className="bg-morocco-blue/10 pb-2">
        <div className="flex justify-center">
          {IconComponent && <IconComponent className="h-10 w-10 text-morocco-blue" />}
        </div>
        <h3 className="text-xl font-bold text-center mt-2">{category.name}</h3>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-sm text-gray-600">{category.description}</p>
        <p className="mt-2 text-morocco-blue font-medium">
          عدد الأسئلة: {category.questionCount}
        </p>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-morocco-teal hover:bg-morocco-blue"
          onClick={() => navigate(`/quiz/${category.id}`)}
        >
          ابدأ الاختبار
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CategoryCard;
