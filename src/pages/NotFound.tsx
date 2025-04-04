
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import MoroccanHeader from "@/components/MoroccanHeader";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen moroccan-pattern flex items-center justify-center">
      <Card className="max-w-md mx-auto p-6 bg-white/95 shadow-lg">
        <MoroccanHeader title="404" subtitle="الصفحة غير موجودة" />
        
        <p className="text-center text-morocco-teal mb-6">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>
        
        <Button 
          onClick={() => navigate("/")} 
          className="w-full bg-morocco-teal hover:bg-morocco-blue"
        >
          العودة للصفحة الرئيسية
        </Button>
      </Card>
    </div>
  );
};

export default NotFound;
