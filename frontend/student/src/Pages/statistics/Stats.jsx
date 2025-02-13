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

const ChartContainer = ({ children, title }) => (
  <div className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 p-6 rounded-lg shadow-md border border-gray-700 text-center w-full">
    <h2 className="text-xl font-bold text-gray-100 mb-4">{title}</h2>
    {children}
  </div>
);

const DonutPieChartComponent = ({ title, data, colors }) => (
    <ChartContainer title={title}>
      <ResponsiveContainer width={300} height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="45%"
            outerRadius={100}
            innerRadius={50} // Creates a donut chart
            startAngle={100} // Rotates the chart
            dataKey="value"
            label
            stroke="#222"
            strokeWidth={2}
            isAnimationActive={true}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: "#222", color: "#fff", borderRadius: "5px" }} />
          <Legend wrapperStyle={{ color: "#fff" }} />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
  
const BarChartComponent = ({ title, data }) => (
  <ChartContainer title={title}>
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
        <XAxis dataKey="name" tick={{ fill: "white" }} />
        <YAxis tick={{ fill: "white" }} />
        <Tooltip contentStyle={{ backgroundColor: "#222", color: "#fff", borderRadius: "5px" }} />
        <Legend wrapperStyle={{ color: "#fff" }} />
        <Bar dataKey="Placed" fill="#33FF57" barSize={50} />
        <Bar dataKey="Unplaced" fill="#FF5733" barSize={50} />
      </BarChart>
    </ResponsiveContainer>
  </ChartContainer>
);

const LineChartComponent = ({ title, data }) => (
  <ChartContainer title={title}>
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
        <XAxis dataKey="year" tick={{ fill: "white" }} />
        <YAxis tick={{ fill: "white" }} />
        <Tooltip contentStyle={{ backgroundColor: "#222", color: "#fff", borderRadius: "5px" }} />
        <Legend wrapperStyle={{ color: "#fff" }} />
        <Line type="monotone" dataKey="package" stroke="#FFD700" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  </ChartContainer>
);

const PlacementStats = () => {
  return (
    <div className="p-8 bg-gray-950 min-h-screen text-white flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-4 text-gray-100">Placement Statistics</h1>
      <p className="text-lg text-gray-400 mb-10">Insights into student placements and salary trends</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
  <DonutPieChartComponent title="Placed vs Unplaced (2025)" data={placementData2025} colors={COLORS} />
  <DonutPieChartComponent title="Placed vs Unplaced (2026)" data={placementData2026} colors={COLORS} />
  <DonutPieChartComponent title="Placed Students by Branch" data={branchPlacedData} colors={BRANCH_COLORS} />
  <DonutPieChartComponent title="Unplaced Students by Branch" data={branchUnplacedData} colors={BRANCH_COLORS} />
</div>

      <div className="mt-10 w-full max-w-6xl">
        <BarChartComponent title="Placement Comparison Across Branches" data={branchBarChartData} />
      </div>

      <div className="mt-10 w-full max-w-6xl">
        <LineChartComponent title="Median Package Trend Over the Years" data={medianPackageData} />
      </div>
    </div>
  );
};

export default PlacementStats;
