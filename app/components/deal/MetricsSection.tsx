import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { 
  PercentSquare, LineChart, ArrowUpRight, CircleDollarSign, 
  Map, BarChart3, Home, Clock, TrendingUp, Building2, 
  Users, Percent, DollarSign, ArrowUp 
} from "lucide-react";

interface MetricsSectionProps {
  financialMetrics: {
    irr: string;
    equityMultiple: string;
    returnOnEquity: string;
    returnOnCost: string;
  };
  keyAssumptions: {
    exitPrice: string;
    exitCapRate: string;
    rentalGrowth: string;
    holdPeriod: string;
  };
  marketAnalysis: {
    nearestUrbanCenter: string;
    populationGrowthRate: string;
    medianHouseholdIncome: string;
    unemploymentRate: string;
  };
  leaseAnalysis: {
    rentPSF: string;
    walt: string;
    rentEscalations: string;
    markToMarketOpportunity: string;
  };
}

export default function MetricsSection({ 
  financialMetrics, 
  keyAssumptions,
  marketAnalysis,
  leaseAnalysis 
}: MetricsSectionProps) {
  return (
    <div className="mt-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Financial Metrics */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Projected Financial Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <PercentSquare className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm">IRR</span>
              </div>
              <span className="font-medium">{financialMetrics.irr}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <LineChart className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm">Equity Multiple</span>
              </div>
              <span className="font-medium">{financialMetrics.equityMultiple}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <ArrowUpRight className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm">Return on Equity</span>
              </div>
              <span className="font-medium">{financialMetrics.returnOnEquity}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CircleDollarSign className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm">Return on Cost</span>
              </div>
              <span className="font-medium">{financialMetrics.returnOnCost}</span>
            </div>
          </CardContent>
        </Card>
        
        {/* Key Assumptions */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Key Assumptions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CircleDollarSign className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm">Exit Price</span>
              </div>
              <span className="font-medium">{keyAssumptions.exitPrice}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Percent className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm">Exit Cap Rate</span>
              </div>
              <span className="font-medium">{keyAssumptions.exitCapRate}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm">Rental Growth</span>
              </div>
              <span className="font-medium">{keyAssumptions.rentalGrowth}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm">Hold Period</span>
              </div>
              <span className="font-medium">{keyAssumptions.holdPeriod}</span>
            </div>
          </CardContent>
        </Card>
        
        {/* Market Analysis */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Market Analysis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Map className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm">Nearest Urban Center</span>
              </div>
              <span className="font-medium">{marketAnalysis.nearestUrbanCenter}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <BarChart3 className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm">Population Growth</span>
              </div>
              <span className="font-medium">{marketAnalysis.populationGrowthRate}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Home className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm">Median Household</span>
              </div>
              <span className="font-medium">{marketAnalysis.medianHouseholdIncome}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm">Unemployment</span>
              </div>
              <span className="font-medium">{marketAnalysis.unemploymentRate}</span>
            </div>
          </CardContent>
        </Card>
        
        {/* Lease Analysis */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Lease Analysis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <DollarSign className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm">Rent PSF</span>
              </div>
              <span className="font-medium">{leaseAnalysis.rentPSF}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm">WALT</span>
              </div>
              <span className="font-medium">{leaseAnalysis.walt}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <ArrowUp className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm">Rent Escalations</span>
              </div>
              <span className="font-medium">{leaseAnalysis.rentEscalations}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Building2 className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm">Mark-to-Market</span>
              </div>
              <span className="font-medium">{leaseAnalysis.markToMarketOpportunity}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}