import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface InsightsSectionProps {
  insights: string[];
}

export default function InsightsSection({ insights }: InsightsSectionProps) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Personalized Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {insights.map((insight, index) => {
            // Process links within insights
            const processedInsight = insight.includes('lack of potential upside') 
              ? insight.replace('lack of potential upside', '<a href="#" class="text-blue-600 hover:underline">lack of potential upside</a>')
              : insight;
              
            const processedInsight2 = processedInsight.includes('55 Bay St, Brooklyn, NY 11231') 
              ? processedInsight.replace('55 Bay St, Brooklyn, NY 11231', '<a href="#" class="text-blue-600 hover:underline">55 Bay St, Brooklyn, NY 11231</a>')
              : processedInsight;
              
            const processedInsight3 = processedInsight2.includes('Brookfield won the deal for $45M') 
              ? processedInsight2.replace('Brookfield won the deal for $45M', '<a href="#" class="text-blue-600 hover:underline">Brookfield won the deal for $45M</a>')
              : processedInsight2;
              
            const finalInsight = processedInsight3.includes('renewed demand for infill industrial in Brooklyn') 
              ? processedInsight3.replace('renewed demand for infill industrial in Brooklyn', '<a href="#" class="text-blue-600 hover:underline">renewed demand for infill industrial in Brooklyn</a>')
              : processedInsight3;
              
            return (
              <li key={index} className="flex items-start">
                <ChevronRight className="h-4 w-4 mt-1 text-gray-500 flex-shrink-0" />
                <div 
                  className="ml-2 text-sm text-gray-700" 
                  dangerouslySetInnerHTML={{ __html: finalInsight }}
                />
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}