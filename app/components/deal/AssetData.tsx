import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Ruler, Columns, LayoutGrid, DoorClosed, UserCheck, ArrowUpRight, Calendar, Percent } from "lucide-react";

interface AssetDataProps {
  assetData: {
    clearHeights: string;
    columnSpacing: string;
    parkingSpaces: string;
    dockDoors: string;
    tenant: string;
    tenantArea: string;
    yearBuilt: string;
    occupancyRate: string;
  };
}

export default function AssetData({ assetData }: AssetDataProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Asset-Level Data</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="border-r pr-2">
            <div className="mb-4">
              <div className="flex items-center text-xs text-gray-500 mb-1">
                <Ruler className="h-3 w-3 mr-1" />
                Clear Heights
              </div>
              <div className="text-lg font-medium">{assetData.clearHeights}</div>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center text-xs text-gray-500 mb-1">
                <Columns className="h-3 w-3 mr-1" />
                Column Spacing
              </div>
              <div className="text-lg font-medium">{assetData.columnSpacing}</div>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center text-xs text-gray-500 mb-1">
                <LayoutGrid className="h-3 w-3 mr-1" />
                Parking Spaces
              </div>
              <div className="text-lg font-medium">{assetData.parkingSpaces}</div>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center text-xs text-gray-500 mb-1">
                <DoorClosed className="h-3 w-3 mr-1" />
                # of Dock Doors
              </div>
              <div className="text-lg font-medium">{assetData.dockDoors}</div>
            </div>
          </div>
          
          <div className="pl-2">
            <div className="mb-4">
              <div className="flex items-center text-xs text-gray-500 mb-1">
                <UserCheck className="h-3 w-3 mr-1" />
                Tenant
              </div>
              <div className="text-lg font-medium">{assetData.tenant}</div>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center text-xs text-gray-500 mb-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                Square Feet
              </div>
              <div className="text-lg font-medium">{assetData.tenantArea}</div>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center text-xs text-gray-500 mb-1">
                <Calendar className="h-3 w-3 mr-1" />
                Year Built
              </div>
              <div className="text-lg font-medium">{assetData.yearBuilt}</div>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center text-xs text-gray-500 mb-1">
                <Percent className="h-3 w-3 mr-1" />
                Occupancy Rate
              </div>
              <div className="text-lg font-medium">{assetData.occupancyRate}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}