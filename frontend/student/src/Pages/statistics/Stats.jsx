import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line } from "recharts";

const placementData2025 = [
  { name: "Placed", value: 200 },
  { name: "Unplaced", value: 50 },
];

const placementData2026 = [
  { name: "Placed", value: 180 },
  { name: "Unplaced", value: 70 },
];

const branchPlacedData = [
  { name: "CSE", value: 80 },
  { name: "ECE", value: 50 },
  { name: "ME", value: 40 },
  { name: "EE", value: 30 },
  { name: "IT", value: 40 },
  { name: "PIE", value: 40 },
  { name: "CIVIL", value: 40 },
];

const branchUnplacedData = [
  { name: "CSE", value: 10 },
  { name: "ECE", value: 15 },
  { name: "ME", value: 20 },
  { name: "EE", value: 25 },
  { name: "IT", value: 40 },
  { name: "PIE", value: 40 },
  { name: "CIVIL", value: 40 },
];

const branchBarChartData = branchPlacedData.map((branch) => ({
  name: branch.name,
  Placed: branch.value,
  Unplaced: branchUnplacedData.find((b) => b.name === branch.name)?.value || 0,
}));

const medianPackageData = [
  { year: 2022, package: 12 },
  { year: 2023, package: 13 },
  { year: 2024, package: 14 },
  { year: 2025, package: 15 },
  { year: 2026, package: 16 },
];

const COLORS = ["#8AD1C2", "#9F8AD1", "#D18A99", "#BCD18A", "#D1C28A"];
const BRANCH_COLORS = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#8AD1C2", "#9F8AD1", "#D18A99"];

const PieChartComponent = ({ title, data, colors, idPrefix }) => (
  <div className="flex flex-col items-center p-4 bg-gray-900 text-white rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <ResponsiveContainer width={300} height={300}>
      <PieChart>
        <Pie data={data} cx="50%" cy="45%" outerRadius={100} innerRadius={40} dataKey="value" label startAngle={100} stroke="#222" strokeWidth={2} isAnimationActive={true}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip contentStyle={{ backgroundColor: "#333", color: "#fff" }} />
        <Legend wrapperStyle={{ color: "#fff" }} />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

const BarChartComponent = ({ title, data }) => (
  <div className="flex flex-col items-center p-4 bg-gray-900 text-white rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <ResponsiveContainer width={600} height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fill: "white" }} />
        <YAxis tick={{ fill: "white" }} />
        <Tooltip contentStyle={{ backgroundColor: "#333", color: "#fff" }} />
        <Legend wrapperStyle={{ color: "#fff" }} />
        <Bar dataKey="Placed" fill="#33FF57" barSize={50} />
        <Bar dataKey="Unplaced" fill="#FF5733" barSize={50} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const LineChartComponent = ({ title, data }) => (
  <div className="flex flex-col items-center p-4 bg-gray-900 text-white rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <ResponsiveContainer width={600} height={400}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" tick={{ fill: "white" }} />
        <YAxis tick={{ fill: "white" }} />
        <Tooltip contentStyle={{ backgroundColor: "#333", color: "#fff" }} />
        <Legend wrapperStyle={{ color: "#fff" }} />
        <Line type="monotone" dataKey="package" stroke="#FFD700" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const PlacementStats = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-950 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Placement Statistics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PieChartComponent title="Placed vs Unplaced (2025)" data={placementData2025} colors={COLORS} idPrefix="2025" />
        <PieChartComponent title="Placed vs Unplaced (2026)" data={placementData2026} colors={COLORS} idPrefix="2026" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <PieChartComponent title="Placed Students by Branch" data={branchPlacedData} colors={BRANCH_COLORS} idPrefix="branchPlaced" />
        <PieChartComponent title="Unplaced Students by Branch" data={branchUnplacedData} colors={BRANCH_COLORS} idPrefix="branchUnplaced" />
      </div>
      <div className="mt-10 w-full flex justify-center">
        <BarChartComponent title="Placement Comparison Across Branches" data={branchBarChartData} />
      </div>
      <div className="mt-10 w-full flex justify-center">
        <LineChartComponent title="Median Package Trend Over the Years" data={medianPackageData} />
      </div>
    </div>
  );
};

export default PlacementStats;