export default async function fetchData(req, res) {
    console.log("Fetching Data");
    try {
        const data1 = {
            internName: "Sonu Dhukia",
            referralCode: "sonu2025",
            totalDonations: 2450,
            rank: 3,
            rewards: [
                {
                    id: 1,
                    name: "First Donation",
                    description: "Complete your first donation",
                    unlocked: true,
                    icon: "🎉"
                },
                {
                    id: 2,
                    name: "Social Butterfly",
                    description: "Share your referral code 10 times",
                    unlocked: true,
                    icon: "🦋"
                },
                {
                    id: 3,
                    name: "Fundraising Champion",
                    description: "Raise $1000 in donations",
                    unlocked: true,
                    icon: "🏆"
                },
                {
                    id: 4,
                    name: "Top Performer",
                    description: "Reach top 5 on leaderboard",
                    unlocked: false,
                    icon: "⭐"
                },
                {
                    id: 5,
                    name: "Mega Fundraiser",
                    description: "Raise $5000 in donations",
                    unlocked: false,
                    icon: "💎"
                }
            ]
        }

        const data2 = [
            {
              id: 1,
              name: "Alex Chen",
              totalDonations: 8750,
              rank: 1,
              referralCode: "alex2025",
              avatar: "👨‍💼"
            },
            {
              id: 2,
              name: "Maria Rodriguez",
              totalDonations: 7200,
              rank: 2,
              referralCode: "maria2025",
              avatar: "👩‍💼"
            },
            {
              id: 3,
              name: "Sonu Dhukia",
              totalDonations: 6450,
              rank: 3,
              referralCode: "sonu2025",
              avatar: "👩‍💻"
            },
            {
              id: 4,
              name: "David Kim",
              totalDonations: 5800,
              rank: 4,
              referralCode: "david2025",
              avatar: "👨‍💻"
            },
            {
              id: 5,
              name: "Emma Wilson",
              totalDonations: 5200,
              rank: 5,
              referralCode: "emma2025",
              avatar: "👩‍🎓"
            },
            {
              id: 6,
              name: "James Brown",
              totalDonations: 4800,
              rank: 6,
              referralCode: "james2025",
              avatar: "👨‍🎓"
            },
            {
              id: 7,
              name: "Lisa Garcia",
              totalDonations: 4200,
              rank: 7,
              referralCode: "lisa2025",
              avatar: "👩‍🏫"
            },
            {
              id: 8,
              name: "Michael Lee",
              totalDonations: 3800,
              rank: 8,
              referralCode: "michael2025",
              avatar: "👨‍🏫"
            }
          ];

        return res.status(200).json({ message: "Fetching was Successfull", data1: data1, data2: data2 });
    } catch (error) {
        console.error("Error in fetching all bank details", error);
        return res.status(500).json({ message: "Server error" });
    }
}
