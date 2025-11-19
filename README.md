# HydrogenMalaysia Website

A professional, modern website for HydrogenMalaysia - Malaysia's premier hydrogen industry association.

## 🎯 Project Overview

This website is designed to establish credibility, build trust, and drive membership signups for HydrogenMalaysia. The design emphasizes professionalism, authority, and accessibility for nonprofit founders, directors, staff, and tax professionals.

## ✨ Key Features

### Design & Branding
- **Professional Color Scheme**: Navy blue (#003366) primary with teal (#008B8B) and green (#2E8B57) accents
- **Trust-Building Elements**: Clean layouts, generous whitespace, credibility indicators
- **Responsive Design**: Mobile-first approach, works beautifully on all devices
- **Accessible**: WCAG-compliant color contrasts and semantic HTML

### Pages & Sections

1. **Homepage**
   - Hero section with compelling value proposition
   - Animated statistics (150+ members, 50+ events, 200+ research papers)
   - Value propositions highlighting industry authority
   - Upcoming events preview
   - Latest news and research
   - Member testimonials
   - Strong call-to-action for membership signup

2. **About Page**
   - Mission and vision statements
   - What we do (6 key areas)
   - Impact metrics
   - Leadership team showcase
   - Trust indicators

3. **Join/Membership Page**
   - Detailed membership benefits
   - Three membership tiers (Corporate, SME, Startup/Academic)
   - Clear pricing and feature comparison
   - Professional application form
   - Member testimonials

4. **Events Page**
   - Upcoming events with filtering
   - Detailed event information
   - Registration CTAs
   - Past events gallery preview

5. **News & Research Page**
   - Latest news with category filtering
   - Featured stories
   - Research library (200+ publications)
   - Downloadable research papers
   - Newsletter signup

6. **Gallery Page**
   - Event photo galleries
   - Video highlights
   - Social media integration
   - Filterable by event type

7. **Members Page**
   - Member directory by category
   - Member statistics
   - Testimonials
   - Membership benefits overview

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Colors
- **Primary (Navy Blue)**: `#003366` - Authority, trust, professionalism
- **Accent (Teal)**: `#008B8B` - Innovation, reliability
- **Success (Green)**: `#2E8B57` - Environmental focus, sustainability

### Typography
- **Headings**: Poppins (bold, professional)
- **Body**: Inter (clean, readable)

### Components
- Custom button styles (primary, accent, outline)
- Reusable card components
- Section layouts with consistent spacing
- Gradient backgrounds for emphasis

## 📱 Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Google Fonts (Inter, Poppins)

## 🔧 Customization

### Adding Content

1. **Events**: Edit the events array in `app/events/page.tsx`
2. **News**: Update news articles in `app/news/page.tsx`
3. **Members**: Modify member directory in `app/members/page.tsx`
4. **Gallery**: Add gallery items in `app/gallery/page.tsx`

### Styling

All custom styles are in:
- `app/globals.css` - Global styles and utility classes
- `tailwind.config.ts` - Color scheme and theme configuration

### Navigation

Update navigation links in `components/Navigation.tsx`

## 📊 Key Selling Points Highlighted

1. **Authority**: "Malaysia's Premier Hydrogen Authority" messaging throughout
2. **Research Access**: 200+ research papers and technical reports
3. **Events**: 50+ annual events with exclusive member access
4. **Networking**: 150+ member organizations across the value chain
5. **Policy Influence**: Direct engagement with government officials
6. **Credibility**: Association with leading organizations (Petronas, TNB, etc.)

## 🎯 Conversion Optimization

- Multiple CTAs throughout the site
- Clear membership benefits on every page
- Social proof (testimonials, member counts, trust badges)
- Low-friction signup process
- Member success stories
- Urgency indicators ("Limited Seats", "Registration Open")

## 📝 Next Steps

1. **Add Real Images**: Replace emoji placeholders with professional photos
2. **Integrate Backend**: Connect forms to your email/CRM system
3. **Add CMS**: Consider adding Sanity.io or similar for content management
4. **SEO Optimization**: Add meta descriptions, structured data
5. **Analytics**: Integrate Google Analytics or similar
6. **Live Chat**: Add support widget for inquiries
7. **Member Portal**: Build authenticated area for members
8. **Payment Integration**: Add Stripe/PayPal for membership payments

## 🌐 Deployment

### Recommended Platforms
- **Vercel** (easiest for Next.js)
- **Netlify**
- **AWS Amplify**
- **DigitalOcean App Platform**

### Environment Variables
Create a `.env.local` file for:
- Email service credentials
- Payment gateway keys
- CMS API keys

## 📞 Support

For questions or customization requests, contact the development team.

## 📄 License

Copyright © 2024 HydrogenMalaysia. All rights reserved.

---

Built with ❤️ for Malaysia's clean energy future
