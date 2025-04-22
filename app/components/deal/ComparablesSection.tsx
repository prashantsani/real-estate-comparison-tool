import Image from 'next/image';
import { Card } from "@/components/ui/card";

interface ComparablesSectionProps {
  supplyPipeline: Array<{
    address: string;
    submarket: string;
    deliveryDate: string;
    owner: string;
    sf: string;
  }>;
  saleComparables: Array<{
    address: string;
    submarket: string;
    date: string;
    sf: string;
    pp: string;
    owner: string;
    tenant: string;
  }>;
}

export default function ComparablesSection({ supplyPipeline, saleComparables }: ComparablesSectionProps) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-4">Supply Pipeline</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {supplyPipeline.map((item, index) => (
          <Card key={`pipeline-${index}`} className="overflow-hidden">
            <div className="flex">
              <Image
                src="/property-square.jpg"
                alt={item.address}
                width={161}
                height={140}
                className="object-cover"
              />
              <div className="w-2/3 p-4">
                <div className="mb-1">
                  <div className="text-sm font-medium">Address: {item.address}</div>
                  <div className="text-xs text-gray-500">Submarket: {item.submarket}</div>
                </div>
                <div className="grid grid-cols-3 gap-1 text-xs">
                  <div>
                    <div className="font-medium">Delivery Date</div>
                    <div>{item.deliveryDate}</div>
                  </div>
                  <div>
                    <div className="font-medium">Owner</div>
                    <div>{item.owner}</div>
                  </div>
                  <div>
                    <div className="font-medium">SF</div>
                    <div>{item.sf}</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <h3 className="text-lg font-medium mb-4">Sale Comparables</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {saleComparables.map((comp, index) => (
          <Card key={`sale-${index}`} className="overflow-hidden">
            <div className="flex flex-col">
              <div className="relative h-32 w-full">
                <Image
                  src="/property-square.jpg"
                  alt={comp.address}
                  width={161}
                  height={140}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="text-sm font-medium">Address: {comp.address}</div>
                <div className="text-xs text-gray-500">Submarket: {comp.submarket}</div>
                <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
                  <div>
                    <div className="font-medium">Date</div>
                    <div>{comp.date}</div>
                  </div>
                  <div>
                    <div className="font-medium">SF</div>
                    <div>{comp.sf}</div>
                  </div>
                  <div>
                    <div className="font-medium">Price</div>
                    <div>{comp.pp}</div>
                  </div>
                  <div>
                    <div className="font-medium">Owner</div>
                    <div>{comp.owner}</div>
                  </div>
                  <div className="col-span-2">
                    <div className="font-medium">Tenant</div>
                    <div>{comp.tenant}</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
