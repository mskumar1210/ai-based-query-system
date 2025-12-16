Skip links, mobile menu |
| **Footer** | App footer | Low | Links, contact, government info | Semantic structure |
| **KnowledgeBaseGrid** | Browse resources | Medium | Categories, search, filters | Grid semantics, lazy loading |
| **OfficerDashboard** | Officer query management | High | Query queue, priority, assignment | Table semantics, filters |
| **FarmerProfile** | User profile/settings | Medium | Farm details, preferences | Form validation |
| **CropCalendar** | Seasonal reminders | Medium | Timeline, notifications | Date navigation |
| **WeatherWidget** | Current weather info | Low | Location-based, IMD data | Live updates |

---

### Layout Components (Templates)

**1. MainLayout (Farmer Interface)**

```tsx
// components/templates/MainLayout/MainLayout.tsx
import React from 'react';
import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';
import { BottomNav } from '@/components/organisms/BottomNav';

export interface MainLayoutProps {
  children: React.ReactNode;
  showBottomNav?: boolean;
  showFooter?: boolean;
  containerWidth?: 'full' | 'container' | 'narrow';
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  showBottomNav = true,
  showFooter = true,
  containerWidth = 'container',
}) => {
  const containerClasses = {
    full: 'w-full',
    container: 'container mx-auto px-4 max-w-7xl',
    narrow: 'max-w-4xl mx-auto px-4',
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-base-200">
      {/* Skip to main content link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 btn btn-primary"
      >
        പ്രധാന ഉള്ളടക്കത്തിലേക്ക് പോകുക
      </a>
      
      {/* Top navbar */}
      <Navbar />
      
      {/* Main content area */}
      <main 
        id="main-content" 
        className="flex-1 py-6 sm:py-8 pb-20 lg:pb-8" 
        role="main"
      >
        <div className={containerClasses[containerWidth]}>
          {children}
        </div>
      </main>
      
      {/* Footer (desktop) */}
      {showFooter && (
        <Footer className="hidden lg:block" />
      )}
      
      {/* Bottom navigation (mobile) */}
      {showBottomNav && (
        <BottomNav className="lg:hidden" />
      )}
    </div>
  );
};
```

**2. OfficerLayout (Admin Interface)**

```tsx
// components/templates/OfficerLayout/OfficerLayout.tsx
import React from 'react';
import { Sidebar } from '@/components/organisms/Sidebar';
import { OfficerNavbar } from '@/components/organisms/OfficerNavbar';

export interface OfficerLayoutProps {
  children: React.ReactNode;
}

export const OfficerLayout: React.FC<OfficerLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-base-200">
      <OfficerNavbar />
      
      <div className="flex">
        {/* Sidebar navigation */}
        <Sidebar className="hidden lg:block w-64 fixed left-0 top-16 h-[calc(100vh-4rem)] overflow-y-auto" />
        
        {/* Main content */}
        <main className="flex-1 lg:ml-64 p-6" role="main">
          {children}
        </main>
      </div>
    </div>
  );
};
```

---

**Layout Components Inventory:**

| Layout | Purpose | Structure | Use Cases | Notes |
|--------|---------|-----------|-----------|-------|
| **MainLayout** | Farmer interface | Navbar + Content + BottomNav/Footer | Query, History, Profile | Mobile-first, PWA-ready |
| **OfficerLayout** | Officer dashboard | Sidebar + Topbar + Content | Query management, analytics | Desktop-optimized |
| **AuthLayout** | Authentication | Centered form + branding | Login, OTP verification | Government branding |
| **OnboardingLayout** | First-time setup | Stepper + form | Farm setup, preferences | Progress indicator |
| **ErrorLayout** | Error pages | Centered message + action | 404, 500, offline | Friendly messaging |

---

### Page Components

**1. HomePage (Query Interface)**

