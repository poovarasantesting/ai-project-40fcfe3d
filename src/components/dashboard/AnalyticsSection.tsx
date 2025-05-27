import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, AreaChart, PieChart, UserCheck, ArrowUpRight, Activity, TrendingUp, Calendar, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AnalyticsSection() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
          <p className="text-muted-foreground">Monitor and analyze your performance metrics</p>
        </div>
        <div className="flex gap-2 items-center">
          <Select defaultValue="30days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="year">This year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Calendar className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Users"
          value="12,345"
          change="+16.2%"
          icon={<UserCheck className="h-5 w-5" />}
          description="vs. previous period"
        />
        <MetricCard
          title="Conversion Rate"
          value="3.6%"
          change="+2.1%"
          icon={<ArrowUpRight className="h-5 w-5" />}
          description="vs. previous period"
        />
        <MetricCard
          title="Active Sessions"
          value="1,234"
          change="+11.3%"
          icon={<Activity className="h-5 w-5" />}
          description="vs. previous period"
        />
        <MetricCard
          title="Engagement"
          value="78%"
          change="+5.4%"
          icon={<TrendingUp className="h-5 w-5" />}
          description="vs. previous period"
        />
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <Activity className="h-4 w-4" />
            <span>Overview</span>
          </TabsTrigger>
          <TabsTrigger value="traffic" className="flex items-center gap-2">
            <BarChart className="h-4 w-4" />
            <span>Traffic</span>
          </TabsTrigger>
          <TabsTrigger value="revenue" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            <span>Revenue</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Monthly Growth</CardTitle>
                <CardDescription>User growth over time</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <AreaChart className="mx-auto h-12 w-12 mb-2" />
                  <p>Area chart showing monthly user growth</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>User Demographics</CardTitle>
                <CardDescription>Breakdown of user demographics</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <PieChart className="mx-auto h-12 w-12 mb-2" />
                  <p>Pie chart showing user demographics</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="traffic" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
              <CardDescription>Where your users are coming from</CardDescription>
            </CardHeader>
            <CardContent className="h-80 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <BarChart className="mx-auto h-12 w-12 mb-2" />
                <p>Bar chart showing traffic sources</p>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Direct</CardTitle>
                <CardDescription>Direct traffic</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">34%</div>
                <p className="text-sm text-green-500 flex items-center">
                  +5.2%
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Search</CardTitle>
                <CardDescription>Search engine traffic</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">42%</div>
                <p className="text-sm text-green-500 flex items-center">
                  +7.1%
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Social</CardTitle>
                <CardDescription>Social media traffic</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">24%</div>
                <p className="text-sm text-green-500 flex items-center">
                  +3.4%
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Trends</CardTitle>
              <CardDescription>Monthly revenue performance</CardDescription>
            </CardHeader>
            <CardContent className="h-80 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <AreaChart className="mx-auto h-12 w-12 mb-2" />
                <p>Area chart showing revenue trends</p>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Total Revenue</CardTitle>
                <CardDescription>Current period</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$48,294</div>
                <p className="text-sm text-green-500 flex items-center">
                  +12.5%
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Avg. Order Value</CardTitle>
                <CardDescription>Current period</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$124.32</div>
                <p className="text-sm text-green-500 flex items-center">
                  +3.2%
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Conversion Value</CardTitle>
                <CardDescription>Current period</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$5.78</div>
                <p className="text-sm text-green-500 flex items-center">
                  +7.4%
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Top Performing Pages</CardTitle>
          <CardDescription>Pages with the highest engagement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom">
              <thead>
                <tr className="border-b">
                  <th className="h-12 px-4 text-left align-middle font-medium">Page</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Views</th>
                  <th className="h-12 px-4 text-left align-middle font-medium">Conversion</th>
                  <th className="h-12 px-4 text-right align-middle font-medium">Bounce Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 align-middle">/homepage</td>
                  <td className="p-4 align-middle">12,546</td>
                  <td className="p-4 align-middle">4.5%</td>
                  <td className="p-4 align-middle text-right">34%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 align-middle">/products</td>
                  <td className="p-4 align-middle">8,293</td>
                  <td className="p-4 align-middle">6.2%</td>
                  <td className="p-4 align-middle text-right">28%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 align-middle">/blog</td>
                  <td className="p-4 align-middle">5,432</td>
                  <td className="p-4 align-middle">2.1%</td>
                  <td className="p-4 align-middle text-right">45%</td>
                </tr>
                <tr>
                  <td className="p-4 align-middle">/pricing</td>
                  <td className="p-4 align-middle">3,782</td>
                  <td className="p-4 align-middle">7.8%</td>
                  <td className="p-4 align-middle text-right">22%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  description: string;
  icon: React.ReactNode;
}

function MetricCard({ title, value, change, description, icon }: MetricCardProps) {
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
        <div className="flex items-center text-xs">
          <span className="text-green-500 font-medium">{change}</span>
          <span className="ml-1 text-muted-foreground">{description}</span>
        </div>
      </CardContent>
    </Card>
  );
}