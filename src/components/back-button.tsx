"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    // Check if there's history to go back to
    if (window.history.length > 1) {
      router.back();
    } else {
      // Fallback to home page if no history
      router.push("/");
    }
  };

  return (
    <Button
      variant="outline"
      className="cursor-pointer mb-6 border-yellow-400 text-yellow-400 hover:bg-yellow-400/90 bg-yellow-400/10"
      onClick={handleBack}
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      Back to all characters
    </Button>
  );
}
