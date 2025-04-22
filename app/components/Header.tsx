'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";


export default function Header() {
  const [showQuestionInput, setShowQuestionInput] = useState(false);
  const [question, setQuestion] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  const onAskQuestion = () => {
    setShowQuestionInput(!showQuestionInput);
  };

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      setIsThinking(true);
      // Simulate AI thinking time
      setTimeout(() => {
        setIsThinking(false);
      }, 2000);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {showQuestionInput && (
        <div className="mb-6 bg-white rounded-lg shadow p-4">
          <form onSubmit={handleSubmitQuestion} className="flex gap-2">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Sensitize IRR on varying Exit Cap Rates and Rental Growth"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Ask
            </button>
          </form>
          {isThinking && (
            <div className="mt-3 flex items-center gap-2">
              <div className="animate-pulse">Thinking...</div>
            </div>
          )}
        </div>
      )}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/deal-overview">
                    Deal Overview
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/workshop">
                    Workshop
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/pipeline">
                    Pipeline
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/settings">
                    Settings
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={onAskQuestion}>
              Ask me anything
            </Button>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <div className="text-right">
            <div className="text-sm font-medium">Underwriting Model</div>
            <div className="text-xs text-gray-500">Industrial Template v2.4.xlx</div>
          </div>
        </div>
      </div>
    </div >
  );
}