```tsx
// components/pages/Home/Home.tsx
import React from 'react';
import { MainLayout } from '@/components/templates/MainLayout';
import { QueryInputPanel } from '@/components/organisms/QueryInputPanel';
import { WeatherWidget } from '@/components/organisms/WeatherWidget';
import { CropCalendarWidget } from '@/components/organisms/CropCalendarWidget';

export const HomePage: React.FC = () => {
  const handleQuerySubmit = async (queryData: QueryData) => {
    // Submit query to API
    console.log('Submitting query:', queryData);
  };
  
  return (
    <MainLayout containerWidth="narrow">
      {/* Welcome message */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-base-content mb-2">
          സ്വാഗതം, കൃഷി വാണിയിലേക്ക്
        </h1>
        <p className="text-base-content/70">
          നിങ്ങളുടെ കാർഷിക ചോദ്യങ്ങൾക്ക് ഉത്തരം നേടുക
        </p>
      </div>
      
      {/* Weather widget */}
      <WeatherWidget className="mb-6" />
      
      {/* Main query input */}
      <QueryInputPanel onSubmit={handleQuerySubmit} className="mb-6" />
      
      {/* Crop calendar widget */}
      <CropCalendarWidget />
    </MainLayout>
  );
};
```

**2. HistoryPage (Query History)**

```tsx
// components/pages/History/History.tsx
import React, { useState, useEffect } from 'react';
import { MainLayout } from '@/components/templates/MainLayout';
import { QueryHistoryList } from '@/components/organisms/QueryHistoryList';
import { SearchBar } from '@/components/molecules/SearchBar';

export const HistoryPage: React.FC = () => {
  const [queries, setQueries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    // Fetch query history
    fetchQueryHistory();
  }, []);
  
  const fetchQueryHistory = async () => {
    // API call
  };
  
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-base-content mb-4">
          ചോദ്യ ചരിത്രം
        </h1>
        
        <SearchBar
          value={searchTerm}
          onSearch={setSearchTerm}
          placeholder="ചരിത്രത്തിൽ തിരയുക..."
        />
      </div>
      
      <QueryHistoryList
        queries={queries}
        searchTerm={searchTerm}
      />
    </MainLayout>
  );
};
```

---

**Page Components Inventory:**

| Page | Route | Layout | Key Sections | Purpose |
|------|-------|--------|--------------|---------|
| **HomePage** | `/` | MainLayout | QueryInput, Weather, Calendar | Main query interface |
| **HistoryPage** | `/history` | MainLayout | Search, QueryList | View past queries |
| **KnowledgeBasePage** | `/knowledge` | MainLayout | Categories, ResourceGrid | Browse resources |
| **ProfilePage** | `/profile` | MainLayout | FarmDetails, Settings | Manage profile |
| **LoginPage** | `/login` | AuthLayout | Phone input, OTP | Authentication |
| **OnboardingPage** | `/onboarding` | OnboardingLayout | Farm setup wizard | First-time setup |
| **OfficerDashboardPage** | `/officer` | OfficerLayout | QueryQueue, Analytics | Officer interface |
| **NotFoundPage** | `*` | ErrorLayout | 404 message | Error handling |

---

## Google Stitch Wireframe Structure

### Wireframe Guidelines

**Design Tool:** Google Stitch (or Figma/Excalidraw as alternatives)

**Viewport Sizes to Design:**
- Mobile: 375px x 667px (iPhone SE - primary target)
- Tablet: 768px x 1024px
- Desktop: 1440px x 900px

**Component States to Show:**
- Default
- Hover (desktop only)
- Active/Focus
- Loading
- Error
- Empty state

---

### Page 1: Home / Query Interface (`/`)

**Purpose:** Primary interface for farmers to ask questions

**Layout Type:** Mobile-first, single column

**Block Structure:**

**Block 1 - Header/Navbar:**
- **Component Type:** Navigation bar
- **Elements:**
    - Logo (left): "കൃഷി വാണി" with Government of Kerala emblem
    - Language toggle (right): ML/EN buttons
    - Profile icon (right): User avatar/login
    - Notifications bell (right): Alert count badge
- **Responsive:** Collapses to hamburger on mobile, full on desktop

**Block 2 - Welcome Banner:**
- **Component Type:** Hero section (compact)
- **Elements:**
    - Greeting: "സ്വാഗതം, [Name]" (or generic if not logged in)
    - Subtitle: "നിങ്ങളുടെ കാർഷിക ചോദ്യങ്ങൾക്ക് ഉത്തരം നേടുക"
    - Weather widget (inline): Today's weather with icon + temp
- **Background:** Subtle gradient (primary-light)
- **Responsive:** Full width, padding adjusts

