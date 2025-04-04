
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { quizCategories } from "@/data/quizCategories";
import { getQuestionsByCategory } from "@/data/quizQuestions";
import MoroccanHeader from "@/components/MoroccanHeader";
import QuizQuestion from "@/components/QuizQuestion";
import QuizResult from "@/components/QuizResult";
import { ArrowRight, ArrowLeft } from "lucide-react";

const QuizPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<(number | null)[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  
  const category = categoryId 
    ? quizCategories.find(cat => cat.id === categoryId) 
    : null;
    
  const questions = categoryId 
    ? getQuestionsByCategory(categoryId)
    : [];
    
  useEffect(() => {
    if (!category) {
      navigate("/");
      return;
    }
    
    setSelectedOptions(new Array(questions.length).fill(null));
  }, [categoryId, navigate, category, questions.length]);
  
  if (!category) {
    return null;
  }
  
  const currentQuestion = questions[currentQuestionIndex];
  
  const handleSelectOption = (optionIndex: number) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = optionIndex;
    setSelectedOptions(newSelectedOptions);
  };
  
  const handleNext = () => {
    if (showResult) {
      setShowResult(false);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        calculateScore();
        setQuizCompleted(true);
      }
    } else {
      setShowResult(true);
    }
  };
  
  const handlePrevious = () => {
    if (showResult) {
      setShowResult(false);
    } else if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const calculateScore = () => {
    let newScore = 0;
    for (let i = 0; i < questions.length; i++) {
      if (selectedOptions[i] === questions[i].correctOptionIndex) {
        newScore++;
      }
    }
    setScore(newScore);
  };
  
  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptions(new Array(questions.length).fill(null));
    setShowResult(false);
    setQuizCompleted(false);
    setScore(0);
  };
  
  if (quizCompleted) {
    return (
      <div className="min-h-screen moroccan-pattern py-8">
        <div className="container mx-auto px-4">
          <QuizResult
            categoryId={category.id}
            categoryName={category.name}
            score={score}
            totalQuestions={questions.length}
            onRestart={handleRestartQuiz}
          />
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen moroccan-pattern">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto p-6 bg-white/95 shadow-lg">
          <MoroccanHeader 
            title={category.name} 
            subtitle={`السؤال ${currentQuestionIndex + 1} من ${questions.length}`}
          />
          
          {currentQuestion && (
            <QuizQuestion
              question={currentQuestion}
              selectedOption={selectedOptions[currentQuestionIndex]}
              onSelectOption={handleSelectOption}
              showResult={showResult}
            />
          )}
          
          <div className="mt-6 flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0 && !showResult}
              className="flex items-center gap-2 px-4 py-2 rounded-md border border-morocco-blue text-morocco-blue hover:bg-morocco-blue/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowRight className="h-5 w-5" />
              السابق
            </button>
            
            <button
              onClick={handleNext}
              disabled={selectedOptions[currentQuestionIndex] === null}
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-morocco-teal text-white hover:bg-morocco-blue disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {showResult 
                ? currentQuestionIndex === questions.length - 1 
                  ? "إنهاء الاختبار" 
                  : "السؤال التالي"
                : "تحقق من الإجابة"}
              <ArrowLeft className="h-5 w-5" />
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default QuizPage;
