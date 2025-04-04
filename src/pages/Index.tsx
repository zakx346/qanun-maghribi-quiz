
import React from "react";
import { Card } from "@/components/ui/card";
import { quizCategories } from "@/data/quizCategories";
import CategoryCard from "@/components/CategoryCard";
import MoroccanHeader from "@/components/MoroccanHeader";

const Index = () => {
  return (
    <div className="min-h-screen moroccan-pattern">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto p-6 bg-white/95 shadow-lg">
          <MoroccanHeader 
            title="اختبار القانون المغربي" 
            subtitle="اختبر معلوماتك في مختلف فروع القانون المغربي" 
          />
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-morocco-blue">اختر مجال القانون</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {quizCategories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
          
          <div className="mt-10 bg-morocco-sand/20 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-3 text-morocco-teal">حول التطبيق</h2>
            <p className="text-gray-700">
              مرحبًا بك في تطبيق اختبار القانون المغربي. هذا التطبيق يساعدك على اختبار معلوماتك
              في مختلف فروع القانون المغربي بطريقة سهلة وممتعة. استمتع بالتعلم!
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
