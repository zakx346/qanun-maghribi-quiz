
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { QuizQuestion as QuizQuestionType } from "@/data/quizQuestions";

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedOption: number | null;
  onSelectOption: (index: number) => void;
  showResult: boolean;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedOption,
  onSelectOption,
  showResult,
}) => {
  return (
    <div className="space-y-4">
      <Card className="border-2 border-morocco-blue/30">
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold mb-4">{question.question}</h3>
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className={cn(
                  "w-full justify-start text-right p-4 h-auto",
                  selectedOption === index && !showResult && "border-morocco-blue bg-morocco-blue/10",
                  showResult && index === question.correctOptionIndex && "border-green-500 bg-green-100",
                  showResult && selectedOption === index && index !== question.correctOptionIndex && "border-red-500 bg-red-100"
                )}
                onClick={() => !showResult && onSelectOption(index)}
                disabled={showResult}
              >
                <span className="ml-2 font-semibold">{String.fromCharCode(65 + index)}.</span>
                {option}
              </Button>
            ))}
          </div>
          {showResult && (
            <div className="mt-4 p-4 bg-morocco-sand/30 rounded-md border border-morocco-sand">
              <p className="font-semibold mb-1">التفسير:</p>
              <p>{question.explanation}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizQuestion;
