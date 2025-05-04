"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Sample data for the graph
const data = [
  { time: "00:00", value1: 400, value2: 240 },
  { time: "01:00", value1: 430, value2: 300 },
  { time: "02:00", value1: 448, value2: 320 },
  { time: "03:00", value1: 470, value2: 280 },
  { time: "04:00", value1: 540, value2: 250 },
  { time: "05:00", value1: 580, value2: 310 },
  { time: "06:00", value1: 550, value2: 350 },
  { time: "07:00", value1: 510, value2: 370 },
  { time: "08:00", value1: 560, value2: 390 },
  { time: "09:00", value1: 610, value2: 400 },
];

const RealtimeDataSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-800">
              Realtime Data Acquisition
            </h2>
            <div className="h-1 w-16 bg-blue-500 rounded-full mb-6"></div>

            <h3 className="text-xl font-semibold mb-4 text-slate-700">
              Relevant Services:
            </h3>
            <ul className="list-disc pl-5 mb-6 space-y-2 text-slate-600">
              <li>
                <span className="font-medium">Data Services:</span> Native
                protocol integration for high-speed data acquisition.
              </li>
              <li>
                <span className="font-medium">Automation Services:</span> Edge
                processing workflows and secure data transmission mechanisms.
              </li>
              <li>
                <span className="font-medium">Cloud Services:</span>{" "}
                Internet-safe integration and centralized analytics
                capabilities.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-4 text-slate-700">
              Solution:
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>
                <span className="font-medium">Leveraging Apache PLC4X:</span> An
                open-source Industrial IoT middleware that supports a wide range
                of PLC protocols (e.g., ModBus, ProfiBus, S7). This tool enables
                direct, efficient communication with PLCs while reducing
                overhead.
              </li>
            </ul>
          </div>

          {/* Graph */}
          <div className="bg-slate-50 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-slate-700 text-center">
              Real-time Data Visualization
            </h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="value1"
                    stroke="#0284c7"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    name="Sensor Reading 1"
                  />
                  <Line
                    type="monotone"
                    dataKey="value2"
                    stroke="#1d4ed8"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    name="Sensor Reading 2"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-slate-500 mt-4 text-center">
              Sample real-time data from industrial sensors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealtimeDataSection;