**Block 3 - Query Input Panel (Primary CTA):**
- **Component Type:** Tabbed card interface
- **Elements:**
    - Mode tabs (3): Voice | Text | Image (icons + labels)
    - Active panel content:
        - **Voice:** Large mic button (primary color, pulsing when active), recording indicator, transcript display
        - **Text:** Large textarea with Malayalam placeholder, character count
        - **Image:** Camera button + Gallery button, image preview area
    - Crop selector dropdown (below input)
    - Location indicator (with edit option)
    - Submit button (large, primary, full-width): "സമർപ്പിക്കുക"
- **Placeholder Content:**
    - Voice: "മൈക്രോഫോൺ അമർത്തി ചോദ്യം പറയുക"
    - Text: "ഉദാ: നെല്ലിന് ഇലപ്പുള്ളി രോഗം, എന്ത് മരുന്ന് ഉപയോഗിക്കണം?"
- **Responsive:** Card full-width on mobile, max-width on desktop

**Block 4 - Quick Actions / Shortcuts:**
- **Component Type:** Horizontal scrollable cards
- **Elements:**
    - Card 1: "എന്റെ ചരിത്രം" (History) - icon + label
    - Card 2: "അറിവ് ശേഖരം" (Knowledge Base) - icon + label
    - Card 3: "കാലാവസ്ഥ വിവരം" (Weather) - icon + label
    - Card 4: "വിള കലണ്ടർ" (Crop Calendar) - icon + label
- **Responsive:** Scroll horizontally on mobile, grid on desktop

**Block 5 - Crop Calendar Widget (Contextual):**
- **Component Type:** Timeline card
- **Elements:**
    - Title: "ഈ മാസത്തെ പ്രവർത്തനങ്ങൾ"
    - Timeline items (3-4):
        - Icon (calendar/plant)
        - Activity name: "വളം ഇടുക"
        - Date range: "ഡിസംബർ 15-20"
        - CTA: "കൂടുതൽ അറിയുക"
- **Responsive:** Stacks vertically, slightly compressed on mobile

**Navigation:**
- **Entry Points:** Direct URL, app launch
- **Exit Points:** History page, Knowledge Base, Profile
- **Primary CTA:** "സമർപ്പിക്കുക" button in query panel

---

### Page 2: Query Result / Response (`/query/:id`)

**Purpose:** Display AI-generated answer to farmer's question

**Layout Type:** Single column, response-focused

**Block 1 - Header (same as Home):**
- Back button (left) to return to home
- Query ID for reference

**Block 2 - Original Query Recap:**
- **Component Type:** Compact card
- **Elements:**
    - User's question text (highlighted)
    - Timestamp
    - Crop badge (if specified)
    - Image thumbnail (if uploaded) - click to expand
- **Responsive:** Full width

**Block 3 - AI Response Card:**
- **Component Type:** Large content card
- **Elements:**
    - Confidence badge (top-right): "85% ഉറപ്പ്" with icon
    - Audio playback button: "ഉത്തരം കേൾക്കുക" (Play icon)
    - Response text (large, readable font)
    - Recommendations section (if any):
        - Heading: "ശുപാർശകൾ"
        - Bulleted list with checkmark icons
    - Sources (collapsible):
        - "ഉറവിടങ്ങൾ (3)" - expandable
        - List of source citations
- **Responsive:** Padding adjusts, audio button prominent on mobile

**Block 4 - Related Images/Visual Aids:**
- **Component Type:** Image gallery
- **Elements:**
    - Comparison images (healthy vs diseased crop)
    - Treatment demonstration images
    - Swipeable on mobile
- **Responsive:** Horizontal scroll on mobile, grid on desktop

**Block 5 - Action Buttons:**
- **Component Type:** Button group
- **Elements:**
    - "വീണ്ടും ചോദിക്കുക" (Ask Again) - secondary
    - "ഉദ്യോഗസ്ഥനോട് സംസാരിക്കുക" (Talk to Officer) - if low confidence
    - "പങ്കിടുക" (Share) - outline
- **Responsive:** Stack vertically on mobile

**Block 6 - Feedback Section:**
- **Component Type:** Feedback card
- **Elements:**
    - Question: "ഈ ഉത്തരം സഹായകരമായിരുന്നോ?"
    - Thumbs up/down buttons
    - Optional text feedback box (if negative)
