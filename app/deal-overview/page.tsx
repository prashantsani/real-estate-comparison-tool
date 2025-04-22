import dealData from '../data/dealData.ts';
import PropertySnapshot from '../components/deal/PropertySnapshot';
import DealSummary from '../components/deal/DealSummary';
import InsightsSection from '../components/deal/InsightsSection';
import MetricsSection from '../components/deal/MetricsSection';
import AssetData from '../components/deal/AssetData';
import ComparablesSection from '../components/deal/ComparablesSection';

export default function DealOverviewPage() {
  

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold pb-4 mb-6 border-b border-gray-200">Deal Overview</h1>
      <PropertySnapshot propertyDetails={dealData.propertyDetails} keyStats={dealData.keyStats} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
          <DealSummary summary={dealData.dealSummary} />
          <InsightsSection insights={dealData.personalizedInsights} />
        </div>
        <div className="lg:col-span-1">
          <AssetData assetData={dealData.assetLevelData} />
        </div>
      </div>

      <MetricsSection 
        financialMetrics={dealData.projectedFinancialMetrics}
        keyAssumptions={dealData.keyAssumptions}
        marketAnalysis={dealData.marketAnalysis}
        leaseAnalysis={dealData.leaseAnalysis}
      />

      <ComparablesSection 
        supplyPipeline={dealData.supplyPipeline}
        saleComparables={dealData.saleComparables}
      />
    </div>
  );
}