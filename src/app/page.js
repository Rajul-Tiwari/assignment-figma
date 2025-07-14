"use client";
import { useState } from "react";
import AppealLetterTable from "@/components/AppealLetterTable";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const barData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};

const pieData = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "Population",
      data: [300, 50, 100],
      backgroundColor: [
        "rgba(255, 99, 132, 0.7)",
        "rgba(54, 162, 235, 0.7)",
        "rgba(255, 206, 86, 0.7)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function AppealLetterPage() {
  return (
    <div className="px-8 md:px-16 lg:px-24 mt-8 w-full mx-auto">
      
      {/* Dashboard Graphs Section */}
      <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Bar Chart</h2>
          <Bar data={barData} />
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Pie Chart</h2>
          <Pie data={pieData} />
        </div>
      </div>
    
    </div>
  );
}
