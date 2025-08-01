import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Trophy, Gift, DollarSign, Share2, LogOut } from "lucide-react";
import { Alert, AlertTitle } from "./ui/alert";

interface DashboardData {
  internName: string;
  referralCode: string;
  totalDonations: number;
  rank: number;
  rewards: Reward[];
}

interface Reward {
  id: number;
  name: string;
  description: string;
  unlocked: boolean;
  icon: string;
}

export default function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const [fetching, setFetching] = useState(false);

  const [dashboardData, setDashboardData] = useState<DashboardData>();

  useEffect(() => {
    setFetching(true);

    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/data");
      const data = await res.json();

      console.log(data.data1);

      setDashboardData(data.data1);
      setFetching(false);
    }

    fetchData();
  }, []);

  const handleLogout = () => {
    // Handle logout logic
    setLoading(true);

    setTimeout(() => {
      navigate('/auth');
      setLoading(false);
    }, 2000);

  };

  const handleShareReferral = () => {
    if (dashboardData?.referralCode) {
      navigator.clipboard.writeText(dashboardData.referralCode);
    }
    setAlert(true);

    setTimeout(() => {
      setAlert(false)
    }, 1000);

  };

  const handleViewLeaderboard = () => {
    navigate('/leaderboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {
        alert
        &&
        <div className="grid w-full max-w-xl items-start mx-auto translate-x-80 translate-10 absolute">
          <Alert className="bg-black">
            <AlertTitle className="bg-black text-white">
              Referal Code Copied Successfully
            </AlertTitle>
          </Alert>
        </div>
      }
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">🎯 Fundraising Portal</h1>
            </div>
            <Button
              onClick={handleLogout}
              className="flex items-center gap-2"
              disabled={loading}
              onMouseEnter={() => setShow(!show)}
              onMouseLeave={() => setShow(!show)}
            >
              {show && <LogOut />
              }
              {loading ? "Clearing" : "Logout"}
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">


          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {dashboardData?.internName ? dashboardData?.internName : "Getting UserName"}! 👋
          </h2>
          <p className="text-gray-600">Track your fundraising progress and unlock rewards</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Donations</p>
                <p className="text-3xl font-bold text-green-600">${dashboardData?.totalDonations.toLocaleString() ? dashboardData?.totalDonations.toLocaleString() : "Getting Donations"}</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Your Rank</p>
                <p className="text-3xl font-bold text-purple-600">#{dashboardData?.rank ? dashboardData?.rank : "Getting Ranking"}</p>
              </div>
              <Trophy className="w-8 h-8 text-purple-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Referral Code</p>
                <p className="text-xl font-bold text-blue-600">{dashboardData?.referralCode?dashboardData?.referralCode:"Getting Referal"}</p>
              </div>
              <Button
                onClick={handleShareReferral}
                size="sm"
                className="flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
          </div>

          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border">
                  <div className="flex items-center gap-3 mb-6">
                    <Gift className="w-6 h-6 text-purple-600" />
                    <h3 className="text-xl font-bold text-gray-900">Rewards & Achievements</h3>
                  </div>

          {
            fetching
              ?
              <div className="mb-8 w-[100vh]">
                <h1 className="text-gray-900">Gathering Your Rewards</h1>
              </div>
              :
              <>



                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dashboardData?.rewards.map((reward) => (
                      <div
                        key={reward.id}
                        className={`p-4 rounded-lg border-2 ${reward.unlocked
                          ? "border-green-200 bg-green-50"
                          : "border-gray-200 bg-gray-50"
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{reward.icon}</span>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{reward.name}</h4>
                            <p className="text-sm text-gray-600">{reward.description}</p>
                          </div>
                          {reward.unlocked && (
                            <span className="text-green-600 text-sm font-medium">✓ Unlocked</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
              </>
          }
                </div>

        </div>
      </div>



      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Button
          onClick={handleViewLeaderboard}
          className="w-full h-16 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
        >
          View Leaderboard
        </Button>
        <Button className="w-full h-16 text-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
          Start Fundraising
        </Button>
      </div>
    </div>


  );
}