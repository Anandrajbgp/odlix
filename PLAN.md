# Odlix - Comprehensive Development Plan

## Current State Analysis
The project has a solid foundation with Next.js 16, Tailwind CSS v4, shadcn/ui, Framer Motion, Prisma, and a custom JWT auth system. Basic platform pages exist but need major enhancement to reach SaaS-level quality.

## Phase 1: Foundation & Design System (Critical)
### 1.1 Global Theme & Layout Fixes
- **globals.css**: Update homepage gradient to Deep Blue (#001F3F) → Magenta/Purple (#8B008B) as specified
- **ThemeProvider**: Add system-preference auto dark mode detection
- **Root layout**: Ensure proper metadata, SEO tags, and structure

### 1.2 Shared Components Enhancement
- **AIChatbot**: Make functional with message history and better UI
- **WhatsAppWidget**: Improve toggle and positioning
- **ScrollToTop**: Ensure smooth behavior
- **ThemeToggle**: Add system option alongside light/dark

### 1.3 Marketing Pages (Homepage)
- Redesign Hero with Deep Blue/Magenta gradient
- Enhance Ecosystem cards with hover animations
- Add Pricing Section with 4 packages (Beginner ₹999, Pro ₹2,499, Expert ₹4,999, Life Mastery)
- Improve Testimonials with ratings and avatars
- Add CTA banner with signup incentive

## Phase 2: Authentication & User Management (Critical)
### 2.1 Auth Pages
- **Signup page**: Create full registration form with name, email, phone, password, referral code
- **Login page**: Already exists - verify and enhance
- **Forgot Password**: Create page with email reset flow
- **Profile Page**: User settings, avatar upload, password change, profile completion

### 2.2 Auth API Enhancement
- Register: Add phone, referral tracking
- Login: Ensure proper error handling
- Logout: Already exists
- Password reset API route

### 2.3 Dashboard Layout
- Create proper dashboard layout with sidebar navigation
- Dashboard navbar with user menu
- Dashboard sidebar with all menu items (Profile, Earnings, Courses, Payout, Training, Affiliates, Leaderboard, Tools, Certificates, Quiz, Social Media)

## Phase 3: E-Learning Platform (Deep Blue / Cyan)
### 3.1 Learning Layout & Navigation
- Create learning-specific navbar with course search
- Learning footer with platform-specific links
- Platform-specific color scheme (Deep Blue/Cyan)

### 3.2 Course Pages
- **Courses listing**: Grid with filters (category, level, price)
- **Course detail**: Description, curriculum, instructor, reviews, enrollment CTA
- **Lesson view**: Video player, sidebar navigation, progress tracking
- **Quiz system**: Take quiz, show results, retake option

### 3.3 Package System
- **Beginner (₹999)**: 8 skills, starter community, assessments, badges
- **Pro (₹2,499)**: 15 skills, certifications, mentorship, projects
- **Expert (₹4,999)**: 23 skills, freelance marketplace, 1-on-1 sessions
- **Life Mastery** (Unlock after any package)

### 3.4 Certificates
- Certificate generation page with QR code
- Share to LinkedIn functionality
- Verification page

### 3.5 Learning Admin
- Course management (add/edit/delete)
- Lesson management
- Quiz management
- Enrollment tracking

## Phase 4: Digital Agency (Bright Yellow / Black)
### 4.1 Agency Layout & Navigation
- Create agency-specific navbar and footer
- Platform color scheme (Yellow/Black)

### 4.2 Agency Pages
- **Home/Services**: Enhanced service cards with pricing
- **Portfolio**: Case studies with before/after, project gallery
- **About**: Team section with photos, company story
- **Contact**: Consultation booking form

### 4.3 Agency Admin
- Project management dashboard
- Client management
- Service catalog management

## Phase 5: Competition Exam Tests (Light Blue / White)
### 5.1 Tests Layout & Navigation
- Test-specific navbar
- Platform color scheme (Light Blue/White with Royal Blue accent)

### 5.2 Test Platform
- Exam categories (Banking, SSC, UPSC, Railway, State PSC, Campus)
- Test interface with timer and negative marking
- Results page with analytics
- Strength/weakness map
- Offline mode capability

## Phase 6: Broker Trading (Dark Red / Maroon-Brown)
### 6.1 Broker Layout
- Trading-specific navbar
- Dark theme default (Maroon/Red gradient)

### 6.2 Trading Dashboard
- Portfolio overview
- Watchlist management
- Asset cards (Stocks, Options, Futures, Mutual Funds, ETFs, Commodities, Crypto)
- Chart placeholders (technical analysis indicators)
- Order placement UI

## Phase 7: Apps Store (Vibrant Purple / Dark Indigo)
### 7.1 Apps Layout
- Apps-specific navbar with search
- Purple/Indigo color scheme

### 7.2 App Store Pages
- App categories (Productivity, Learning, Design, Finance, Marketing, Business)
- App cards with download count, ratings
- Creator dashboard
- App detail page

## Phase 8: Odlix Mart (Deep Red / Gold)
### 8.1 Mart Layout
- E-commerce navbar with cart icon
- Red/Gold color scheme

### 8.2 Mart Pages
- Product categories (Electronics, Stationery, Digital Tools, Merchandise, Lifestyle)
- Product cards with images, price, rating
- Cart page
- Checkout flow
- Order tracking

## Phase 9: Student & Admin Dashboards
### 9.1 Student Dashboard
- Profile settings
- My Courses with progress
- Earnings tracker
- Payout requests
- Affiliate tree view
- Leaderboard
- Certificates gallery
- Quiz history
- Social media handles linking

### 9.2 Admin Dashboard
- Student management (view/edit profiles)
- Course management
- Payment tracking
- Affiliate approval
- Notification/Email campaign scheduler
- Revenue reports

## Phase 10: Payments & Affiliate System
### 10.1 Cashfree Integration
- Checkout component
- Payment success/failure handling
- Subscription management
- Invoice generation

### 10.2 Affiliate System
- Referral code generation
- Commission tracking (54%/12% Beginner, 56%/14% Pro, 58%/17% Expert)
- Payout requests
- Team tree visualization
- Leaderboard

## Phase 11: SEO & Marketing Integrations
### 11.1 SEO
- Sitemap.xml generation
- robots.txt
- Proper meta tags on all pages
- OG images for platforms

### 11.2 Integrations
- Email service (welcome, reminders, completion)
- WhatsApp chat button (already exists)
- Newsletter subscription
- Festival bonus announcements

## Phase 12: Final Polish
### 12.1 Responsiveness
- Test all pages on mobile/tablet/desktop
- Fix any layout breaks

### 12.2 Animations
- Smooth page transitions
- Scroll-triggered animations
- Loading states
- Skeleton loaders

### 12.3 Testing
- Build verification
- Link checking
- Auth flow testing
- Payment flow testing (sandbox)

---

## Files to Create/Edit Summary

### New Files (Estimated 50+):
- app/signup/page.tsx
- app/forgot-password/page.tsx
- app/profile/page.tsx
- app/admin/layout.tsx & page.tsx
- app/dashboard/* sub-pages
- app/learning/courses/page.tsx
- app/learning/courses/[slug]/page.tsx
- app/learning/packages/page.tsx
- app/learning/certificates/page.tsx
- app/agency/portfolio/page.tsx
- app/agency/contact/page.tsx
- app/agency/about/page.tsx
- app/tests/[exam]/page.tsx
- app/tests/start/page.tsx
- app/mart/cart/page.tsx
- app/mart/checkout/page.tsx
- app/broker/dashboard/page.tsx
- components/layouts/platform-navbar.tsx (for each platform)
- components/layouts/platform-footer.tsx (for each platform)
- app/api/payments/cashfree/route.ts
- app/api/affiliate/route.ts
- app/sitemap.ts
- app/robots.ts

### Modified Files:
- app/globals.css (update homepage gradient)
- app/layout.tsx (enhance metadata)
- app/(marketing)/page.tsx (enhance homepage)
- All existing platform pages for better quality
- middleware.ts (refine auth paths)

