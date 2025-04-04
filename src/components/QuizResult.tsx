
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import MoroccanHeader from "./MoroccanHeader";

interface QuizResultProps {
  categoryId: string;
  categoryName: string;
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({
  categoryId,
  categoryName,
  score,
  totalQuestions,
  onRestart,
}) => {
  const navigate = useNavigate();
  const percentage = Math.round((score / totalQuestions) * 100);

  let feedback = "";
  let colorClass = "";

  if (percentage >= 80) {
    feedback = "ممتاز! لديك فهم عميق للقانون المغربي.";
    colorClass = "text-green-600";
  } else if (percentage >= 60) {
    feedback = "جيد جدًا! مستواك جيد في القانون المغربي.";
    colorClass = "text-morocco-teal";
  } else if (percentage >= 40) {
    feedback = "متوسط. يمكنك تحسين معرفتك بالقانون المغربي.";
    colorClass = "text-morocco-gold";
  } else {
    feedback = "تحتاج إلى مزيد من الدراسة للقانون المغربي.";
    colorClass = "text-morocco-terracotta";
  }

  return (
    <Card className="w-full max-w-md mx-auto border-2 border-morocco-blue/20">
      <CardHeader className="bg-morocco-blue/10">
        <MoroccanHeader 
          title="نتيجة الاختبار" 
          subtitle={categoryName}
        />
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">
            النتيجة: {score} من {totalQuestions}
          </h3>
          <p className={`text-lg font-medium ${colorClass}`}>{feedback}</p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <span>0%</span>
            <span>100%</span>
          </div>
          <Progress value={percentage} className="h-3" />
          <p className="text-center font-bold mt-1">{percentage}%</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-3">
        <Button 
          onClick={onRestart} 
          className="w-full bg-morocco-teal hover:bg-morocco-blue"
        >
          إعادة الاختبار
        </Button>
        <Button 
          variant="outline" 
          onClick={() => navigate("/")} 
          className="w-full border-morocco-blue text-morocco-blue hover:bg-morocco-blue/10"
        >
          العودة للرئيسية
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuizResult;
