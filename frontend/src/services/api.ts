// Mock API service for the fundraising portal
// In a real application, this would connect to a backend server

export interface User {
  id: string;
  name: string;
  email: string;
  referralCode: string;
  totalDonations: number;
  rank: number;
}

export interface LeaderboardEntry {
  id: number;
  name: string;
  totalDonations: number;
  rank: number;
  referralCode: string;
  avatar: string;
}

export interface Reward {
  id: number;
  name: string;
  description: string;
  unlocked: boolean;
  icon: string;
}

// Mock user data
const mockUser: User = {
  id: "1",
  name: "Sarah Johnson",
  email: "sarah@example.com",
  referralCode: "sarah2025",
  totalDonations: 2450,
  rank: 3
};

// Mock leaderboard data
const mockLeaderboard: LeaderboardEntry[] = [
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
    name: "Sarah Johnson",
    totalDonations: 6450,
    rank: 3,
    referralCode: "sarah2025",
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

// Mock rewards data
const mockRewards: Reward[] = [
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
];

// API functions
export const api = {
  // Simulate login
  login: async (email: string, password: string): Promise<User> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email && password) {
      return mockUser;
    } else {
      throw new Error("Invalid credentials");
    }
  },

  // Simulate registration
  register: async (name: string, email: string, password: string): Promise<User> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (name && email && password) {
      return {
        ...mockUser,
        name,
        email,
        referralCode: `${name.toLowerCase().replace(/\s+/g, '')}2025`
      };
    } else {
      throw new Error("Invalid registration data");
    }
  },

  // Get user dashboard data
  getDashboardData: async (): Promise<{ user: User; rewards: Reward[] }> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      user: mockUser,
      rewards: mockRewards
    };
  },

  // Get leaderboard data
  getLeaderboard: async (): Promise<LeaderboardEntry[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return mockLeaderboard;
  },

  // Update user donations (simulate donation)
  updateDonations: async (amount: number): Promise<User> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const updatedUser = {
      ...mockUser,
      totalDonations: mockUser.totalDonations + amount
    };
    
    // Update mock data
    Object.assign(mockUser, updatedUser);
    
    return updatedUser;
  }
}; 