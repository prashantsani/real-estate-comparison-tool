import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  User, DollarSign, Calculator, Percent,
  Square, Map, Building, LucideIcon
} from 'lucide-react';

interface PropertySnapshotProps {
  propertyDetails: {
    address: string;
    dateUploaded: string;
    propertyType: string;
    image: string;
  };
  keyStats: {
    seller: string;
    guidancePrice: string;
    guidancePricePSF: string;
    capRate: string;
    propertySize: string;
    landArea: string;
    zoning: string;
  };
}

const keyStatConfig: { [key in keyof PropertySnapshotProps['keyStats']]: { label: string; icon: LucideIcon } } = {
  seller: { label: 'Seller', icon: User },
  guidancePrice: { label: 'Guidance Price', icon: DollarSign },
  guidancePricePSF: { label: 'Guidance Price PSF', icon: Calculator },
  capRate: { label: 'Cap Rate', icon: Percent },
  propertySize: { label: 'Property Size', icon: Square },
  landArea: { label: 'Land Area', icon: Map },
  zoning: { label: 'Zoning', icon: Building },
};

export default function PropertySnapshot({ propertyDetails, keyStats }: PropertySnapshotProps) {
  return (
    <Card className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative h-48 md:h-auto">
          <Image 
            src="/property-snapshot.jpg" 
            alt={propertyDetails.address}
            className="object-cover rounded-md min-w-full"
            width={383}
            height={187}
          />
          <button className="text-xs px-2 py-1 rounded text-center w-full pointer">
              Click for Google Street View
          </button>
        </div>
        
        <div className="md:col-span-2 flex flex-col justify-between m-0 p-0">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold">{propertyDetails.address}</h2>
              <div className="text-sm text-gray-500">
                Date Uploaded: {propertyDetails.dateUploaded}
              </div>
              <div className="text-sm text-gray-500">
                {propertyDetails.propertyType}
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Export to Excel
              </Button>
              <Button variant="outline" size="sm">
                Generate PowerPoint
              </Button>
            </div>
          </div>
          
          <div className="flex justify-between">
            {Object.keys(keyStats).map((key) => {
              const statKey = key as keyof typeof keyStats;
              const config = keyStatConfig[statKey];
              if (!config) return null; 
              const IconComponent = config.icon;

              return (
                <div key={statKey} className="flex flex-col items-center">
                  <div className="flex items-center mb-1">
                    <IconComponent className="h-4 w-4 mr-1 text-gray-500" />
                    <span className="text-xs text-gray-500">{config.label}</span>
                  </div>
                  <div className="text-sm font-medium">{keyStats[statKey]}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
}
