import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LineChart, BarChart, PieChart, ActivitySquare, User, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProfileSection from "@/components/dashboard/ProfileSection";
import AnalyticsSection from "@/components/dashboard/AnalyticsSection";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="container mx-auto p-4 md:p-6 max-w-7xl">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-8 gap-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" alt="Profile" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold">Welcome back, Jane</h1>
            <p className="text-muted-foreground">Here's what's happening with your account today.</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Home size={16} />
            <span className="hidden sm:inline">Home</span>
          </Button>
          <Button className="gap-2">
            <ActivitySquare size={16} />
            <span className="hidden sm:inline">View Reports</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <Home size={16} />
            <span>Overview</span>
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <BarChart size={16} />
            <span>Analytics</span>
          </TabsTrigger>
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User size={16} />
            <span>Profile</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard 
              title="Total Users" 
              value="12,345" 
              change="+12%" 
              icon={<User className="h-4 w-4" />} 
            />
            <StatCard 
              title="Total Visits" 
              value="24,567" 
              change="+5.3%" 
              icon={<ActivitySquare className="h-4 w-4" />} 
            />
            <StatCard 
              title="Conversion Rate" 
              value="3.45%" 
              change="-0.5%" 
              isNegative={true}
              icon={<PieChart className="h-4 w-4" />} 
            />
            <StatCard 
              title="Avg. Time" 
              value="2m 45s" 
              change="+30s" 
              icon={<LineChart className="h-4 w-4" />} 
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your activity over the last 30 days</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <LineChart className="mx-auto h-12 w-12 mb-2" />
                  <p>Activity chart would go here</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Performance</CardTitle>
                <CardDescription>User engagement metrics</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <BarChart className="mx-auto h-12 w-12 mb-2" />
                  <p>Performance chart would go here</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="analytics">
          <AnalyticsSection />
        </TabsContent>
        
        <TabsContent value="profile">
          <ProfileSection />
        </TabsContent>
      </Tabs>
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isNegative?: boolean;
  icon: React.ReactNode;
}

function StatCard({ title, value, change, isNegative = false, icon }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-8 w-8 rounded-full flex items-center justify-center bg-muted">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={`text-xs flex items-center ${isNegative ? 'text-red-500' : 'text-green-500'}`}>
          {change}
          <span className="ml-1">{isNegative ? '↓' : '↑'}</span>
        </p>
      </CardContent>
    </Card>
  );
}