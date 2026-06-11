"use client";

import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Feb", BTech: 400, MBA: 240, MBBS: 240 },
  { name: "Mar", BTech: 300, MBA: 139, MBBS: 221 },
  { name: "Apr", BTech: 200, MBA: 980, MBBS: 229 },
  { name: "May", BTech: 278, MBA: 390, MBBS: 200 },
  { name: "Jun", BTech: 189, MBA: 480, MBBS: 218 },
];

export function EnquiriesChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass-card p-6 col-span-1 lg:col-span-2 relative group overflow-hidden"
    >
      {/* Animated background glow specifically for the chart card */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#3b82f6] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse transition-opacity duration-700 group-hover:opacity-20" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#7c3aed] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse transition-opacity duration-700 group-hover:opacity-20" />

      <div className="flex justify-between items-center mb-6 relative z-10">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            Monthly enquiries
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10b981]"></span>
            </span>
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Live data feed active</p>
        </div>
        <button className="text-sm font-medium text-[#10b981] hover:text-[#059669] transition-colors hover:translate-x-1 transform duration-300">
          View report →
        </button>
      </div>
      
      <div className="h-[280px] w-full relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorBTech" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorMBA" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorMBBS" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#7c3aed" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
            <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} dy={10} />
            <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} dx={-10} />
            <Tooltip
              contentStyle={{ 
                backgroundColor: "rgba(15, 23, 42, 0.8)", 
                backdropFilter: "blur(12px)",
                borderColor: "rgba(255,255,255,0.1)", 
                borderRadius: "12px",
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
                color: "#f1f5f9"
              }}
              itemStyle={{ color: "#f1f5f9", fontWeight: 500 }}
              cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1, strokeDasharray: '4 4' }}
            />
            <Legend 
              iconType="circle" 
              wrapperStyle={{ fontSize: "12px", color: "#94a3b8", paddingTop: "20px" }} 
            />
            <Area 
              type="monotone" 
              dataKey="BTech" 
              name="B.Tech" 
              stroke="#10b981" 
              strokeWidth={3} 
              fillOpacity={1} 
              fill="url(#colorBTech)" 
              dot={false} 
              activeDot={{ r: 6, strokeWidth: 0, fill: "#10b981", style: { filter: "drop-shadow(0px 0px 5px rgba(16,185,129,0.8))" } }} 
              animationDuration={2500} 
              animationEasing="ease-in-out" 
            />
            <Area 
              type="monotone" 
              dataKey="MBA" 
              stroke="#3b82f6" 
              strokeWidth={3} 
              fillOpacity={1} 
              fill="url(#colorMBA)" 
              dot={false} 
              activeDot={{ r: 6, strokeWidth: 0, fill: "#3b82f6", style: { filter: "drop-shadow(0px 0px 5px rgba(59,130,246,0.8))" } }} 
              animationDuration={2500} 
              animationBegin={400} 
              animationEasing="ease-in-out" 
            />
            <Area 
              type="monotone" 
              dataKey="MBBS" 
              stroke="#7c3aed" 
              strokeWidth={3} 
              fillOpacity={1} 
              fill="url(#colorMBBS)" 
              dot={false} 
              activeDot={{ r: 6, strokeWidth: 0, fill: "#7c3aed", style: { filter: "drop-shadow(0px 0px 5px rgba(124,58,237,0.8))" } }} 
              animationDuration={2500} 
              animationBegin={800} 
              animationEasing="ease-in-out" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