- **Responsive:** Inline on desktop, stacked on mobile

**Navigation:**
- **Entry Points:** From query submission, history list
- **Exit Points:** Back to home, officer escalation, share
- **Primary CTA:** Feedback buttons

---

### Page 3: Query History (`/history`)

**Purpose:** Browse past queries and responses

**Layout Type:** List view with filters

**Block 1 - Header:**
- **Component Type:** Page header with search
- **Elements:**
    - Title: "ചോദ്യ ചരിത്രം"
    - Search bar: "തിരയുക..." with search icon
    - Filter button: Icon + "ഫിൽട്ടർ" (opens filter panel)
- **Responsive:** Search full-width on mobile

**Block 2 - Filter Panel (Collapsible):**
- **Component Type:** Filter sidebar/panel
- **Elements:**
    - Status filter: All | Answered | Pending | Escalated
    - Crop filter: Multi-select dropdown
    - Date range: Date picker
    - "പ്രയോഗിക്കുക" (Apply) button
- **Responsive:** Drawer on mobile, sidebar on desktop

**Block 3 - Query List:**
- **Component Type:** Scrollable list of query cards
- **Elements (per card):**
    - Status badge (top-right): Answered/Pending/Escalated
    - Timestamp (top-left): "2 മണിക്കൂർ മുമ്പ്"
    - Question text (truncated to 2 lines)
    - Answer preview (if available, 2 lines)
    - Metadata: Crop badge, image indicator, confidence score
    - Tap/click to view full details
- **Placeholder Content:** "നിങ്ങൾക്ക് ഇതുവരെ ചോദ്യങ്ങളില്ല" (empty state)
- **Responsive:** Cards full-width with padding

**Block 4 - Pagination / Load More:**
- **Component Type:** Load more button
- **Elements:**
    - "കൂടുതൽ കാണിക്കുക" button
    - Loading spinner when fetching
- **Responsive:** Full-width button

**Navigation:**
- **Entry Points:** Bottom nav, home shortcuts
- **Exit Points:** Individual query detail pages
- **Primary CTA:** Query cards (to detail view)

---

### Page 4: Knowledge Base / Resources (`/knowledge`)

**Purpose:** Browse agricultural resources, guides, videos

**Layout Type:** Grid with categories

**Block 1 - Header:**
- **Component Type:** Page header with search
- **Elements:**
    - Title: "അറിവ് ശേഖരം"
    - Search bar with filters
- **Responsive:** Standard header treatment

**Block 2 - Category Tabs:**
- **Component Type:** Horizontal tab navigation
- **Elements:**
    - All | Crops | Pests | Fertilizers | Schemes | Videos
    - Active tab indicator (underline, primary color)
- **Responsive:** Scrollable on mobile

**Block 3 - Resource Grid:**
- **Component Type:** Card grid
- **Elements (per card):**
    - Thumbnail image/icon
    - Title (Malayalam)
    - Brief description (1-2 lines)
    - Type badge: Article | Video | PDF
    - View count (optional)
- **Grid Layout:** 1 column (mobile), 2 columns (tablet), 3 columns (desktop)
- **Responsive:** Cards adjust size

**Block 4 - Featured Resource (Top):**
- **Component Type:** Hero card (larger)
- **Elements:**
    - Large image
    - "ഫീച്ചർ ചെയ്തത്" badge
    - Title + description
    - CTA: "കൂടുതൽ വായിക്കുക"
- **Responsive:** Full-width on all devices

**Navigation:**
- **Entry Points:** Bottom nav, home shortcuts
- **Exit Points:** Individual resource detail pages
- **Primary CTA:** Resource cards

---

### Page 5: Farmer Profile (`/profile`)

**Purpose:** Manage farm details, preferences, settings

**Layout Type:** Form-based sections

**Block 1 - Header:**
- **Component Type:** Profile header
- **Elements:**
    - Avatar (editable)
    - Name
    - Phone number
    - Edit button
- **Responsive:** Centered on mobile

**Block 2 - Farm Details Section:**
- **Component Type:** Form section
- **Elements:**
    - Farm name (input)
    - Location (map picker + text)
    - Total land area (input + unit)
    - Crops grown (multi-select)
    - Save button
