import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface SamplePredictionSectionProps {
  title?: string;
  description?: string;
  crops?: Array<{ id: string; name: string }>;
  markets?: Array<{ id: string; name: string }>;
}

const SamplePredictionSection: React.FC<SamplePredictionSectionProps> = ({
  title = "Try Our AI Prediction Tool",
  description = "Experience the power of our AI-driven price prediction tool. Select a crop and market to see projected prices based on historical data and market trends.",
  crops = [
    { id: "1", name: "Wheat" },
    { id: "2", name: "Rice" },
    { id: "3", name: "Corn" },
    { id: "4", name: "Soybeans" },
    { id: "5", name: "Cotton" },
  ],
  markets = [
    { id: "1", name: "Chicago" },
    { id: "2", name: "New York" },
    { id: "3", name: "Tokyo" },
    { id: "4", name: "London" },
    { id: "5", name: "Mumbai" },
  ],
}) => {
  const [selectedCrop, setSelectedCrop] = useState<string>("");
  const [selectedMarket, setSelectedMarket] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showPrediction, setShowPrediction] = useState<boolean>(false);

  // Mock data for the chart
  const chartData = [
    { month: "Jan", price: 120 },
    { month: "Feb", price: 132 },
    { month: "Mar", price: 125 },
    { month: "Apr", price: 140 },
    { month: "May", price: 155 },
    { month: "Jun", price: 170 },
    { month: "Jul", price: 165 },
    { month: "Aug", price: 180 },
    { month: "Sep", price: 190 },
    { month: "Oct", price: 185 },
    { month: "Nov", price: 195 },
    { month: "Dec", price: 210 },
  ];

  const handleSearch = () => {
    if (selectedCrop && selectedMarket) {
      setShowPrediction(true);
    }
  };

  // Calculate the max value for scaling the chart
  const maxPrice = Math.max(...chartData.map((item) => item.price));

  return (
    <section className="w-full py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900 border-gray-800 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Search for Price Predictions
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Select a crop and market to see future price trends
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Crop</label>
                  <Select onValueChange={setSelectedCrop} value={selectedCrop}>
                    <SelectTrigger className="bg-gray-800 border-gray-700">
                      <SelectValue placeholder="Select crop" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      {crops.map((crop) => (
                        <SelectItem key={crop.id} value={crop.id}>
                          {crop.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Market</label>
                  <Select
                    onValueChange={setSelectedMarket}
                    value={selectedMarket}
                  >
                    <SelectTrigger className="bg-gray-800 border-gray-700">
                      <SelectValue placeholder="Select market" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      {markets.map((market) => (
                        <SelectItem key={market.id} value={market.id}>
                          {market.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Additional Keywords (Optional)
                  </label>
                  <div className="flex">
                    <Input
                      type="text"
                      placeholder="E.g., organic, export grade"
                      className="bg-gray-800 border-gray-700"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={handleSearch}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  <Search className="mr-2 h-4 w-4" />
                  Generate Prediction
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            {showPrediction ? (
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 h-full">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">
                    Price Prediction:{" "}
                    {crops.find((c) => c.id === selectedCrop)?.name} in{" "}
                    {markets.find((m) => m.id === selectedMarket)?.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Projected prices for the next 12 months based on historical
                    data and market trends
                  </p>
                </div>

                <div className="h-64 relative">
                  {/* Chart visualization */}
                  <div className="absolute bottom-0 left-0 right-0 h-full flex items-end">
                    {chartData.map((item, index) => (
                      <div
                        key={index}
                        className="flex-1 flex flex-col items-center"
                      >
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{
                            height: `${(item.price / maxPrice) * 100}%`,
                          }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="w-4 bg-gradient-to-t from-blue-600 to-purple-600 rounded-t-sm"
                        />
                        <span className="text-xs mt-2 text-gray-400">
                          {item.month}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-400">
                        Predicted Peak Price
                      </p>
                      <p className="text-2xl font-bold">
                        ${Math.max(...chartData.map((d) => d.price))}/ton
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Confidence Level</p>
                      <p className="text-2xl font-bold">87%</p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-gray-700 hover:bg-gray-700"
                    >
                      Full Report <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 h-full flex flex-col justify-center items-center text-center">
                <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center mb-6">
                  <Search className="h-10 w-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  No Prediction Generated
                </h3>
                <p className="text-gray-400 max-w-md">
                  Select a crop and market from the search panel to generate a
                  price prediction visualization
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SamplePredictionSection;
