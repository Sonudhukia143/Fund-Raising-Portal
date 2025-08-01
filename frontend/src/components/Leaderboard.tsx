import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Trophy, Medal, Award, ArrowLeft, Crown } from "lucide-react";
import { useEffect } from "react";

interface LeaderboardEntry {
  id: number;
  name: string;
  totalDonations: number;
  rank: number;
  referralCode: string;
  avatar: string;
}

export default function Leaderboard() {
  const navigate = useNavigate();
  const [leaderboardData, setLeaderBoardData] = useState<LeaderboardEntry[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log("fetching Data");

    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/data");
      const data = await res.json();

      console.log(data.data2);

      setLeaderBoardData(data.data2);
      setLoading(false);
    }

    fetchData();
  }, []);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-gray-600">#{rank}</span>;
    }
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="w-full bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <Button
                onClick={handleBackToDashboard}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">🏆 Leaderboard</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Top Fundraisers</h2>
          <p className="text-gray-600">See who's leading the fundraising challenge</p>
        </div>

        {
          loading 
            ?
            <h1 className="text-gray-900">Loading</h1>
            :
            <>
              {/* Top 3 Podium */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {leaderboardData?.slice(0, 3).map((entry, index) => (
                  <div
                    key={entry.id}
                    className={`bg-white rounded-xl shadow-sm p-6 border-2 ${index === 0
                        ? "border-yellow-300 bg-yellow-50"
                        : index === 1
                          ? "border-gray-300 bg-gray-50"
                          : "border-amber-300 bg-amber-50"
                      }`}
                  >
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        {getRankIcon(entry.rank)}
                      </div>
                      <div className="text-4xl mb-2">{entry.avatar}</div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">{entry.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">@{entry.referralCode}</p>
                      <p className="text-2xl font-bold text-green-600">
                        ${entry.totalDonations.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Full Leaderboard */}
              <div className="bg-white rounded-xl shadow-sm border">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-bold text-gray-900">Complete Rankings</h3>
                </div>

                <div className="divide-y">
                  {leaderboardData?.map((entry) => (
                    <div key={entry.id} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
                            {getRankIcon(entry.rank)}
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{entry.avatar}</span>
                            <div>
                              <h4 className="font-semibold text-gray-900">{entry.name}</h4>
                              <p className="text-sm text-gray-600">@{entry.referralCode}</p>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-green-600">
                            ${entry.totalDonations.toLocaleString()}
                          </p>
                          <p className="text-sm text-gray-500">raised</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
        }

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border text-center">
            <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">8</p>
            <p className="text-sm text-gray-600">Active Fundraisers</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border text-center">
            <span className="text-2xl">💰</span>
            <p className="text-2xl font-bold text-gray-900">$46,200</p>
            <p className="text-sm text-gray-600">Total Raised</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border text-center">
            <span className="text-2xl">🎯</span>
            <p className="text-2xl font-bold text-gray-900">$50,000</p>
            <p className="text-sm text-gray-600">Goal</p>
          </div>
        </div>
      </div>
    </div>
  );
} 