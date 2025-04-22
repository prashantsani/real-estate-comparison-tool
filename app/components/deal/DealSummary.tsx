import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface DealSummaryProps {
  summary: string;
}

export default function DealSummary({ summary }: DealSummaryProps) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Deal Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-700">{summary}</p>
      </CardContent>
    </Card>
  );
}