- **Responsive:** Form fields stack

**Block 3 - Preferences Section:**
- **Component Type:** Settings list
- **Elements:**
    - Language preference: ML/EN toggle
    - Notification preferences: Toggles for each type
    - Voice input default: On/Off
- **Responsive:** List items full-width

**Block 4 - Query Statistics (Optional):**
- **Component Type:** Stats cards
- **Elements:**
    - Total queries
    - Resolved queries
    - Pending queries
- **Responsive:** 2-column on mobile, 3-column on desktop

**Block 5 - Account Actions:**
- **Component Type:** Action list
- **Elements:**
    - "ബന്ധപ്പെടുക" (Contact Support)
    - "വിഷയം" (About)
    - "ലോഗ് ഔട്ട്" (Logout) - danger color
- **Responsive:** Full-width buttons

**Navigation:**
- **Entry Points:** Bottom nav, navbar profile icon
- **Exit Points:** Logout to login page
- **Primary CTA:** Save button

---

### Page 6: Officer Dashboard (`/officer`)

**Purpose:** Agricultural officers manage escalated queries

**Layout Type:** Dashboard with sidebar (desktop-first)

**Block 1 - Topbar:**
- **Component Type:** Dashboard header
- **Elements:**
    - Logo + "Officer Dashboard"
    - Officer name + avatar
    - Notifications
    - Logout
- **Responsive:** Hamburger menu on mobile

**Block 2 - Sidebar Navigation:**
- **Component Type:** Vertical nav menu
- **Elements:**
    - Dashboard (icon + label)
    - Query Queue
    - Analytics
    - Resources
    - Settings
- **Responsive:** Drawer on mobile, fixed sidebar on desktop

**Block 3 - Stats Overview:**
- **Component Type:** Stat cards row
- **Elements:**
    - Pending queries (count + icon)
    - Resolved today (count + icon)
    - Average response time
    - Farmer satisfaction (percentage)
- **Responsive:** 2x2 grid on mobile, row on desktop

**Block 4 - Query Queue Table:**
- **Component Type:** Data table
- **Elements:**
    - Columns: Query ID, Farmer, Question (truncated), Crop, Priority, Time, Action
    - Sort by: Time, Priority
    - Action button per row: "View Details"
    - Pagination controls
- **Responsive:** Horizontal scroll on mobile, full table on desktop

**Block 5 - Quick Filters:**
- **Component Type:** Filter chips
- **Elements:**
    - All | High Priority | Pending | Today
    - Active chip highlighted
- **Responsive:** Horizontal scroll

**Navigation:**
- **Entry Points:** Officer login
- **Exit Points:** Individual query detail pages
- **Primary CTA:** "View Details" on each query

---

### Page 7: Login / Authentication (`/login`)

**Purpose:** Phone-based login with OTP

**Layout Type:** Centered form

**Block 1 - Branding Header:**
- **Component Type:** Centered logo
- **Elements:**
    - Large logo: "കൃഷി വാണി"
    - Government of Kerala emblem
    - Tagline
- **Responsive:** Scales down on mobile

**Block 2 - Login Card:**
- **Component Type:** Centered form card
- **Elements:**
    - Step 1: Phone number input
        - Label: "മൊബൈൽ നമ്പർ"
        - Input: +91 prefix, 10 digits
        - "OTP അയയ്ക്കുക" button
    - Step 2: OTP input (after Step 1)
        - 6-digit OTP input boxes
        - "സ്ഥിരീകരിക്കുക" button
        - Resend OTP link
    - Error messages (if applicable)
- **Responsive:** Max-width 400px, centered

**Block 3 - Footer Links:**
- **Component Type:** Text links
- **Elements:**
    - "Help & Support"
    - "About"
- **Responsive:** Centered

**Navigation:**
- **Entry Points:** App launch (if not logged in), logout
- **Exit Points:** Home page (after successful login)
- **Primary CTA:** "സ്ഥിരീകരിക്കുക" button

---

### Responsive Wireframe Constraints

**Mobile (<640px):**
- Single column layouts
- Bottom navigation visible
- Cards full-width with 16px padding
- Large touch targets (48px minimum)
- Horizontal scrolling for card groups
- Hamburger menu for navigation

