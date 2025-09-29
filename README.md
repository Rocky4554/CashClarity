# CashClarity 💰

> An intelligent AI-powered finance tracking application that helps users manage their finances with smart insights and automation.
> 
CashClarity empowers users to take control of their financial future with AI-driven insights, automated transaction tracking, and intelligent receipt scanning capabilities.

## ✨ Key Features

### 🤖 AI-Powered Core Features
- **Smart Receipt Scanner**: Extract transaction data automatically from receipts using Google Gemini AI
- **Advanced Analytics**: Get detailed insights into spending patterns with AI-powered analytics
- **Automated Insights**: Receive intelligent financial recommendations and alerts
- **Background Processing**: Automated email alerts for transactions using Inngest

### 💼 Financial Management
- **Transaction Management**: Add, edit, and categorize transactions with ease
- **Dashboard Overview**: Comprehensive view of all financial activities
- **Recent Transactions**: Quick access to latest financial activities
- **Budget Planning**: Create and manage budgets with intelligent recommendations
- **Multi-Account Support**: Manage multiple accounts and credit cards in one place
- **Multi-Currency**: Support for multiple currencies with real-time conversion

### 🔒 Security & Authentication
- **Secure Authentication**: Powered by Clerk for robust user management
- **Data Privacy**: Your financial data is encrypted and secure
- **Real-time Sync**: Transactions sync across all your devices

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework for production
- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Beautiful and accessible UI components

### Backend & Services
- **Next.js API Routes** - Serverless API endpoints
- **Google Gemini AI** - Advanced AI for receipt scanning and insights
- **Clerk** - Authentication and user management
- **Inngest** - Background job processing for email alerts
- **Vercel** - Deployment and hosting platform

### Database & Storage
- **PostgreSQL/MongoDB** - Reliable data storage
- **Prisma/Mongoose** - Database ORM

## 🚀 Live Demo

