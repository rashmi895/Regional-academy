"use client";

import { useState, useEffect } from "react";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { EnquiriesChart } from "@/components/dashboard/EnquiriesChart";
import { RecentLeads } from "@/components/dashboard/RecentLeads";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="glass-card p-6 h-[120px] flex justify-between">
              <div className="space-y-3 w-1/2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-3 w-5/6" />
              </div>
              <Skeleton className="h-10 w-10 rounded-xl" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="glass-card p-6 col-span-1 lg:col-span-2 h-[350px]">
             <Skeleton className="h-6 w-1/4 mb-6" />
             <Skeleton className="h-[250px] w-full" />
          </div>
          <div className="glass-card p-6 col-span-1 h-[350px]">
             <Skeleton className="h-6 w-1/3 mb-6" />
             <div className="space-y-4">
               {[...Array(4)].map((_, i) => (
                 <Skeleton key={i} className="h-14 w-full rounded-xl" />
               ))}
             </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 pb-12"
    >
      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <EnquiriesChart />
        <RecentLeads />
      </div>

      <QuickActions />
      <RecentActivity />
    </motion.div>
  );
}