**Tablet (640px-1023px):**
- 2-column layouts for grids
- Sidebar navigation can appear
- Touch targets remain large (44px)
- More breathing room (24px padding)

**Desktop (≥1024px):**
- 3-4 column grid layouts
- Persistent sidebar navigation
- Hover states visible
- Compact touch targets acceptable (40px)
- Footer always visible
- No bottom navigation

---

### Wireframe Export & Documentation

**Export Requirements:**
1. **Screenshots for each page:**
    - Mobile (375px)
    - Tablet (768px)
    - Desktop (1440px)

2. **Component annotations:**
    - Label all interactive elements
    - Specify tap/click areas
    - Note state changes (hover, focus, active)
    - Mark scroll directions

3. **Color & spacing notes:**
    - Primary CTA: btn-primary (green)
    - Secondary actions: btn-secondary (brown)
    - Card shadows: shadow-lg
    - Spacing: 4px increments (gap-4, p-6, etc.)

4. **Accessibility notes:**
    - Min touch target size: 48x48px
    - Focus indicators: 2px primary outline
    - Text contrast: WCAG AA minimum
    - Screen reader labels for icon-only buttons

5. **Component mapping:**
    - List all reusable components used
    - Map to actual code components (atoms, molecules, organisms)
    - Note any custom components needed

---

**End of Krishi Vaani PRD Document**

---

## Implementation Roadmap (12 Days)

### Phase 1: Foundation & Core Features (Days 1-8)

**Days 1-2: Project Setup & Infrastructure**
- Initialize React + TypeScript project with Vite
- Configure TailwindCSS + DaisyUI theme
- Set up backend (Node.js + Express + MongoDB)
- Implement authentication (JWT + OTP)
- Configure Google Cloud services (Speech-to-Text, Vision API, Vertex AI)
- Set up i18n for Malayalam/English
- Create base component library (atoms)

**Days 3-4: Voice & Image Input**
- Implement voice recording functionality
- Integrate Google Cloud Speech-to-Text (Malayalam)
- Build image upload & compression
- Connect to Google Cloud Vision API for disease detection
- Create query submission flow
- Implement offline queueing

**Days 5-6: AI Response Engine**
- Fine-tune LLM with Kerala agricultural data
- Build context-aware query processing
- Implement response generation
- Add confidence scoring
- Create text-to-speech for responses
- Build response display UI

**Days 7-8: User Features**
- Implement query history
- Add farmer profile management
- Build crop selector & location picker
- Create weather widget (IMD integration)
- Implement notification system
- Add feedback mechanism

### Phase 2: Enhanced Features (Days 9-11)

**Days 9-10: Officer Dashboard & Escalation**
- Build officer authentication
- Create query escalation logic
- Develop officer dashboard
- Implement query assignment system
- Add analytics & reporting
- Build real-time notifications (Socket.io)

**Day 11: Knowledge Base & Resources**
- Create resource management system
- Build category browsing
- Implement search functionality
- Add video library
- Create government schemes database
- Implement market price integration

### Phase 3: Polish & Testing (Day 12)

**Day 12: Testing, Optimization & Deployment**
- Comprehensive testing (functionality, accessibility, performance)
- Optimize for low-bandwidth networks
- PWA configuration & offline support
- User acceptance testing with farmers
- Security audit
- Deployment to Google Cloud
- Documentation & training materials

---

## Success Metrics

**User Engagement:**
- Daily active farmers
- Average queries per user
- Voice vs text vs image input ratio
- Query completion rate

**Response Quality:**
- Average confidence score
- Farmer satisfaction rating (thumbs up/down)
- Officer escalation rate
- Resolution time

**Technical Performance:**
- API response time (<2s for text, <5s for voice/image)
- Offline functionality success rate
- Speech recognition accuracy (Malayalam)
- Image classification accuracy
- App load time (<3s on 3G)

**Agricultural Impact:**
- Most common crop issues identified
- Seasonal query patterns
- Regional agricultural trends
- Farmer retention rate
- Officer workload reduction

---

**Document Version:** 1.0  
**Last Updated:** December 16, 2025  
**Project:** Krishi Vaani - AI-Based Farmer Query Support System  
**Organization:** Government of Kerala - Department of Agriculture  
**Target Launch:** 12-day MVP Development Cycle