Experience CashClarity in action: **[cash-clarity-orpin.vercel.app](https://cash-clarity-orpin.vercel.app/)**

## 🏃‍♂️ Quick Start

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Google Gemini API** key
- **Clerk** account for authentication
- **Inngest** account for background jobs

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Rocky4554/CashClarity.git
   cd CashClarity
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Configuration**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

   # Google Gemini AI
   GOOGLE_GEMINI_API_KEY=your_gemini_api_key

   # Database
   DATABASE_URL=your_database_connection_string

   # Inngest
   INNGEST_EVENT_KEY=your_inngest_event_key
   INNGEST_SIGNING_KEY=your_inngest_signing_key

   # App Configuration
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Database Setup**
   ```bash
   # If using Prisma
   npx prisma migrate dev
   npx prisma generate

   # If using Mongoose, ensure your MongoDB is running
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Access the Application**
   - Open [http://localhost:3000](http://localhost:3000) in your browser
   - Create an account or sign in to start managing your finances

## 📁 Project Structure

```
CashClarity/
├── app/                    # Next.js 14 App Router
│   ├── (auth)/            # Authentication pages
│   ├── dashboard/         # Dashboard and main app pages
│   ├── api/               # API routes
│   │   ├── transactions/  # Transaction management endpoints
│   │   ├── ai/            # AI-powered endpoints
│   │   └── inngest/       # Background job endpoints
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/            # Reusable React components
│   ├── ui/                # Shadcn/ui components
│   ├── forms/             # Form components
│   ├── charts/            # Data visualization components
│   └── shared/            # Shared utility components
├── lib/                   # Utility functions and configurations
│   ├── prisma.ts          # Database configuration
│   ├── ai.ts              # AI service integration
│   └── utils.ts           # Helper functions
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript type definitions
├── public/                # Static assets
├── prisma/                # Database schema and migrations
└── inngest/               # Background job functions
```

## 🎯 How It Works

### 1. **Smart Onboarding**
- Quick and secure account creation with Clerk
- Seamless authentication flow
- Personalized dashboard setup

### 2. **Intelligent Transaction Management**
- **Manual Entry**: Add transactions with smart categorization
- **AI Receipt Scanner**: Upload receipt images and let AI extract all details
- **Automatic Processing**: Background jobs handle data validation and insights

### 3. **AI-Powered Insights**
- Real-time spending pattern analysis
- Personalized financial recommendations
- Automated budget alerts and notifications

### 4. **Comprehensive Dashboard**
- Visual spending analytics with interactive charts
- Recent transaction overview
- Budget tracking and goal monitoring
- Multi-account financial summary

## 🔧 API Endpoints

### Transactions
- `GET /api/transactions` - Retrieve user transactions
- `POST /api/transactions` - Create new transaction
- `PUT /api/transactions/[id]` - Update transaction
- `DELETE /api/transactions/[id]` - Delete transaction

### AI Features
- `POST /api/ai/scan-receipt` - Process receipt with AI
- `GET /api/ai/insights` - Get AI-powered financial insights

### Background Jobs
- `POST /api/inngest` - Trigger background processes

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Connect Repository**
   ```bash
   vercel --prod
   ```

2. **Environment Variables**
   - Add all environment variables in Vercel dashboard
   - Ensure production URLs are updated

3. **Database Migration**
   ```bash
   # Run migrations in production
   npx prisma migrate deploy
   ```

### Alternative Deployment Options
- **Netlify**: Full-stack deployment with serverless functions
- **Railway**: PostgreSQL hosting with automatic deployments
- **DigitalOcean App Platform**: Container-based deployment

## 🤝 Contributing

We welcome contributions to make CashClarity even better!

1. **Fork the Repository**
2. **Create Feature Branch**
   ```bash
   git checkout -b feature/amazing-financial-feature
   ```
3. **Commit Changes**
   ```bash
   git commit -m "Add amazing financial feature"
   ```
4. **Push to Branch**
   ```bash
   git push origin feature/amazing-financial-feature
   ```
5. **Open Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure responsive design across devices

## 🔮 Roadmap

### Upcoming Features
- [ ] **Expense Categories AI**: Smart auto-categorization of transactions
- [ ] **Investment Tracking**: Portfolio management and performance tracking
- [ ] **Bill Reminders**: Automated reminders for recurring payments
- [ ] **Export Features**: PDF and CSV export of financial reports
- [ ] **Mobile App**: React Native mobile application

### Future Enhancements
- [ ] **Bank Integration**: Direct bank account synchronization
- [ ] **Credit Score Monitoring**: Track and improve credit scores
- [ ] **Tax Preparation**: Automated tax document generation
- [ ] **Financial Goals**: Advanced goal-setting and tracking
- [ ] **Team Collaboration**: Shared accounts for families/businesses
- [ ] **Advanced Analytics**: Predictive spending insights
- [ ] **API Integration**: Third-party financial service connections

## 📊 Performance & Security

- **⚡ Fast Loading**: Optimized with Next.js 14 and Vercel Edge Functions
- **🔒 Secure**: End-to-end encryption with Clerk authentication
- **📱 Responsive**: Mobile-first design approach
- **♿ Accessible**: WCAG compliant UI components
- **🌍 SEO Optimized**: Server-side rendering for better discoverability

## 🆘 Support & Feedback

Need help or have suggestions?

- 🐛 [Report Issues](https://github.com/Rocky4554/CashClarity/issues)
- 💬 [Join Discussions](https://github.com/Rocky4554/CashClarity/discussions)
- 📧 Email: [your-email@example.com]
- 🌐 Live Demo: [cash-clarity-orpin.vercel.app](https://cash-clarity-orpin.vercel.app/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Raunak** - [@Rocky4554](https://github.com/Rocky4554)

- Portfolio: [your-portfolio-url]
- LinkedIn: [your-linkedin]
- Twitter: [@your-twitter]

---

<div align="center">

**Built with ❤️ using Next.js, AI, and modern web technologies**

⭐ **Star this repository if CashClarity helps you manage your finances better!**

[🚀 Try CashClarity Now](https://cash-clarity-orpin.vercel.app/) | [📖 Documentation](https://github.com/Rocky4554/CashClarity/wiki) | [🐛 Report Bug](https://github.com/Rocky4554/CashClarity/issues)

</div>
