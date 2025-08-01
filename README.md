# 🎯 Fundraising Intern Portal

A modern, full-stack fundraising portal built for intern management and donation tracking. This project demonstrates a complete React TypeScript application with beautiful UI, routing, and mock API integration.

## ✨ Features

### 🔐 Authentication
- **Login/Register System**: Clean authentication forms with validation
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Beautiful gradient backgrounds and smooth animations

### 📊 Dashboard
- **Intern Profile**: Display intern name and personal information
- **Referral Code**: Unique referral code with copy-to-clipboard functionality
- **Total Donations**: Real-time display of fundraising progress
- **Rewards System**: Achievement badges and unlockable rewards
- **Quick Actions**: Easy navigation to leaderboard and fundraising tools

### 🏆 Leaderboard
- **Top Performers**: Podium-style display for top 3 fundraisers
- **Complete Rankings**: Full list of all participants
- **Statistics**: Overall campaign statistics and goals
- **Visual Hierarchy**: Clear ranking with icons and avatars

### 🎨 UI/UX Features
- **Modern Design**: Clean, professional interface with Tailwind CSS
- **Responsive Layout**: Mobile-first design approach
- **Smooth Navigation**: React Router for seamless page transitions
- **Interactive Elements**: Hover effects, loading states, and animations

## 🚀 Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fund-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
fund-portal/
├── src/
│   ├── components/          # React components
│   │   ├── Dashboard.tsx   # Main dashboard
│   │   ├── Leaderboard.tsx # Leaderboard page
│   │   ├── Login.tsx       # Login form
│   │   ├── Register.tsx    # Registration form
│   │   └── ui/             # Reusable UI components
│   ├── routes/
│   │   └── Auth.tsx        # Authentication wrapper
│   ├── services/
│   │   └── api.ts          # Mock API service
│   ├── App.tsx             # Main app with routing
│   └── main.tsx            # Entry point
├── public/                 # Static assets
└── package.json           # Dependencies and scripts
```

## 🎯 Key Components

### Authentication Flow
- **Login**: Email/password authentication with form validation
- **Register**: Full registration form with name, email, and password
- **Navigation**: Automatic redirect to dashboard after successful auth

### Dashboard Features
- **User Stats**: Display total donations, rank, and referral code
- **Rewards System**: Visual achievement badges with unlock status
- **Quick Actions**: Buttons for leaderboard and fundraising activities
- **Responsive Cards**: Clean card-based layout for stats

### Leaderboard System
- **Top 3 Podium**: Special highlighting for top performers
- **Complete List**: Full ranking with avatars and donation amounts
- **Statistics**: Campaign overview with total raised and goals
- **Navigation**: Easy back navigation to dashboard

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Frontend Hosting Options:
- **Vercel**: `vercel --prod`
- **Netlify**: `netlify deploy --prod`
- **GitHub Pages**: Configure in repository settings

### Backend Integration:
The current version uses mock data. For production:
1. Replace mock API calls in `src/services/api.ts`
2. Connect to your preferred backend (Node.js, Python, etc.)
3. Update environment variables for API endpoints

## 📱 Responsive Design

The application is fully responsive and works on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## 🎨 Design System

### Colors
- **Primary**: Purple gradient (#8B5CF6 to #3B82F6)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Error**: Red (#EF4444)

### Typography
- **Headings**: Bold, large text for hierarchy
- **Body**: Clean, readable font for content
- **Buttons**: Clear call-to-action styling

## 🔮 Future Enhancements

- [ ] Real backend integration (Node.js/Express)
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Real-time updates with WebSocket
- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Analytics and reporting
- [ ] Social media sharing
- [ ] Push notifications

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is created for the Full Stack Developer Internship Round 1 task.

## 👥 Team

This project was built as part of the Full Stack Developer Internship application process.

---

**Note**: This is a prototype/demo version with mock data. For production use, integrate with a real backend API and database.
