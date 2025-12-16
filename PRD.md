Product Requirements Document (PRD)
Krishi Vaani - AI-Based Farmer Query Support and Advisory System

Project Information
Project Title
Krishi Vaani (Voice of Agriculture)

Project Description
Short Description:
Krishi Vaani is an AI-powered multilingual advisory system that provides instant, context-aware agricultural guidance to Malayalam-speaking farmers through voice, text, and image inputs, making expert farming knowledge accessible 24/7.
Long Description:
The agricultural sector in Kerala faces a critical challenge: farmers need immediate access to expert advice on pests, diseases, weather patterns, input management, subsidies, and market trends, but traditional extension services are overwhelmed and cannot scale to meet individual needs across diverse regions and literacy levels. Agricultural officers and helplines are overburdened, leading to delayed responses during critical farming periods when timing is everything.
Krishi Vaani addresses this gap by serving as a "Digital Krishi Officer"—an AI-powered advisory system that democratizes access to agricultural expertise. The platform enables farmers to ask questions in their native Malayalam language through voice or text, upload images of diseased crops for instant diagnosis, and receive personalized, context-aware recommendations based on their location, crop type, season, and farming history.
Built on advanced Large Language Models fine-tuned with Kerala-specific agricultural datasets, crop calendars, pest advisories, weather patterns, and government scheme guidelines, Krishi Vaani provides reliable, actionable advice instantly. The system understands the nuances of local farming practices, regional variations in cultivation methods, and the specific challenges faced by small and marginal farmers across Kerala's diverse agro-climatic zones.
For complex queries requiring human expertise, Krishi Vaani intelligently escalates issues to local agricultural officers with complete context and AI-suggested solutions, making their work more efficient. The system continuously learns from real farmer interactions, feedback loops, and expert validations, improving its accuracy and relevance over time.
By bridging the communication gap between farmers and the agricultural extension system, Krishi Vaani supports the Department of Agriculture's mission to enhance productivity, reduce crop losses, and improve farmer livelihoods across Kerala. The platform is designed to work seamlessly with existing Krishibhavan infrastructure while being accessible to farmers with varying levels of digital literacy and connectivity.

Learning Objectives
Primary Learning Outcomes:

AI/ML Integration: Implementing and fine-tuning Large Language Models (LLMs) for domain-specific agricultural advisory with multilingual support
Multimodal Input Processing: Building systems that handle voice, text, and image inputs with context preservation and intelligent routing
Real-time Context Management: Developing location-aware, season-aware, and user-history-aware recommendation engines
Accessibility-First Development: Creating interfaces optimized for low-literacy users, voice-first interactions, and low-bandwidth rural networks
Government System Integration: Understanding and implementing solutions that work within government IT infrastructure and data governance frameworks

Secondary Learning Outcomes:

Natural Language Processing (NLP): Malayalam language processing, dialect handling, and voice-to-text optimization
Computer Vision for Agriculture: Image classification for crop diseases, pest identification, and deficiency detection
Progressive Web App (PWA) Development: Building offline-capable applications for unreliable connectivity scenarios
Data Privacy & Security: Implementing secure systems handling sensitive farmer data within government compliance requirements


Technology Stack
Frontend:

Build Tool: Vite 6.x
Framework: React 19 with TypeScript 5
Routing: React Router v7
State Management: Zustand 5.x for client state, TanStack Query v5 for server state
Styling: TailwindCSS v4 + DaisyUI v5.5
Icons: Google Material Symbols (Rounded variant)
Voice Input: Web Speech API + Google Cloud Speech-to-Text API (Malayalam support)
Image Handling: React Dropzone, Image compression libraries
PWA Support: Workbox for service workers and offline functionality
Additional Libraries:

i18next for internationalization (Malayalam/English)
react-hot-toast for notifications
framer-motion for smooth animations
react-hook-form + zod for form validation



Backend:

Runtime: Node.js v22 LTS
Language: TypeScript 5
Framework: Express.js v5
Database: MongoDB with Mongoose v9 (farmer profiles, query history, crop data)
Cache Layer: Redis for session management and response caching
File Storage: Google Cloud Storage for images
AI/ML Services:

Google Cloud Vertex AI (LLM - Gemini Pro for Malayalam)
Google Cloud Vision API (crop disease image analysis)
Custom fine-tuned models for Kerala-specific agricultural data


Real-time Communication: Socket.io for officer escalation notifications
Authentication: JWT-based authentication with OTP verification
API Documentation: OpenAPI/Swagger

Infrastructure & DevOps:

Cloud Provider: Google Cloud Platform (Kerala government approved)
Containerization: Docker
CI/CD: GitHub Actions
Monitoring: Google Cloud Monitoring + Logging
Analytics: Google Analytics 4 for usage tracking


MVP Scope
Phase 1: Core Advisory Platform (Days 1-8)
Priority: P0 (Must Have)

Multilingual Query System

Voice input in Malayalam with speech-to-text conversion
Text input with Malayalam keyboard support
AI-powered response generation using fine-tuned LLM
Query history and bookmarking
Voice output for responses (text-to-speech in Malayalam)


Image-Based Crop Disease Detection

Camera/gallery image upload functionality
AI-powered disease identification (10 major Kerala crops)
Treatment recommendations with pesticide details
Image history and comparison
Offline image queuing for poor connectivity


Context-Aware Advisory Engine

Location-based recommendations (district/block level)
Crop-specific advice based on user profile
Season-aware suggestions (monsoon, summer, harvest calendars)
Weather integration (IMD data for Kerala)
Personalized dashboard with farming timeline



Phase 2: Enhanced Features (Days 9-11)
Priority: P1 (Should Have)

Officer Escalation System

Complex query identification and escalation
Officer dashboard for assigned queries
Response tracking and SLA monitoring
Farmer notification system for officer responses


Knowledge Base & Resources

Searchable agricultural resource library
Government scheme information with eligibility checker
Market price information (daily updates from regulated markets)
Best practices video library (Malayalam dubbed)
Downloadable pest management calendars


User Profile & History Management

Farmer registration with farm details (crops, land size, location)
Query history with status tracking
Favorite solutions and bookmarks
Farming activity log and reminders



Phase 3: Advanced Features (Day 12+)
Priority: P2 (Nice to Have - Post-MVP)

Community Features

Success story sharing
Peer-to-peer farmer discussions (moderated)
Expert webinar schedules and recordings


Advanced Analytics

Crop yield prediction models
Pest outbreak alerts by region
Input cost optimization recommendations


Admin Dashboard

Query analytics and trending issues
System performance monitoring
Content management for knowledge base
User engagement metrics




Target Users / Personas
Primary Persona: Traditional Farmer - Krishnan

Demographics:

Age: 45-65 years
Location: Rural Kerala (Palakkad district)
Occupation: Small-scale paddy and coconut farmer (2 acres)
Tech Savviness: Low (owns basic smartphone, uses WhatsApp)
Education: Primary to secondary school
Language: Malayalam (limited English)


Goals & Motivations:

Quickly identify and treat crop diseases before they spread
Understand when to apply fertilizers and pesticides for best results
Learn about government subsidies and schemes applicable to their farm
Get reliable advice without traveling to Krishibhavan
Improve crop yield and reduce input costs


Pain Points:

Cannot type well in Malayalam or English; prefers speaking
Limited time due to farming responsibilities
Unreliable internet connectivity in rural areas
Difficulty reading long text instructions
Skeptical of new technology but desperate for solutions during crop emergencies
Agricultural officers are often unavailable or take days to respond


User Needs:

Simple voice-based interface requiring minimal typing
Instant answers in Malayalam (preferred) or simple Hindi
Visual guidance (images/videos) over text
Works with slow/intermittent internet connection
Can identify crop problems from photos
Trustworthy information backed by government/experts



Secondary Persona: Progressive Young Farmer - Meera

Demographics:

Age: 25-35 years
Location: Semi-urban Kerala (Thrissur)
Occupation: Commercial vegetable farmer (5 acres), college educated
Tech Savviness: High (smartphone power user, social media active)
Education: Graduate degree
Language: Bilingual (Malayalam/English)


Goals & Motivations:

Optimize farming practices using modern technology
Access market intelligence for better pricing decisions
Learn about organic/sustainable farming methods
Connect with other progressive farmers
Build a profitable, scalable farming business
Stay updated on latest agricultural innovations


Pain Points:

Fragmented information across multiple sources (websites, WhatsApp groups, apps)
Difficulty finding Kerala-specific agricultural advice
Generic solutions that don't account for local climate/soil
Lack of data-driven decision support
Time-consuming to contact multiple experts for different issues


User Needs:

Comprehensive platform with all farming information in one place
Data-driven insights and analytics
Quick text-based queries with detailed responses
Integration with market price trends
Ability to compare different farming techniques
Community connection with other innovative farmers



Tertiary Persona: Agricultural Officer - Dr. Ramesh

Demographics:

Age: 35-55 years
Location: Krishibhavan, Kerala
Occupation: Agricultural Extension Officer
Tech Savviness: Medium to High
Education: Agriculture degree/diploma
Language: Malayalam, English, Hindi


Goals & Motivations:

Efficiently serve more farmers with limited resources
Reduce repetitive queries and focus on complex cases
Track agricultural trends and issues in their jurisdiction
Provide timely advice during critical farming periods
Meet departmental targets and KPIs


Pain Points:

Overwhelmed with repetitive, basic queries via phone/in-person
Limited time to address all farmer concerns
Difficult to track query history and follow-ups
Cannot reach farmers in remote areas easily
Lack of data on common problems across their region


User Needs:

Dashboard showing escalated queries requiring expert attention
AI-suggested solutions to review and approve
Query prioritization based on urgency/complexity
Farmer contact history and farming profile
Regional analytics on pest outbreaks and crop issues
Mobile access to respond from field visits




Branding, Theming & Visual Identity
Brand Identity
Brand Name: Krishi Vaani (कृषि वाणी / കൃഷി വാണി)
Tagline: "കർഷകന്റെ ശബ്ദം, വിദഗ്ദ്ധന്റെ ഉത്തരം" (Farmer's Voice, Expert's Answer)
Brand Personality:

Tone: Trustworthy, Accessible, Empowering, Warm
Voice: Conversational, Supportive, Expert yet Approachable, Never Condescending
Mood: Hopeful, Reliable, Grounded, Progressive

Brand Values:

Accessibility First - Agricultural knowledge should reach every farmer, regardless of literacy, location, or digital skills
Trust & Accuracy - Providing scientifically-backed, locally-relevant advice that farmers can depend on for their livelihoods
Farmer-Centric - Built around farmer needs, speaking their language, respecting their knowledge and time
Continuous Learning - Improving through farmer feedback, local expertise, and evolving agricultural practices

Brand Story:
In the verdant landscapes of Kerala, where farming is both heritage and livelihood, farmers face daily challenges that demand immediate expert guidance. Krishi Vaani was born from a simple truth: every farmer deserves instant access to agricultural expertise, just as every crop deserves the right care at the right time. Named "Voice of Agriculture," Krishi Vaani listens in Malayalam, sees through farmers' eyes via images, and responds with the wisdom of experienced agricultural officers—available 24/7, accessible from any field, reliable in every season. It's not just technology; it's a companion in cultivation, a digital extension of Kerala's rich agricultural heritage.

Logo & Visual Assets
Logo Specifications:

Primary Logo:

Combines a stylized microphone wave (representing "Vaani"/voice) with a sprouting plant leaf
Text "Krishi Vaani" in both Malayalam (കൃഷി വാണി) and English
Government of Kerala emblem positioned top-left as per state guidelines


Logo Variations:

Full color for digital (primary)
White version for dark backgrounds
Monochrome for government letterheads
Icon-only for app icon and favicons
Horizontal and stacked layouts


Safe Space: Minimum clear space equal to the height of the "K" in "Krishi"
Minimum Size: 120px width for digital, 1 inch for print
File Formats: SVG (primary), PNG (various sizes), PDF (print)

Imagery Style:

Photography:

Authentic images of Kerala farmers in actual farming contexts
Focus on hands working with soil, crops, and tools
Bright, natural lighting showing lush green farmlands
Diverse representation: young and old, male and female farmers
Avoid stock photos; prioritize real farmer documentation


Illustrations:

Flat, friendly style with rounded edges
Simplified crop and plant iconography
Use for onboarding, empty states, and feature explanations
Maintain consistency with Kerala's agricultural context (paddy, coconut, rubber, spices)


Icons:

Google Material Symbols - Rounded variant for soft, approachable feel
Custom agricultural icons for crop types and farming activities
Consistent 24dp grid system


Patterns/Textures:

Subtle rice grain pattern for backgrounds (very low opacity)
Organic, flowing lines representing growth and connection
Never overwhelming; always supporting content readability




Color System (OKLCH)
Understanding OKLCH:
OKLCH is a perceptual color space that provides:

L (Lightness): 0-100% (0 = black, 100 = white)
C (Chroma): 0-0.4 (0 = grayscale, higher = more vibrant)
H (Hue): 0-360 degrees (color wheel position)

Color Palette Definition:
Primary Brand Color (Fertile Green)
css--color-primary: oklch(58% 0.18 142);
--color-primary-content: oklch(98% 0.01 142);
Example: oklch(58% 0.18 142) - Rich, natural green

Usage: Primary CTAs, active states, voice recording indicator, success confirmations, key agricultural actions, main navigation highlights
Meaning: Growth, fertility, agriculture, trust, Kerala's lush farmlands
Accessibility: Contrast ratio with base-100: 4.8:1 (AA compliant)
Cultural Relevance: Represents the greenery of Kerala's agricultural landscape

Color Variations:

Lighter (hover/background): oklch(68% 0.16 142) - Softer green for hover states
Darker (active/pressed): oklch(48% 0.20 142) - Deep green for active buttons
Very light (badges/tags): oklch(88% 0.08 142) - Subtle green background


Secondary Brand Color (Earth Brown)
css--color-secondary: oklch(52% 0.10 45);
--color-secondary-content: oklch(98% 0.01 45);
Example: oklch(52% 0.10 45) - Warm earth brown

Usage: Secondary CTAs, officer dashboard elements, knowledge base sections, supporting actions, category tags
Meaning: Soil, foundation, reliability, grounding, agricultural roots
Accessibility: Contrast ratio with base-100: 5.2:1 (AA+ compliant)
Cultural Relevance: Represents the rich soil of Kerala's farmlands

Color Variations:

Lighter: oklch(62% 0.09 45) - Tan for backgrounds
Darker: oklch(42% 0.12 45) - Deep earth for emphasis


Accent Color (Sunshine Yellow)
css--color-accent: oklch(78% 0.15 85);
--color-accent-content: oklch(25% 0.04 85);
Example: oklch(78% 0.15 85) - Bright, optimistic yellow

Usage: Highlights, notifications, important alerts, tips and suggestions, seasonal reminders, featured content badges
Meaning: Sunshine, optimism, energy, harvest time, golden crops
Accessibility: Contrast ratio with base-100: 1.8:1 (Large text only), with accent-content: 8.5:1 (AAA)
Cultural Relevance: Represents sunlight essential for farming and the golden color of ripe paddy


Neutral Colors (Slate Gray)
css--color-neutral: oklch(35% 0.02 240);
--color-neutral-content: oklch(95% 0.01 240);
Example: oklch(35% 0.02 240) - Deep neutral gray with slight cool tone

Usage: Text, borders, dividers, disabled states, subtle UI elements, secondary information
Meaning: Professional, readable, unobtrusive foundation
Accessibility: Excellent contrast for text and UI elements


Base Colors (Backgrounds & Surfaces)
Light Theme (Default):
css--color-base-100: oklch(98% 0.005 120); /* Soft cream white - main background */
--color-base-200: oklch(94% 0.008 120); /* Light beige - cards, panels */
--color-base-300: oklch(88% 0.012 120); /* Subtle tan - borders, dividers */
--color-base-content: oklch(28% 0.015 120); /* Dark gray-green - primary text */
Example (Light Theme):
css--color-base-100: oklch(98% 0.005 120); /* Nearly white with warm undertone */
--color-base-200: oklch(94% 0.008 120); /* Very light cream for elevation */
--color-base-300: oklch(88% 0.012 120); /* Subtle beige for boundaries */
--color-base-content: oklch(28% 0.015 120); /* Dark text with excellent readability */
Rationale: Warm, earthy base colors create a welcoming environment that feels natural and comfortable for farmers, avoiding the sterile feel of pure white backgrounds.

Semantic Colors
Info (Sky Blue):
css--color-info: oklch(68% 0.14 235); /* Calm sky blue for informational content */
--color-info-content: oklch(20% 0.03 235);

Usage: Weather information, tips, helpful hints, knowledge base articles, information modals
Meaning: Clarity, knowledge, sky, water resources
Accessibility: 4.9:1 contrast ratio

Success (Harvest Green):
css--color-success: oklch(65% 0.17 145); /* Vibrant success green */
--color-success-content: oklch(18% 0.04 145);

Usage: Successful query submissions, confirmed diagnoses, completed actions, positive crop health indicators
Meaning: Growth, health, positive outcomes, successful harvest
Accessibility: 5.1:1 contrast ratio

Warning (Alert Orange):
css--color-warning: oklch(75% 0.14 65); /* Warm orange for caution */
--color-warning-content: oklch(22% 0.04 65);

Usage: Caution messages, moderate pest alerts, input reminders, weather warnings
Meaning: Caution, attention needed, ripening fruits
Accessibility: 3.8:1 contrast (use with warning-content for text)

Error (Critical Red):
css--color-error: oklch(62% 0.21 25); /* Strong red for errors and critical alerts */
--color-error-content: oklch(98% 0.01 0);

Usage: Error messages, severe pest outbreak alerts, critical system errors, urgent attention needed
Meaning: Danger, urgency, disease, critical issues
Accessibility: 5.5:1 contrast ratio


Color Usage Guidelines
Do's:

✅ Use primary green for all main agricultural actions (submit query, record voice, confirm diagnosis)
✅ Use secondary brown for supportive features (knowledge base, resources, officer dashboard)
✅ Use accent yellow sparingly for highlights, featured tips, and seasonal reminders
✅ Use semantic colors consistently (green = success, red = critical, yellow = caution)
✅ Ensure all text meets WCAG 2.1 AA contrast requirements (4.5:1 minimum)
✅ Test colors in bright outdoor sunlight conditions (farmers use phones in fields)
✅ Use base-200 for card elevation to create subtle depth without heavy shadows
✅ Provide sufficient color contrast for low-vision users
✅ Use color + icons together (never color alone) for critical information

Don'ts:

❌ Don't use more than 3 colors in a single view (reduces cognitive load)
❌ Don't use color as the only indicator (add icons, text, or patterns)
❌ Don't override semantic color meanings (red must always mean error/critical)
❌ Don't use pure black (#000000) for text (use base-content for better readability)
❌ Don't use low-contrast combinations (light gray text on white background)
❌ Don't use complex gradients or patterns that reduce text readability
❌ Don't use colors that look similar in low-light or bright outdoor conditions


Color Accessibility Matrix
Text ColorBackgroundContrast RatioWCAG LevelUse Casebase-contentbase-10013.2:1AAABody text, primary contentprimary-contentprimary12.8:1AAAPrimary buttons, CTAssecondary-contentsecondary11.5:1AAASecondary buttonsaccent-contentaccent8.5:1AAAAccent badges, highlightserror-contenterror10.2:1AAAError messages, alertssuccess-contentsuccess9.8:1AAASuccess confirmationswarning-contentwarning8.1:1AAAWarning messagesinfo-contentinfo9.1:1AAAInformational content
Testing Tools:

WebAIM Contrast Checker
Accessible Colors
Browser DevTools Accessibility Panel
Test on actual devices in outdoor/bright light conditions

Outdoor Visibility Testing:
All color combinations have been validated for visibility in:

Direct sunlight (common when farmers are in fields)
Low-light conditions (early morning/evening farming hours)
Aged devices with reduced screen brightness
Inexpensive smartphones with lower-quality displays


Dark Mode Considerations
Dark Theme Colors (For future enhancement - Phase 3):
css@plugin "daisyui/theme" {
name: "krishi-vaani-dark";
prefersdark: true;
color-scheme: "dark";

--color-base-100: oklch(22% 0.015 120); /* Dark warm gray background */
--color-base-200: oklch(26% 0.018 120); /* Slightly lighter panels */
--color-base-300: oklch(32% 0.020 120); /* Borders and dividers */
--color-base-content: oklch(92% 0.008 120); /* Light text */

/* Adjust colors for dark mode visibility */
--color-primary: oklch(65% 0.18 142); /* Slightly lighter green */
--color-secondary: oklch(58% 0.10 45); /* Lighter brown */
--color-accent: oklch(82% 0.15 85); /* Brighter yellow */
}
Dark Mode Strategy:

Phase 1 MVP: Light mode only (priority for farmer accessibility)
Phase 2+: System preference detection with manual toggle
Rationale: Most farmers use phones in daylight/outdoor conditions where light mode is more readable. Dark mode is lower priority but beneficial for night-time use and agricultural officers working long hours.


Visual Hierarchy & Emphasis
Color-Based Hierarchy:

Primary Actions (Highest Visual Weight):

Primary green color
Large touch targets (min 48px height)
Examples: "Ask Question" button, "Record Voice", "Submit Query"


Secondary Actions:

Secondary brown color or neutral outline
Medium prominence
Examples: "View History", "Browse Knowledge Base", "Contact Officer"


Tertiary Actions:

Ghost or link style with neutral colors
Subtle presence
Examples: "Cancel", "Skip", "Learn More"


Text Hierarchy:

Primary content: base-content (full opacity) - Main headings, body text
Secondary content: base-content/80 (80% opacity) - Descriptions, metadata
Tertiary content: base-content/60 (60% opacity) - Timestamps, auxiliary info



Example Color Application:
tsx{/* Primary CTA - Most important action */}
<button className="btn btn-primary btn-lg">
<Icon name="mic" /> പ്രശ്നം ചോദിക്കുക (Ask Question)
</button>

{/* Secondary action - Supporting feature */}
<button className="btn btn-secondary">
<Icon name="photo_camera" /> ചിത്രം അപ്‌ലോഡ് ചെയ്യുക (Upload Image)
</button>

{/* Tertiary action - Low-priority option */}
<button className="btn btn-ghost">
<Icon name="history" /> ചരിത്രം കാണുക (View History)
</button>

{/* Text hierarchy example */}
<div className="card">
  <h2 className="text-2xl font-bold text-base-content">
    നെല്ലിന് കീടബാധ (Rice Pest Issue)
  </h2>
  <p className="text-base-content/80 mt-2">
    ഇലകളിൽ തവിട്ടുനിറത്തിലുള്ള പാടുകൾ കാണുന്നു
  </p>
  <span className="text-base-content/60 text-sm">
    2 മണിക്കൂർ മുമ്പ് (2 hours ago)
  </span>
</div>

{/* Semantic color usage */}
<div className="alert alert-success">
  <Icon name="check_circle" />
  <span>നിങ്ങളുടെ ചോദ്യം വിജയകരമായി സമർപ്പിച്ചു</span>
</div>

<div className="alert alert-warning">
  <Icon name="warning" />
  <span>കാലാവസ്ഥാ മുന്നറിയിപ്പ്: കനത്ത മഴയ്ക്ക് സാധ്യത</span>
</div>

UI/UX Design System
Design Principles
1. Accessibility Over Aesthetics

Every design decision prioritizes ease of use for low-literacy farmers
Voice-first interactions eliminate typing barriers
Large, clear buttons with descriptive icons
Simple, linear user flows with minimal branching
Works seamlessly with low-bandwidth connections (progressive loading)

2. Voice-First, Multilingual by Design

Malayalam as the primary interface language with English as secondary
Voice input as the default interaction method (keyboard secondary)
Text-to-speech for all responses to accommodate low-literacy users
Regional dialect recognition for Kerala's linguistic diversity
Visual confirmation of voice recognition to build trust

3. Context is Everything

System remembers farmer's location, crops, and season
Personalized recommendations based on farming history
Location-aware pest and weather alerts
Crop calendar integration for timely reminders
Previous query context maintained for follow-up questions

4. Trust Through Transparency

Clear indication when AI is answering vs. when escalating to human officers
Confidence scores displayed for AI diagnoses
Sources cited for recommendations (research papers, government advisories)
Officer profiles visible when queries are escalated
Government of Kerala branding prominent for credibility

5. Offline-First Architecture

Core features work without internet (cached knowledge base)
Queries queued when offline, submitted when connection restored
Downloaded resources available offline (PDFs, videos)
Progressive Web App (PWA) for app-like experience without app store
Minimal data usage for rural connectivity constraints

6. Learning and Improving

Feedback mechanism on every AI response
Farmers can mark solutions as helpful/not helpful
System learns from corrections by agricultural officers
Continuous improvement based on query patterns and outcomes
Local expert knowledge incorporated into AI training


DaisyUI 5 Theme Configuration
Complete Theme Definition:
css@plugin "daisyui/theme" {
name: "krishi-vaani";
default: true;
prefersdark: false;
color-scheme: "light";

/* Base Colors - Warm, earthy backgrounds */
--color-base-100: oklch(98% 0.005 120);  /* Soft cream main background */
--color-base-200: oklch(94% 0.008 120);  /* Light beige cards/panels */
--color-base-300: oklch(88% 0.012 120);  /* Subtle tan borders */
--color-base-content: oklch(28% 0.015 120); /* Dark gray-green text */

/* Primary Brand Color - Fertile Green */
--color-primary: oklch(58% 0.18 142);
--color-primary-content: oklch(98% 0.01 142);

/* Secondary Brand Color - Earth Brown */
--color-secondary: oklch(52% 0.10 45);
--color-secondary-content: oklch(98% 0.01 45);

/* Accent Color - Sunshine Yellow */
--color-accent: oklch(78% 0.15 85);
--color-accent-content: oklch(25% 0.04 85);

/* Neutral Color - Slate Gray */
--color-neutral: oklch(35% 0.02 240);
--color-neutral-content: oklch(95% 0.01 240);

/* Semantic Colors */
--color-info: oklch(68% 0.14 235);
--color-info-content: oklch(20% 0.03 235);

--color-success: oklch(65% 0.17 145);
--color-success-content: oklch(18% 0.04 145);

--color-warning: oklch(75% 0.14 65);
--color-warning-content: oklch(22% 0.04 65);

--color-error: oklch(62% 0.21 25);
1:03 PM
--color-error-content: oklch(98% 0.01 0);

/* Border Radius - Friendly, approachable curves / --radius-selector: 0.5rem; / Radio buttons, checkboxes / --radius-field: 0.75rem; / Input fields - rounded for friendliness / --radius-box: 1rem; / Cards, containers - soft curves */

/* Sizing - Large touch targets for ease of use / --size-selector: 1.5rem; / Larger checkboxes/radios / --size-field: 3rem; / Tall input fields (48px minimum) */

/* Effects / --border: 2px; / Visible borders for clarity / --depth: 2; / Subtle shadows - not distracting / --noise: 0; / No noise texture - clean interface */ }


**Theme Application in Code:**
```tsx
// In your HTML root
<html lang="ml" data-theme="krishi-vaani">

// Toggle language programmatically
const setLanguage = (lang: 'ml' | 'en') => {
  document.documentElement.setAttribute('lang', lang);
};

// Component usage with DaisyUI classes
<button className="btn btn-primary btn-lg">
  <Icon name="mic" size="lg" />
  പ്രശ്നം ചോദിക്കുക
</button>

<div className="card bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">നെല്ല് കൃഷി</h2>
    <p>ഈ സീസണിലെ ഉപദേശങ്ങൾ</p>
  </div>
</div>

// Alert with semantic colors
<div className="alert alert-success">
  <Icon name="check_circle" />
  <span>വിജയകരമായി സമർപ്പിച്ചു</span>
</div>
```

---

### Typography

**Google Fonts Integration:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Malayalam + English fonts -->
<link href="https://fonts.googleapis.com/css2?family=Manjari:wght@400;700&family=Noto+Sans+Malayalam:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**Font System:**

**Primary Font (Malayalam Headings & UI):**
- **Font Family:** 'Noto Sans Malayalam', sans-serif
- **Weights:** 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)
- **Usage:** Malayalam headings (H1-H6), buttons, navigation, all Malayalam text
- **Characteristics:** Excellent Unicode Malayalam support, highly readable on small screens, designed for UI clarity

**Secondary Font (Malayalam Body - Alternative):**
- **Font Family:** 'Manjari', sans-serif
- **Weights:** 400 (Regular), 700 (Bold)
- **Usage:** Optional alternative for body text, friendlier feel
- **Characteristics:** Softer, more traditional Malayalam script feel

**Tertiary Font (English/Latin):**
- **Font Family:** 'Inter', sans-serif
- **Weights:** 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)
- **Usage:** English text, numbers, technical terms, admin interfaces
- **Characteristics:** Modern, excellent readability, extensive language support

**Typography Scale:**
```css
/* Malayalam Heading Styles (Noto Sans Malayalam) */
H1 (Malayalam): 32px / 42px - font-weight: 700 - letter-spacing: -0.02em
H2 (Malayalam): 28px / 38px - font-weight: 700 - letter-spacing: -0.01em
H3 (Malayalam): 24px / 34px - font-weight: 600
H4 (Malayalam): 20px / 30px - font-weight: 600
H5 (Malayalam): 18px / 28px - font-weight: 600
H6 (Malayalam): 16px / 24px - font-weight: 600

/* English Heading Styles (Inter) */
H1 (English): 32px / 42px - font-weight: 700 - letter-spacing: -0.02em
H2 (English): 28px / 38px - font-weight: 700 - letter-spacing: -0.01em
H3 (English): 24px / 34px - font-weight: 600
H4 (English): 20px / 30px - font-weight: 600

/* Body Styles */
Body Large (Malayalam): 18px / 28px - font-weight: 400
Body Regular (Malayalam): 16px / 26px - font-weight: 400
Body Small (Malayalam): 14px / 22px - font-weight: 400

Body Large (English): 18px / 28px - font-weight: 400
Body Regular (English): 16px / 26px - font-weight: 400
Body Small (English): 14px / 22px - font-weight: 400

/* UI Elements */
Button Text (Large): 18px / 24px - font-weight: 600
Button Text (Medium): 16px / 22px - font-weight: 600
Button Text (Small): 14px / 20px - font-weight: 600
Label: 16px / 24px - font-weight: 500
Caption: 14px / 20px - font-weight: 400
Metadata: 12px / 18px - font-weight: 400
```

**Responsive Typography (Mobile-First Approach):**

- **Mobile (<640px):** Base sizes as defined above (optimized for mobile)
- **Tablet (640px-1024px):** +2px on H1-H3
- **Desktop (≥1024px):** +4px on H1-H3
```css
/* Responsive Typography Example */
.heading-1 {
  font-size: 32px;  /* Mobile base */
  line-height: 42px;
}

@media (min-width: 640px) {
  .heading-1 {
    font-size: 34px;  /* Tablet */
    line-height: 44px;
  }
}

@media (min-width: 1024px) {
  .heading-1 {
    font-size: 36px;  /* Desktop */
    line-height: 46px;
  }
}
```

**Malayalam Typography Best Practices:**
- **Line Height:** Malayalam script benefits from 1.6-1.8 line height (taller than Latin)
- **Letter Spacing:** Minimal to no letter spacing (Malayalam characters are wider)
- **Font Size:** Minimum 16px for body text (Malayalam characters have more detail)
- **Weight:** Medium (500) or Semi-Bold (600) preferred over Regular (400) for small text
- **Conjuncts:** Ensure proper rendering of complex Malayalam conjunct characters

**Accessibility Considerations:**
- Minimum body text size: 16px (1rem)
- Maximum line length: 75 characters (~600px) for readability
- All text resizable up to 200% without horizontal scrolling
- Clear font hierarchy with size jumps of at least 2-4px
- Adequate spacing between lines for Malayalam script complexity

---

### Icons - Google Material Symbols

**Integration:**
```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet">
```

**Icon Variant:** **Rounded** (soft, friendly, approachable for farmers)

**Icon Usage by Category:**

| Category | Icon Names | Usage Context |
|----------|-----------|---------------|
| **Voice & Input** | mic, mic_off, keyboard, stop_circle, play_arrow, pause | Voice recording, playback, text input toggle |
| **Navigation** | home, arrow_back, arrow_forward, chevron_left, chevron_right, menu, close | App navigation, back buttons, menu |
| **Agricultural Actions** | photo_camera, add_a_photo, image, agriculture, eco, water_drop, wb_sunny, cloudy | Image upload, crop selection, weather |
| **Query & Chat** | chat, chat_bubble, question_answer, forum, support_agent, help | Query interface, AI chat, officer escalation |
| **Status & Feedback** | check_circle, cancel, error, warning, info, star, favorite, thumb_up, thumb_down | Response feedback, status indicators |
| **User & Profile** | person, account_circle, group, logout, settings, edit | User profile, settings, logout |
| **Content & Resources** | book, article, video_library, picture_as_pdf, download, folder, description | Knowledge base, resources, downloads |
| **Notifications** | notifications, notifications_active, campaign, lightbulb | Alerts, tips, reminders |
| **Location & Map** | location_on, map, my_location, place, explore | Location selection, map view |
| **Time & Calendar** | calendar_today, schedule, history, access_time, event | Crop calendar, query history, reminders |
| **Data & Analytics** | bar_chart, trending_up, analytics, insights | Officer dashboard, trends |
| **Communication** | phone, email, message, contact_support | Contact options, support |
| **Actions** | send, save, share, delete, refresh, search, filter_list | General actions |

**Icon Sizes:**

- **Extra Small:** 16px (inline with small text, metadata)
- **Small:** 20px (inline with body text, list items)
- **Medium:** 24px (buttons, standard UI elements) - **DEFAULT**
- **Large:** 32px (prominent actions, feature highlights)
- **Extra Large:** 48px (empty states, onboarding, hero sections)

**Icon Component Implementation:**
```tsx
interface IconProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  ariaLabel?: string;
  filled?: boolean; // For filled variant when needed
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 'md', 
  className = '', 
  ariaLabel,
  filled = false 
}) => {
  const sizes = {
    xs: 'text-base',      // 16px
    sm: 'text-xl',        // 20px
    md: 'text-2xl',       // 24px
    lg: 'text-4xl',       // 32px
    xl: 'text-6xl',       // 48px
  };
  
  const fillClass = filled ? 'material-symbols-rounded-filled' : '';
  
  return (
    <span
      className={`material-symbols-rounded ${fillClass} ${sizes[size]} ${className}`}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      {name}
    </span>
  );
};

// Usage examples
<Icon name="mic" size="lg" ariaLabel="Record voice" className="text-primary" />
<Icon name="photo_camera" size="md" className="text-secondary" />
<Icon name="check_circle" size="sm" filled className="text-success" />
```

**Icon with Text Patterns:**
```tsx
// Button with icon
<button className="btn btn-primary btn-lg gap-2">
  <Icon name="mic" size="md" />
  <span>പ്രശ്നം ചോദിക്കുക</span>
</button>

// List item with icon
<li className="flex items-center gap-3">
  <Icon name="agriculture" size="sm" className="text-primary" />
  <span>നെല്ല് കൃഷി</span>
</li>

// Alert with icon
<div className="alert alert-info flex gap-3">
  <Icon name="info" size="md" />
  <span>കാലാവസ്ഥ: ഇന്ന് മിതമായ മഴയ്ക്ക് സാധ്യത</span>
</div>
```

**Accessibility Guidelines:**
- Use `ariaLabel` for icon-only buttons (no visible text)
- Set `aria-hidden="true"` for decorative icons next to text
- Maintain 44px minimum touch target size for interactive icons
- Provide text alternatives for critical icons
- Use consistent icons for same actions across the app

---

### Responsive Design

**Breakpoint System:**
```tsx
const breakpoints = {
  sm: '640px',   // Large phones (landscape)
  md: '768px',   // Tablets
  lg: '1024px',  // Laptops / Desktops
  xl: '1280px',  // Large desktops
  '2xl': '1536px' // Extra large screens
};

// Tailwind breakpoint usage
// Default: Mobile first (0-639px)
// sm: 640px and up
// md: 768px and up
// lg: 1024px and up
```

**Layout Patterns by Device:**

**Mobile Portrait (<640px) - PRIMARY TARGET**
- Single column layout throughout
- Full-width cards and components
- Bottom navigation for key actions
- Large touch targets (min 48x48px)
- Voice-first prominent positioning
- Floating action button for quick query
- Vertical stacking of all content
- Hide secondary information
- Simplified navigation (hamburger menu)
- Progressive disclosure of features

**Mobile Landscape / Small Tablet (640px - 767px)**
- Slightly wider single column (max-width constraint)
- Same mobile-first approach
- Utilize extra width for better spacing
- Two-column layouts for simple lists only

**Tablet (768px - 1023px)**
- Two-column layouts where appropriate
- Sidebar navigation appears
- Grid layouts for content cards (2 columns)
- Touch targets remain large (44x44px minimum)
- More content visible per screen
- Split views for list-detail patterns

**Desktop (≥1024px) - SECONDARY TARGET**
- Multi-column layouts (2-3 columns)
- Persistent sidebar navigation
- Hover states for interactive elements
- More compact spacing
- Full navigation visible
- Admin dashboard optimized for this size
- Grid layouts (3-4 columns for cards)

**Responsive Component Patterns:**
```tsx
/* Query Input Card - Adapts across devices */
<div className="card bg-base-100 shadow-lg 
                w-full 
                sm:max-w-2xl 
                lg:max-w-4xl 
                mx-auto">
  <div className="card-body p-4 sm:p-6 lg:p-8">
    {/* Content */}
  </div>
</div>

/* Grid Layout - Responsive columns */
<div className="grid 
                grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-3 
                gap-4 
                sm:gap-6">
  {/* Cards */}
</div>

/* Typography - Scales with screen size */
<h1 className="text-2xl 
               sm:text-3xl 
               lg:text-4xl 
               font-bold">
  കൃഷി വാണി
</h1>

/* Button Group - Stack on mobile, inline on larger */
<div className="flex 
                flex-col 
                sm:flex-row 
                gap-3 
                sm:gap-4">
  <button className="btn btn-primary btn-lg w-full sm:w-auto">
    ചോദിക്കുക
  </button>
  <button className="btn btn-secondary btn-lg w-full sm:w-auto">
    ചിത്രം അപ്‌ലോഡ് ചെയ്യുക
  </button>
</div>

/* Navigation - Bottom on mobile, sidebar on desktop */
<nav className="btm-nav lg:hidden">
  {/* Mobile bottom navigation */}
</nav>
<aside className="hidden lg:block w-64 bg-base-200">
  {/* Desktop sidebar */}
</aside>

/* Spacing - Increases with screen size */
<section className="py-6 
                    sm:py-8 
                    lg:py-12 
                    px-4 
                    sm:px-6 
                    lg:px-8">
  {/* Content */}
</section>
```

**Touch Target Guidelines:**

| Element Type | Mobile (Minimum) | Desktop | Rationale |
|--------------|------------------|---------|-----------|
| Primary Button | 48x48px | 40x40px | Thumb-friendly |
| Secondary Button | 44x44px | 36x36px | Easier tap |
| Icon Button | 48x48px | 40x40px | Precision needed |
| Text Link | 44px height | 32px height | Easy selection |
| Checkbox/Radio | 32x32px (visual) | 24x24px | Clickable area 44px |
| Form Input | 48px height | 40px height | Easy focus |
| List Item | 56px height | 48px height | Scrollable lists |

**Responsive Images:**
```tsx
/* Responsive image loading */
<img 
  src={imageUrl}
  srcSet={`
    ${imageUrl}?w=400 400w,
    ${imageUrl}?w=800 800w,
    ${imageUrl}?w=1200 1200w
  `}
  sizes="(max-width: 640px) 100vw, 
         (max-width: 1024px) 50vw, 
         33vw"
  alt="നെല്ലിന്റെ രോഗം"
  loading="lazy"
  className="w-full h-auto rounded-lg"
/>
```

**Offline & Low-Bandwidth Considerations:**
- Progressive image loading (blur-up technique)
- Lazy loading for below-fold content
- Service worker caching for critical assets
- Compressed image formats (WebP with fallback)
- Text-first rendering (content before images)
- Skeleton loaders for async content
- Graceful degradation when features unavailable

---

### Accessibility Requirements

**WCAG 2.1 Level AA Compliance - MANDATORY**

**Perceivable:**

- [x] All images have descriptive alt text in Malayalam/English
- [x] Color contrast ratio ≥ 4.5:1 for normal text (16px)
- [x] Color contrast ratio ≥ 3:1 for large text (18pt+ / 24px+)
- [x] Color is NEVER the only means of conveying information (always paired with icons/text)
- [x] Text can be resized up to 200% without loss of content or functionality
- [x] All audio content (voice queries/responses) has text transcripts
- [x] Captions provided for video content in knowledge base
- [x] Malayalam Unicode rendering correctly on all devices
- [x] High contrast mode support for low-vision users

**Operable:**

- [x] All functionality available via keyboard (Tab, Enter, Space, Arrow keys)
- [x] No keyboard traps (users can navigate away from any element)
- [x] Focus indicator is clearly visible (2px primary color outline minimum)
- [x] Skip navigation link provided ("Skip to main content" in Malayalam)
- [x] Clear, descriptive page titles in Malayalam
- [x] Logical focus order matches visual layout
- [x] Touch targets minimum 44x44px (48x48px preferred)
- [x] No time limits on critical actions (or easily extendable)
- [x] Pause/stop controls for auto-playing audio
- [x] No flashing content (seizure prevention)

**Understandable:**

- [x] Language of page declared (`<html lang="ml">` for Malayalam)
- [x] Language changes marked (`<span lang="en">` for English terms)
- [x] Consistent navigation across all pages
- [x] Consistent component behavior throughout app
- [x] Input assistance for forms (labels, instructions, error messages)
- [x] Error identification with clear, helpful suggestions
- [x] Confirmation dialogs for destructive actions
- [x] Clear, simple language appropriate for literacy level
- [x] Voice feedback confirms actions (e.g., "Recording started")

**Robust:**

- [x] Valid, semantic HTML5 (no parsing errors)
- [x] ARIA used correctly (roles, states, properties)
- [x] Name, role, value available for all UI components
- [x] Status messages announced to screen readers (`role="status"`, `aria-live`)
- [x] Progressive enhancement (works without JavaScript for core features)
- [x] Compatible with assistive technologies (screen readers, voice control)
- [x] Works across browsers (Chrome, Firefox, Safari, Edge)
- [x] Works on low-end Android devices (target: 2GB RAM, Android 9+)

**Voice & Audio Accessibility:**

- [x] Clear visual feedback during voice recording (animated mic icon, timer)
- [x] Voice input can be stopped/restarted easily
- [x] Text transcription visible immediately after voice input
- [x] Option to edit text before submission
- [x] Voice output (text-to-speech) for all AI responses
- [x] Audio playback controls (play, pause, speed adjustment)
- [x] Volume control accessible
- [x] Alternative text input always available

**Low-Literacy Accommodations:**

- [x] Heavy use of icons with text labels
- [x] Simple, conversational language (avoid jargon)
- [x] Short sentences and paragraphs
- [x] Voice output for all important text
- [x] Visual progress indicators for multi-step processes
- [x] Confirmation of actions with visual + audio feedback
- [x] Contextual help available throughout

**Screen Reader Support:**
```tsx
// Proper ARIA landmarks
<header role="banner">
  <nav role="navigation" aria-label="പ്രധാന നാവിഗേഷൻ">
    {/* Navigation */}
  </nav>
</header>

<main role="main" id="main-content">
  {/* Main content */}
</main>

<footer role="contentinfo">
  {/* Footer */}
</footer>

// Status announcements
<div role="status" aria-live="polite" aria-atomic="true">
  {recordingStatus && "റെക്കോർഡിംഗ് ആരംഭിച്ചു"}
</div>

// Form accessibility
<label htmlFor="crop-select" className="label">
  <span className="label-text">നിങ്ങളുടെ വിള തിരഞ്ഞെടുക്കുക</span>
</label>
<select 
  id="crop-select"
  name="crop"
  aria-required="true"
  aria-describedby="crop-help"
>
  <option value="">തിരഞ്ഞെടുക്കുക...</option>
</select>
<span id="crop-help" className="label-text-alt">
  നിങ്ങൾ കൃഷി ചെയ്യുന്ന പ്രധാന വിള
</span>

// Button accessibility
<button 
  className="btn btn-primary"
  aria-label="ശബ്ദം റെക്കോർഡ് ചെയ്യുക"
  aria-pressed={isRecording}
>
  <Icon name="mic" ariaHidden />
  <span>ചോദിക്കുക</span>
</button>
```

**Testing Checklist:**

- [ ] Test with NVDA (Windows) and JAWS screen readers
- [ ] Test with VoiceOver (iOS/macOS)
- [ ] Test with TalkBack (Android)
- [ ] Keyboard-only navigation testing
- [ ] Color contrast validation (all color combinations)
- [ ] Focus order verification
- [ ] Zoom to 200% testing
- [ ] Test on actual low-end devices
- [ ] Test with poor network conditions (slow 3G)
- [ ] Test in bright outdoor sunlight
- [ ] User testing with actual farmers (various literacy levels)

---

## Component Design System

### Component Organization Structure
src/
├── components/
│   ├── atoms/              # Basic UI elements
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Badge/
│   │   ├── Icon/
│   │   ├── Avatar/
│   │   ├── VoiceIndicator/
│   │   ├── LoadingSpinner/
│   │   ├── LanguageToggle/
│   │   └── [component]/
│   │
│   ├── molecules/          # Combinations of atoms
│   │   ├── FormField/
│   │   ├── Card/
│   │   ├── SearchBar/
│   │   ├── VoiceRecorder/
│   │   ├── ImageUploader/
│   │   ├── QueryCard/
│   │   ├── ResponseCard/
│   │   ├── CropSelector/
│   │   ├── LocationPicker/
│   │   └── [component]/
│   │
│   ├── organisms/          # Complex UI sections
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── QueryInputPanel/
│   │   ├── ResponseDisplay/
│   │   ├── QueryHistoryList/
│   │   ├── KnowledgeBaseGrid/
│   │   ├── OfficerDashboard/
│   │   ├── FarmerProfile/
│   │   ├── CropCalendar/
│   │   └── [component]/
│   │
│   ├── templates/          # Page-level layouts
│   │   ├── MainLayout/
│   │   ├── AuthLayout/
│   │   ├── DashboardLayout/
│   │   ├── OfficerLayout/
│   │   └── [layout]/
│   │
│   └── pages/              # Route-level pages
│       ├── Home/
│       ├── Query/
│       ├── History/
│       ├── KnowledgeBase/
│       ├── Profile/
│       ├── Login/
│       ├── OfficerDashboard/
│       └── [page]/
│
├── features/               # Feature-specific logic
│   ├── voice/              # Voice recording & processing
│   ├── image/              # Image upload & analysis
│   ├── ai/                 # AI query processing
│   ├── location/           # Location services
│   └── i18n/               # Internationalization
│
├── hooks/                  # Custom React hooks
│   ├── useVoiceRecording.ts
│   ├── useImageUpload.ts
│   ├── useGeolocation.ts
│   ├── useQuerySubmit.ts
│   └── [hook].ts
│
├── utils/                  # Utility functions
│   ├── dateFormatter.ts
│   ├── cropData.ts
│   ├── malayalamUtils.ts
│   └── [utility].ts
│
└── types/                  # TypeScript type definitions
├── crop.types.ts
├── query.types.ts
├── user.types.ts
└── [types].ts


---

### Atom Components

**Component Template (TypeScript):**
```tsx
// components/atoms/[ComponentName]/[ComponentName].tsx
import React, { FC, HTMLAttributes } from 'react';

/**
 * Props interface for [ComponentName]
 * Extends standard HTML attributes for the base element
 */
export interface [ComponentName]Props extends HTMLAttributes<HTMLElement> {
  /** Required prop description */
  requiredProp: string;
  
  /** Optional prop description with default */
  optionalProp?: string;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Child content */
  children?: React.ReactNode;
}

/**
 * [ComponentName] - Brief description of component purpose
 * 
 * @param props - Component props
 * @returns React component
 */
export const [ComponentName]: FC<[ComponentName]Props] = ({
  requiredProp,
  optionalProp = 'defaultValue',
  className = '',
  children,
  ...props
}) => {
  const baseClasses = 'base-component-classes';
  
  return (
    <div 
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
```

---

### Critical Atom Components for Krishi Vaani

**1. Button Component**
```tsx
// components/atoms/Button/Button.tsx
import React from 'react';
import { Icon } from '../Icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  children,
  className = '',
  type = 'button',
  ariaLabel,
  ...props
}) => {
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    ghost: 'btn-ghost',
    outline: 'btn-outline',
  };
  
  const sizeClasses = {
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
  };
  
  // Minimum 48px height for mobile touch targets
  const touchTargetClass = size === 'lg' ? 'min-h-[48px]' : 'min-h-[44px]';
  
  return (
    <button
      type={type}
      className={`
        btn 
        ${variantClasses[variant]} 
        ${sizeClasses[size]} 
        ${fullWidth ? 'btn-block w-full' : ''} 
        ${touchTargetClass}
        ${className}
      `}
      disabled={disabled || loading}
      aria-busy={loading}
      aria-disabled={disabled || loading}
      aria-label={ariaLabel}
      {...props}
    >
      {loading && (
        <span className="loading loading-spinner loading-sm" aria-hidden="true" />
      )}
      {!loading && icon && iconPosition === 'left' && (
        <Icon name={icon} size={size === 'lg' ? 'md' : 'sm'} />
      )}
      <span>{children}</span>
      {!loading && icon && iconPosition === 'right' && (
        <Icon name={icon} size={size === 'lg' ? 'md' : 'sm'} />
      )}
    </button>
  );
};
```

**2. VoiceIndicator Component (Unique to Krishi Vaani)**
```tsx
// components/atoms/VoiceIndicator/VoiceIndicator.tsx
import React from 'react';

export interface VoiceIndicatorProps {
  isRecording: boolean;
  duration?: number; // in seconds
  className?: string;
}

export const VoiceIndicator: React.FC<VoiceIndicatorProps> = ({
  isRecording,
  duration = 0,
  className = '',
}) => {
  const formatDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs1:06 PM
.toString().padStart(2, '0')}`;
};

return ( <div className={flex items-center gap-3 ${className}}> {isRecording && ( <> {/* Animated pulse indicator */} <span className="relative flex h-4 w-4"> <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span> <span className="relative inline-flex rounded-full h-4 w-4 bg-error"></span> </span>

      {/* Duration display */}
      <span className="text-base-content font-mono text-lg" aria-live="polite">
        {formatDuration(duration)}
      </span>
      
      {/* Status text */}
      <span className="text-base-content/70 text-sm">
        റെക്കോർഡ് ചെയ്യുന്നു...
      </span>
    </>
  )}
</div>
);
};


**3. LanguageToggle Component**
```tsx
// components/atoms/LanguageToggle/LanguageToggle.tsx
import React from 'react';

export interface LanguageToggleProps {
  currentLanguage: 'ml' | 'en';
  onLanguageChange: (language: 'ml' | 'en') => void;
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  currentLanguage,
  onLanguageChange,
  className = '',
}) => {
  return (
    <div className={`flex gap-2 ${className}`} role="group" aria-label="Language selection">
      <button
        className={`btn btn-sm ${currentLanguage === 'ml' ? 'btn-primary' : 'btn-ghost'}`}
        onClick={() => onLanguageChange('ml')}
        aria-pressed={currentLanguage === 'ml'}
        aria-label="Switch to Malayalam"
      >
        മലയാളം
      </button>
      <button
        className={`btn btn-sm ${currentLanguage === 'en' ? 'btn-primary' : 'btn-ghost'}`}
        onClick={() => onLanguageChange('en')}
        aria-pressed={currentLanguage === 'en'}
        aria-label="Switch to English"
      >
        English
      </button>
    </div>
  );
};
```

---

**Atom Components Inventory:**

| Component | Purpose | Key Props | States | Accessibility Notes |
|-----------|---------|-----------|--------|---------------------|
| **Button** | Action triggers | variant, size, loading, icon | default, hover, active, focus, loading, disabled | Min 44px height, ARIA labels, keyboard accessible |
| **Input** | Text input (Malayalam/English) | value, error, disabled, placeholder, lang | default, focus, error, disabled | Label association, error announcement, support Malayalam input |
| **VoiceIndicator** | Recording status | isRecording, duration | recording, idle | Live region for duration updates, visual pulse |
| **Badge** | Status/category indicators | variant, size, text | default | Color + text (never color alone) |
| **Icon** | Material Symbols | name, size, ariaLabel | default | Proper ARIA labeling |
| **Avatar** | User representation | src, alt, size, fallback | default, loading, error | Alt text mandatory |
| **LoadingSpinner** | Loading states | size, message | spinning | ARIA live region |
| **LanguageToggle** | ML/EN switch | currentLanguage, onChange | malayalam, english | ARIA pressed states |
| **Checkbox** | Boolean selection | checked, disabled, label | unchecked, checked, indeterminate | Native semantics, large touch target |
| **Radio** | Single selection | checked, name, value, label | unchecked, checked | Grouped with fieldset |
| **Select** | Dropdown selection | options, value, onChange | default, open, focused | Keyboard navigation |
| **Toast** | Notifications | message, type, duration | visible, hidden | ARIA live regions |

---

### Molecule Components

**1. VoiceRecorder Component (Core Feature)**
```tsx
// components/molecules/VoiceRecorder/VoiceRecorder.tsx
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/atoms/Button';
import { VoiceIndicator } from '@/components/atoms/VoiceIndicator';
import { Icon } from '@/components/atoms/Icon';
import { useVoiceRecording } from '@/hooks/useVoiceRecording';

export interface VoiceRecorderProps {
  onRecordingComplete: (audioBlob: Blob, transcript: string) => void;
  maxDuration?: number; // in seconds
  lang?: 'ml' | 'en';
  className?: string;
}

export const VoiceRecorder: React.FC<VoiceRecorderProps> = ({
  onRecordingComplete,
  maxDuration = 120, // 2 minutes default
  lang = 'ml',
  className = '',
}) => {
  const {
    isRecording,
    duration,
    transcript,
    startRecording,
    stopRecording,
    error,
  } = useVoiceRecording({ lang, maxDuration });
  
  const handleStart = async () => {
    try {
      await startRecording();
    } catch (err) {
      console.error('Failed to start recording:', err);
    }
  };
  
  const handleStop = async () => {
    const result = await stopRecording();
    if (result) {
      onRecordingComplete(result.audioBlob, result.transcript);
    }
  };
  
  return (
    <div className={`card bg-base-100 shadow-lg ${className}`}>
      <div className="card-body items-center text-center p-6">
        {/* Recording indicator */}
        {isRecording && (
          <VoiceIndicator 
            isRecording={isRecording} 
            duration={duration}
            className="mb-4"
          />
        )}
        
        {/* Main action button */}
        <Button
          variant={isRecording ? 'error' : 'primary'}
          size="lg"
          icon={isRecording ? 'stop_circle' : 'mic'}
          onClick={isRecording ? handleStop : handleStart}
          className="min-w-[200px]"
          ariaLabel={isRecording ? 'Stop recording' : 'Start recording'}
        >
          {isRecording ? 'നിർത്തുക' : 'ചോദിക്കുക'}
        </Button>
        
        {/* Live transcript display */}
        {transcript && (
          <div 
            className="mt-4 p-4 bg-base-200 rounded-lg w-full text-left"
            role="status"
            aria-live="polite"
          >
            <p className="text-sm text-base-content/70 mb-2">
              നിങ്ങൾ പറഞ്ഞത്:
            </p>
            <p className="text-base-content font-medium">
              {transcript}
            </p>
          </div>
        )}
        
        {/* Error display */}
        {error && (
          <div className="alert alert-error mt-4" role="alert">
            <Icon name="error" />
            <span>{error}</span>
          </div>
        )}
        
        {/* Help text */}
        <p className="text-sm text-base-content/60 mt-4">
          {isRecording 
            ? `പരമാവധി ${maxDuration}സെക്കൻഡ് റെക്കോർഡ് ചെയ്യാം`
            : 'മൈക്രോഫോൺ ബട്ടൺ അമർത്തി നിങ്ങളുടെ ചോദ്യം പറയുക'
          }
        </p>
      </div>
    </div>
  );
};
```

**2. ImageUploader Component (Disease Detection)**
```tsx
// components/molecules/ImageUploader/ImageUploader.tsx
import React, { useState, useRef } from 'react';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';

export interface ImageUploaderProps {
  onImageSelect: (file: File, preview: string) => void;
  maxSizeMB?: number;
  accept?: string;
  className?: string;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  onImageSelect,
  maxSizeMB = 5,
  accept = 'image/jpeg,image/png,image/webp',
  className = '',
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    // Validate file size
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSizeMB) {
      setError(`ഫയൽ വലുപ്പം ${maxSizeMB}MB-ൽ കൂടുതൽ ആയിരിക്കരുത്`);
      return;
    }
    
    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      const previewUrl = reader.result as string;
      setPreview(previewUrl);
      setError(null);
      onImageSelect(file, previewUrl);
    };
    reader.readAsDataURL(file);
  };
  
  const handleCameraClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.setAttribute('capture', 'environment');
      fileInputRef.current.click();
    }
  };
  
  const handleGalleryClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.removeAttribute('capture');
      fileInputRef.current.click();
    }
  };
  
  const handleClear = () => {
    setPreview(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  return (
    <div className={`card bg-base-100 shadow-lg ${className}`}>
      <div className="card-body p-6">
        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          onChange={handleFileSelect}
          className="hidden"
          aria-label="Upload crop image"
        />
        
        {/* Preview area */}
        {preview ? (
          <div className="relative">
            <img
              src={preview}
              alt="Selected crop image"
              className="w-full h-64 object-cover rounded-lg"
            />
            <button
              onClick={handleClear}
              className="absolute top-2 right-2 btn btn-circle btn-sm btn-error"
              aria-label="Remove image"
            >
              <Icon name="close" size="sm" />
            </button>
          </div>
        ) : (
          <div className="border-2 border-dashed border-base-300 rounded-lg p-8 text-center">
            <Icon name="add_a_photo" size="xl" className="text-base-content/40 mx-auto mb-4" />
            <p className="text-base-content/70 mb-4">
              വിളയുടെ ചിത്രം അപ്‌ലോഡ് ചെയ്യുക
            </p>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="primary"
                size="lg"
                icon="photo_camera"
                onClick={handleCameraClick}
                className="w-full sm:w-auto"
              >
                ക്യാമറ
              </Button>
              <Button
                variant="secondary"
                size="lg"
                icon="image"
                onClick={handleGalleryClick}
                className="w-full sm:w-auto"
              >
                ഗാലറി
              </Button>
            </div>
            
            <p className="text-sm text-base-content/50 mt-4">
              പരമാവധി {maxSizeMB}MB വരെ
            </p>
          </div>
        )}
        
        {/* Error display */}
        {error && (
          <div className="alert alert-error mt-4" role="alert">
            <Icon name="error" />
            <span>{error}</span>
          </div>
        )}
      </div>
    </div>
  );
};
```

**3. QueryCard Component (History Display)**
```tsx
// components/molecules/QueryCard/QueryCard.tsx
import React from 'react';
import { Icon } from '@/components/atoms/Icon';
import { Badge } from '@/components/atoms/Badge';

export interface QueryCardProps {
  id: string;
  question: string;
  answer?: string;
  status: 'pending' | 'answered' | 'escalated';
  timestamp: Date;
  crop?: string;
  hasImage?: boolean;
  confidence?: number;
  onClick?: () => void;
  className?: string;
}

export const QueryCard: React.FC<QueryCardProps> = ({
  question,
  answer,
  status,
  timestamp,
  crop,
  hasImage,
  confidence,
  onClick,
  className = '',
}) => {
  const statusConfig = {
    pending: { icon: 'schedule', color: 'warning', text: 'കാത്തിരിക്കുന്നു' },
    answered: { icon: 'check_circle', color: 'success', text: 'ഉത്തരം ലഭിച്ചു' },
    escalated: { icon: 'support_agent', color: 'info', text: 'ഉദ്യോഗസ്ഥന് അയച്ചു' },
  };
  
  const config = statusConfig[status];
  
  const formatTime = (date: Date): string => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 60) return `${diffMins} മിനിറ്റ് മുമ്പ്`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours} മണിക്കൂർ മുമ്പ്`;
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} ദിവസം മുമ്പ്`;
  };
  
  return (
    <div
      className={`card bg-base-100 shadow hover:shadow-lg transition-shadow cursor-pointer ${className}`}
      onClick={onClick}
      role="article"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onClick?.()}
    >
      <div className="card-body p-4">
        {/* Header with status and time */}
        <div className="flex items-center justify-between mb-3">
          <Badge variant={config.color} size="sm">
            <Icon name={config.icon} size="xs" />
            <span className="ml-1">{config.text}</span>
          </Badge>
          <span className="text-sm text-base-content/60">
            {formatTime(timestamp)}
          </span>
        </div>
        
        {/* Question */}
        <h3 className="font-semibold text-base-content mb-2 line-clamp-2">
          {question}
        </h3>
        
        {/* Answer preview (if available) */}
        {answer && (
          <p className="text-sm text-base-content/70 line-clamp-2 mb-3">
            {answer}
          </p>
        )}
        
        {/* Metadata */}
        <div className="flex flex-wrap gap-2 items-center">
          {crop && (
            <span className="badge badge-outline badge-sm">
              <Icon name="agriculture" size="xs" />
              <span className="ml-1">{crop}</span>
            </span>
          )}
          {hasImage && (
            <span className="badge badge-outline badge-sm">
              <Icon name="image" size="xs" />
              <span className="ml-1">ചിത്രം</span>
            </span>
          )}
          {confidence && (
            <span className="badge badge-outline badge-sm">
              <Icon name="verified" size="xs" />
              <span className="ml-1">{Math.round(confidence * 100)}% ഉറപ്പ്</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
```

---

**Molecule Components Inventory:**

| Component | Combines | Purpose | Key Props | Accessibility |
|-----------|----------|---------|-----------|---------------|
| **VoiceRecorder** | Button + VoiceIndicator + Transcript | Voice input interface | onRecordingComplete, maxDuration, lang | Live regions, ARIA busy states |
| **ImageUploader** | Input + Preview + Buttons | Crop image upload | onImageSelect, maxSizeMB | Camera/gallery choice, file validation |
| **QueryCard** | Badge + Text + Icons | Query history item | question, answer, status | Keyboard accessible, semantic structure |
| **CropSelector** | Dropdown + Icon + Label | Crop selection | crops, selectedCrop, onChange | Searchable, keyboard navigation |
| **LocationPicker** | Map + Autocomplete | Location selection | onLocationSelect | Geolocation API, fallback input |
| **ResponseCard** | Text + Audio + Actions | AI/Officer response | response, audioUrl, feedback | Text-to-speech, playback controls |
| **FormField** | Label + Input + Error | Form input with validation | label, name, error, required | Proper associations, error announcement |
| **SearchBar** | Input + Icon + Button | Search functionality | value, onSearch, placeholder | Search landmark role |
| **StatusBanner** | Icon + Text + Action | Status notifications | type, message, action | ARIA live regions |

---

### Organism Components

**1. QueryInputPanel (Core User Interface)**
```tsx
// components/organisms/QueryInputPanel/QueryInputPanel.tsx
import React, { useState } from 'react';
import { VoiceRecorder } from '@/components/molecules/VoiceRecorder';
import { ImageUploader } from '@/components/molecules/ImageUploader';
import { CropSelector } from '@/components/molecules/CropSelector';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';

export interface QueryInputPanelProps {
  onSubmit: (query: QueryData) => void;
  className?: string;
}

interface QueryData {
  text: string;
  audioBlob?: Blob;
  imageFile?: File;
  imagePreview?: string;
  crop?: string;
  location?: GeolocationCoordinates;
}

export const QueryInputPanel: React.FC<QueryInputPanelProps> = ({
  onSubmit,
  className = '',
}) => {
  const [inputMode, setInputMode] = useState<'voice' | 'text' | 'image'>('voice');
  const [queryData, setQueryData] = useState<Partial<QueryData>>({});
  const [textInput, setTextInput] = useState('');
  
  const handleVoiceComplete = (audioBlob: Blob, transcript: string) => {
    setQueryData(prev => ({
      ...prev,
      text: transcript,
      audioBlob,
    }));
  };
  
  const handleImageSelect = (file: File, preview: string) => {
    setQueryData(prev => ({
      ...prev,
      imageFile: file,
      imagePreview: preview,
    }));
  };
  
  const handleSubmit = () => {
    const finalData: QueryData = {
      text: inputMode === 'text' ? textInput : (queryData.text || ''),
      ...queryData,
    };
    onSubmit(finalData);
    
    // Reset form
    setQueryData({});
    setTextInput('');
  };
  
  const isValid = () => {
    if (inputMode === 'text') return textInput.trim().length > 0;
    if (inputMode === 'voice') return !!queryData.text;
    if (inputMode === 'image') return !!queryData.imageFile;
    return false;
  };
  
  return (
    <div className={`bg-base-100 rounded-lg shadow-xl p-4 sm:p-6 ${className}`}>
      {/* Input mode selector */}
      <div className="flex gap-2 mb-6" role="tablist">
        <button
          role="tab"
          aria-selected={inputMode === 'voice'}
          aria-controls="voice-panel"
          className={`btn flex-1 ${inputMode === 'voice' ? 'btn-primary' : 'btn-ghost'}`}
          onClick={() => setInputMode('voice')}
        >
          <Icon name="mic" />
          <span>ശബ്ദം</span>
        </button>
        <button
          role="tab"
          aria-selected={inputMode === 'text'}
          aria-controls="text-panel"
          className={`btn flex-1 ${inputMode === 'text' ? 'btn-primary' : 'btn-ghost'}`}
          onClick={() => setInputMode('text')}
        >
          <Icon name="keyboard" />
          <span>ടൈപ്പ് ചെയ്യുക</span>
        </button>
        <button
          role="tab"
          aria-selected={inputMode === 'image'}
          aria-controls="image-panel"
          className={`btn flex-1 ${inputMode === 'image' ? 'btn-primary' : 'btn-ghost'}`}
          onClick={() => setInputMode('image')}
        >
          <Icon name="photo_camera" />
          <span>ചിത്രം</span>
        </button>
      </div>
      
      {/* Voice input panel */}
      {inputMode === 'voice' && (
        <div id="voice-panel" role="tabpanel" aria-labelledby="voice-tab">
          <VoiceRecorder
            onRecordingComplete={handleVoiceComplete}
            lang="ml"
          />
        </div>
      )}
      
      {/* Text input panel */}
      {inputMode === 'text' && (
        <div id="text-panel" role="tabpanel" aria-labelledby="text-tab">
          <div className="form-control">
            <label htmlFor="text-query" className="label">
              <span className="label-text">നിങ്ങളുടെ ചോദ്യം ടൈപ്പ് ചെയ്യുക</span>
            </label>
            <textarea
              id="text-query"
              className="textarea textarea-bordered h-32 text-lg"
              placeholder="ഉദാ: നെല്ലിന് കീടബാധയുണ്ട്, എന്ത് ചെയ്യണം?"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              lang="ml"
            />
          </div>
        </div>
      )}
      
      {/* Image input panel */}
      {inputMode === 'image' && (
        <div id="image-panel" role="tabpanel" aria-labelledby="image-tab">
          <ImageUploader
            onImageSelect={handleImageSelect}
          />
        </div>
      )}
      
      {/* Additional context */}
      <div className="mt-6 space-y-4">
        <CropSelector
          selectedCrop={queryData.crop}
          onSelect={(crop) => setQueryData(prev => ({ ...prev, crop }))}
        />
      </div>
      
      {/* Submit button */}
      <Button
        variant="primary"
        size="lg"
        fullWidth
        onClick={handleSubmit}
        disabled={!isValid()}
        icon="send"
        iconPosition="right"
        className="mt-6"
      >
        സമർപ്പിക്കുക
      </Button>
    </div>
  );
};
```

**2. ResponseDisplay (AI Answer Display)**
```tsx
// components/organisms/ResponseDisplay/ResponseDisplay.tsx
import React, { useState } from 'react';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { Badge } from '@/components/atoms/Badge';

export interface ResponseDisplayProps {
  response: {
    text: string;
    confidence: number;
    sources?: string[];
    audioUrl?: string;
    recommendations?: string[];
    escalated?: boolean;
  };
  onFeedback?: (helpful: boolean) => void;
  onPlayAudio?: () => void;
  className?: string;
}

export const ResponseDisplay: React.FC<ResponseDisplayProps> = ({
  response,
  onFeedback,
  onPlayAudio,
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasGivenFeedback, setHasGivenFeedback] = useState(false);
  
  const handleFeedback = (helpful: boolean) => {
    onFeedback?.(helpful);
    setHasGivenFeedback(true);
  };
  
  return (
    <div className={`card bg-base-100 shadow-xl ${className}`}>
      <div className="card-body p-6">
        {/* Confidence badge */}
        <div className="flex items-center justify-between mb-4">
          <Badge variant={response.confidence > 0.8 ? 'success' : 'warning'}>
            <Icon name="verified" size="xs" />
            <span className="ml-1">
              {Math.round(response.confidence * 100)}% ഉറപ്പ്
            </span>
          </Badge>
          
          {response.escalated && (
            <Badge variant="info">
              <Icon name="support_agent" size="xs" />
              <span className="ml-1">ഉദ്യോഗസ്ഥർ പരിശോധിക്കുന്നു</span>
            </Badge>
          )}
        </div>
        
        {/* Audio playback */}
        {response.audioUrl && (
          <Button
            variant="ghost"
            size="sm"
            icon={isPlaying ? 'pause_circle' : 'play_circle'}
            onClick={() => {
              setIsPlaying(!isPlaying);
              onPlayAudio?.();
            }}
            className="mb-4"
          >
            {isPlaying ? 'താൽക്കാലികമായി നിർത്തുക' : 'ഉത്തരം കേൾക്കുക'}
          </Button>
        )}
        
        {/* Response text */}
        <div className="prose max-w-none mb-6">
          <p className="text-base-content text-lg leading-relaxed">
            {response.text}
          </p>
        </div>
        
        {/* Recommendations (if any) */}
        {response.recommendations && response.recommendations.length > 0 && (
          <div className="bg-success/10 border-l-4 border-success p-4 rounded-r-lg mb-6">
            <h4 className="font-semibold text-success mb-2 flex items-center gap-2">
              <Icon name="lightbulb" size="sm" />
              ശുപാർശകൾ:
            </h4>
            <ul className="space-y-2">
              {response.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Icon name="check_circle" size="sm" className="text-success mt-1 flex-shrink-0" />
                  <span className="text-base-content/80">{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Sources */}
        {response.sources && response.sources.length > 0 && (
          <details className="collapse collapse-arrow bg-base-200 mb-6">
            <summary className="collapse-title font-medium">
              <Icon name="source" size="sm" className="inline mr-2" />
              ഉറവിടങ്ങൾ ({response.sources.length})
            </summary>
            <div className="collapse-content">
              <ul className="list-disc list-inside space-y-1">
                {response.sources.map((source, index) => (
                  <li key={index} className="text-sm text-base-content/70">
                    {source}
                  </li>
                ))}
              </ul>
            </div>
          </details>
        )}
        
        {/* Feedback */}
        {!hasGivenFeedback ? (
          <div className="flex items-center justify-between pt-4 border-t border-base-300">
            <span className="text-sm text-base-content/70">
              ഈ ഉത്തരം സഹായകരമായിരുന്നോ?
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => handleFeedback(true)}
                className="btn btn-ghost btn-sm btn-circle"
                aria-label="Helpful"
              >
                <Icon name="thumb_up" size="sm" />
              </button>
              <button
                onClick={() => handleFeedback(false)}
                className="btn btn-ghost btn-sm btn-circle"
                aria-label="Not helpful"
              >
                <Icon name="thumb_down" size="sm" />
              </button>
            </div>
          </div>
        ) : (
          <div className="alert alert-success py-2">
            <Icon name="check_circle" size="sm" />
            <span className="text-sm">നന്ദി! നിങ്ങളുടെ അഭിപ്രായം രേഖപ്പെടുത്തി</span>
          </div>
        )}
      </div>
    </div>
  );
};
```

---

**Organism Components Inventory:**

| Component | Purpose | Complexity | Key Features | Accessibility |
|-----------|---------|------------|--------------|---------------|
| **QueryInputPanel** | Main query interface | High | Voice/text/image modes, crop selection | Tab navigation, mode switching |
| **ResponseDisplay** | AI answer presentation | High | Confidence score, audio, recommendations | Audio playback controls, feedback |
| **QueryHistoryList** | Query history display | Medium | Filterable list, status indicators | Keyboard navigation, load more |
| **Navbar** | App navigation | Medium | Logo, profile, language toggle, notifications | 1:08 PM
Skip links, mobile menu | | Footer | App footer | Low | Links, contact, government info | Semantic structure | | KnowledgeBaseGrid | Browse resources | Medium | Categories, search, filters | Grid semantics, lazy loading | | OfficerDashboard | Officer query management | High | Query queue, priority, assignment | Table semantics, filters | | FarmerProfile | User profile/settings | Medium | Farm details, preferences | Form validation | | CropCalendar | Seasonal reminders | Medium | Timeline, notifications | Date navigation | | WeatherWidget | Current weather info | Low | Location-based, IMD data | Live updates |

Layout Components (Templates)
1. MainLayout (Farmer Interface)

tsx
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
2. OfficerLayout (Admin Interface)

tsx
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
Layout Components Inventory:

Layout	Purpose	Structure	Use Cases	Notes
MainLayout	Farmer interface	Navbar + Content + BottomNav/Footer	Query, History, Profile	Mobile-first, PWA-ready
OfficerLayout	Officer dashboard	Sidebar + Topbar + Content	Query management, analytics	Desktop-optimized
AuthLayout	Authentication	Centered form + branding	Login, OTP verification	Government branding
OnboardingLayout	First-time setup	Stepper + form	Farm setup, preferences	Progress indicator
ErrorLayout	Error pages	Centered message + action	404, 500, offline	Friendly messaging
Page Components
1. HomePage (Query Interface)

tsx
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
2. HistoryPage (Query History)

tsx
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
Page Components Inventory:

Page	Route	Layout	Key Sections	Purpose
HomePage	/	MainLayout	QueryInput, Weather, Calendar	Main query interface
HistoryPage	/history	MainLayout	Search, QueryList	View past queries
KnowledgeBasePage	/knowledge	MainLayout	Categories, ResourceGrid	Browse resources
ProfilePage	/profile	MainLayout	FarmDetails, Settings	Manage profile
LoginPage	/login	AuthLayout	Phone input, OTP	Authentication
OnboardingPage	/onboarding	OnboardingLayout	Farm setup wizard	First-time setup
OfficerDashboardPage	/officer	OfficerLayout	QueryQueue, Analytics	Officer interface
NotFoundPage	*	ErrorLayout	404 message	Error handling
Google Stitch Wireframe Structure
Wireframe Guidelines
Design Tool: Google Stitch (or Figma/Excalidraw as alternatives)

Viewport Sizes to Design:

Mobile: 375px x 667px (iPhone SE - primary target)
Tablet: 768px x 1024px
Desktop: 1440px x 900px
Component States to Show:

Default
Hover (desktop only)
Active/Focus
Loading
Error
Empty state
Page 1: Home / Query Interface (/)
Purpose: Primary interface for farmers to ask questions

Layout Type: Mobile-first, single column

Block Structure:

Block 1 - Header/Navbar:

Component Type: Navigation bar
Elements:
Logo (left): "കൃഷി വാണി" with Government of Kerala emblem
Language toggle (right): ML/EN buttons
Profile icon (right): User avatar/login
Notifications bell (right): Alert count badge
Responsive: Collapses to hamburger on mobile, full on desktop
Block 2 - Welcome Banner:

Component Type: Hero section (compact)
Elements:
Greeting: "സ്വാഗതം, [Name]" (or generic if not logged in)
Subtitle: "നിങ്ങളുടെ കാർഷിക ചോദ്യങ്ങൾക്ക് ഉത്തരം നേടുക"
Weather widget (inline): Today's weather with icon + temp
Background: Subtle gradient (primary-light)
Responsive: Full width, padding adjusts
Block 3 - Query Input Panel (Primary CTA):

Component Type: Tabbed card interface
Elements:
Mode tabs (3): Voice | Text | Image (icons + labels)
Active panel content:
Voice: Large mic button (primary color, pulsing when active), recording indicator, transcript display
Text: Large textarea with Malayalam placeholder, character count
Image: Camera button + Gallery button, image preview area
Crop selector dropdown (below input)
Location indicator (with edit option)
Submit button (large, primary, full-width): "സമർപ്പിക്കുക"
Placeholder Content:
Voice: "മൈക്രോഫോൺ അമർത്തി ചോദ്യം പറയുക"
Text: "ഉദാ: നെല്ലിന് ഇലപ്പുള്ളി രോഗം, എന്ത് മരുന്ന് ഉപയോഗിക്കണം?"
Responsive: Card full-width on mobile, max-width on desktop
Block 4 - Quick Actions / Shortcuts:

Component Type: Horizontal scrollable cards
Elements:
Card 1: "എന്റെ ചരിത്രം" (History) - icon + label
Card 2: "അറിവ് ശേഖരം" (Knowledge Base) - icon + label
Card 3: "കാലാവസ്ഥ വിവരം" (Weather) - icon + label
Card 4: "വിള കലണ്ടർ" (Crop Calendar) - icon + label
Responsive: Scroll horizontally on mobile, grid on desktop
Block 5 - Crop Calendar Widget (Contextual):

Component Type: Timeline card
Elements:
Title: "ഈ മാസത്തെ പ്രവർത്തനങ്ങൾ"
Timeline items (3-4):
Icon (calendar/plant)
Activity name: "വളം ഇടുക"
Date range: "ഡിസംബർ 15-20"
CTA: "കൂടുതൽ അറിയുക"
Responsive: Stacks vertically, slightly compressed on mobile
Navigation:

Entry Points: Direct URL, app launch
Exit Points: History page, Knowledge Base, Profile
Primary CTA: "സമർപ്പിക്കുക" button in query panel
Page 2: Query Result / Response (/query/:id)
Purpose: Display AI-generated answer to farmer's question

Layout Type: Single column, response-focused

Block 1 - Header (same as Home):

Back button (left) to return to home
Query ID for reference
Block 2 - Original Query Recap:

Component Type: Compact card
Elements:
User's question text (highlighted)
Timestamp
Crop badge (if specified)
Image thumbnail (if uploaded) - click to expand
Responsive: Full width
Block 3 - AI Response Card:

Component Type: Large content card
Elements:
Confidence badge (top-right): "85% ഉറപ്പ്" with icon
Audio playback button: "ഉത്തരം കേൾക്കുക" (Play icon)
Response text (large, readable font)
Recommendations section (if any):
Heading: "ശുപാർശകൾ"
Bulleted list with checkmark icons
Sources (collapsible):
"ഉറവിടങ്ങൾ (3)" - expandable
List of source citations
Responsive: Padding adjusts, audio button prominent on mobile
Block 4 - Related Images/Visual Aids:

Component Type: Image gallery
Elements:
Comparison images (healthy vs diseased crop)
Treatment demonstration images
Swipeable on mobile
Responsive: Horizontal scroll on mobile, grid on desktop
Block 5 - Action Buttons:

Component Type: Button group
Elements:
"വീണ്ടും ചോദിക്കുക" (Ask Again) - secondary
"ഉദ്യോഗസ്ഥനോട് സംസാരിക്കുക" (Talk to Officer) - if low confidence
"പങ്കിടുക" (Share) - outline
Responsive: Stack vertically on mobile
Block 6 - Feedback Section:

Component Type: Feedback card
Elements:
Question: "ഈ ഉത്തരം സഹായകരമായിരുന്നോ?"
Thumbs up/down buttons
Optional text feedback box (if negative)
Responsive: Inline on desktop, stacked on mobile
Navigation:

Entry Points: From query submission, history list
Exit Points: Back to home, officer escalation, share
Primary CTA: Feedback buttons
Page 3: Query History (/history)
Purpose: Browse past queries and responses

Layout Type: List view with filters

Block 1 - Header:

Component Type: Page header with search
Elements:
Title: "ചോദ്യ ചരിത്രം"
Search bar: "തിരയുക..." with search icon
Filter button: Icon + "ഫിൽട്ടർ" (opens filter panel)
Responsive: Search full-width on mobile
Block 2 - Filter Panel (Collapsible):

Component Type: Filter sidebar/panel
Elements:
Status filter: All | Answered | Pending | Escalated
Crop filter: Multi-select dropdown
Date range: Date picker
"പ്രയോഗിക്കുക" (Apply) button
Responsive: Drawer on mobile, sidebar on desktop
Block 3 - Query List:

Component Type: Scrollable list of query cards
Elements (per card):
Status badge (top-right): Answered/Pending/Escalated
Timestamp (top-left): "2 മണിക്കൂർ മുമ്പ്"
Question text (truncated to 2 lines)
Answer preview (if available, 2 lines)
Metadata: Crop badge, image indicator, confidence score
Tap/click to view full details
Placeholder Content: "നിങ്ങൾക്ക് ഇതുവരെ ചോദ്യങ്ങളില്ല" (empty state)
Responsive: Cards full-width with padding
Block 4 - Pagination / Load More:

Component Type: Load more button
Elements:
"കൂടുതൽ കാണിക്കുക" button
Loading spinner when fetching
Responsive: Full-width button
Navigation:

Entry Points: Bottom nav, home shortcuts
Exit Points: Individual query detail pages
Primary CTA: Query cards (to detail view)
Page 4: Knowledge Base / Resources (/knowledge)
Purpose: Browse agricultural resources, guides, videos

Layout Type: Grid with categories

Block 1 - Header:

Component Type: Page header with search
Elements:
Title: "അറിവ് ശേഖരം"
Search bar with filters
Responsive: Standard header treatment
Block 2 - Category Tabs:

Component Type: Horizontal tab navigation
Elements:
All | Crops | Pests | Fertilizers | Schemes | Videos
Active tab indicator (underline, primary color)
Responsive: Scrollable on mobile
Block 3 - Resource Grid:

Component Type: Card grid
Elements (per card):
Thumbnail image/icon
Title (Malayalam)
Brief description (1-2 lines)
Type badge: Article | Video | PDF
View count (optional)
Grid Layout: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)
Responsive: Cards adjust size
Block 4 - Featured Resource (Top):

Component Type: Hero card (larger)
Elements:
Large image
"ഫീച്ചർ ചെയ്തത്" badge
Title + description
CTA: "കൂടുതൽ വായിക്കുക"
Responsive: Full-width on all devices
Navigation:

Entry Points: Bottom nav, home shortcuts
Exit Points: Individual resource detail pages
Primary CTA: Resource cards
Page 5: Farmer Profile (/profile)
Purpose: Manage farm details, preferences, settings

Layout Type: Form-based sections

Block 1 - Header:

Component Type: Profile header
Elements:
Avatar (editable)
Name
Phone number
Edit button
Responsive: Centered on mobile
Block 2 - Farm Details Section:

Component Type: Form section
Elements:
Farm name (input)
Location (map picker + text)
Total land area (input + unit)
Crops grown (multi-select)
Save button
Responsive: Form fields stack
Block 3 - Preferences Section:

Component Type: Settings list
Elements:
Language preference: ML/EN toggle
Notification preferences: Toggles for each type
Voice input default: On/Off
Responsive: List items full-width
Block 4 - Query Statistics (Optional):

Component Type: Stats cards
Elements:
Total queries
Resolved queries
Pending queries
Responsive: 2-column on mobile, 3-column on desktop
Block 5 - Account Actions:

Component Type: Action list
Elements:
"ബന്ധപ്പെടുക" (Contact Support)
"വിഷയം" (About)
"ലോഗ് ഔട്ട്" (Logout) - danger color
Responsive: Full-width buttons
Navigation:

Entry Points: Bottom nav, navbar profile icon
Exit Points: Logout to login page
Primary CTA: Save button
Page 6: Officer Dashboard (/officer)
Purpose: Agricultural officers manage escalated queries

Layout Type: Dashboard with sidebar (desktop-first)

Block 1 - Topbar:

Component Type: Dashboard header
Elements:
Logo + "Officer Dashboard"
Officer name + avatar
Notifications
Logout
Responsive: Hamburger menu on mobile
Block 2 - Sidebar Navigation:

Component Type: Vertical nav menu
Elements:
Dashboard (icon + label)
Query Queue
Analytics
Resources
Settings
Responsive: Drawer on mobile, fixed sidebar on desktop
Block 3 - Stats Overview:

Component Type: Stat cards row
Elements:
Pending queries (count + icon)
Resolved today (count + icon)
Average response time
Farmer satisfaction (percentage)
Responsive: 2x2 grid on mobile, row on desktop
Block 4 - Query Queue Table:

Component Type: Data table
Elements:
Columns: Query ID, Farmer, Question (truncated), Crop, Priority, Time, Action
Sort by: Time, Priority
Action button per row: "View Details"
Pagination controls
Responsive: Horizontal scroll on mobile, full table on desktop
Block 5 - Quick Filters:

Component Type: Filter chips
Elements:
All | High Priority | Pending | Today
Active chip highlighted
Responsive: Horizontal scroll
Navigation:

Entry Points: Officer login
Exit Points: Individual query detail pages
Primary CTA: "View Details" on each query
Page 7: Login / Authentication (/login)
Purpose: Phone-based login with OTP

Layout Type: Centered form

Block 1 - Branding Header:

Component Type: Centered logo
Elements:
Large logo: "കൃഷി വാണി"
Government of Kerala emblem
Tagline
Responsive: Scales down on mobile
Block 2 - Login Card:

Component Type: Centered form card
Elements:
Step 1: Phone number input
Label: "മൊബൈൽ നമ്പർ"
Input: +91 prefix, 10 digits
"OTP അയയ്ക്കുക" button
Step 2: OTP input (after Step 1)
6-digit OTP input boxes
"സ്ഥിരീകരിക്കുക" button
Resend OTP link
Error messages (if applicable)
Responsive: Max-width 400px, centered
Block 3 - Footer Links:

Component Type: Text links
Elements:
"Help & Support"
"About"
Responsive: Centered
Navigation:

Entry Points: App launch (if not logged in), logout
Exit Points: Home page (after successful login)
Primary CTA: "സ്ഥിരീകരിക്കുക" button
Responsive Wireframe Constraints
Mobile (<640px):

Single column layouts
Bottom navigation visible
Cards full-width with 16px padding
Large touch targets (48px minimum)
Horizontal scrolling for card groups
Hamburger menu for navigation
Tablet (640px-1023px):

2-column layouts for grids
Sidebar navigation can appear
Touch targets remain large (44px)
More breathing room (24px padding)
Desktop (≥1024px):

3-4 column grid layouts
Persistent sidebar navigation
Hover states visible
Compact touch targets acceptable (40px)
Footer always visible
No bottom navigation
Wireframe Export & Documentation
Export Requirements:

Screenshots for each page:
Mobile (375px)
Tablet (768px)
Desktop (1440px)
Component annotations:
Label all interactive elements
Specify tap/click areas
Note state changes (hover, focus, active)
Mark scroll directions
Color & spacing notes:
Primary CTA: btn-primary (green)
Secondary actions: btn-secondary (brown)
Card shadows: shadow-lg
Spacing: 4px increments (gap-4, p-6, etc.)
Accessibility notes:
Min touch target size: 48x48px
Focus indicators: 2px primary outline
Text contrast: WCAG AA minimum
Screen reader labels for icon-only buttons
Component mapping:
List all reusable components used
Map to actual code components (atoms, molecules, organisms)
Note any custom components needed
End of Krishi Vaani PRD Document

Implementation Roadmap (12 Days)
Phase 1: Foundation & Core Features (Days 1-8)
Days 1-2: Project Setup & Infrastructure

Initialize React + TypeScript project with Vite
Configure TailwindCSS + DaisyUI theme
Set up backend (Node.js + Express + MongoDB)
Implement authentication (JWT + OTP)
Configure Google Cloud services (Speech-to-Text, Vision API, Vertex AI)
Set up i18n for Malayalam/English
Create base component library (atoms)
Days 3-4: Voice & Image Input

Implement voice recording functionality
Integrate Google Cloud Speech-to-Text (Malayalam)
Build image upload & compression
Connect to Google Cloud Vision API for disease detection
Create query submission flow
Implement offline queueing
Days 5-6: AI Response Engine

Fine-tune LLM with Kerala agricultural data
Build context-aware query processing
Implement response generation
Add confidence scoring
Create text-to-speech for responses
Build response display UI
Days 7-8: User Features

Implement query history
Add farmer profile management
Build crop selector & location picker
Create weather widget (IMD integration)
Implement notification system
Add feedback mechanism
Phase 2: Enhanced Features (Days 9-11)
Days 9-10: Officer Dashboard & Escalation

Build officer authentication
Create query escalation logic
Develop officer dashboard
Implement query assignment system
Add analytics & reporting
Build real-time notifications (Socket.io)
Day 11: Knowledge Base & Resources

Create resource management system
Build category browsing
Implement search functionality
Add video library
Create government schemes database
Implement market price integration
Phase 3: Polish & Testing (Day 12)
Day 12: Testing, Optimization & Deployment

Comprehensive testing (functionality, accessibility, performance)
Optimize for low-bandwidth networks
PWA configuration & offline support
User acceptance testing with farmers
Security audit
Deployment to Google Cloud
Documentation & training materials
Success Metrics
User Engagement:

Daily active farmers
Average queries per user
Voice vs text vs image input ratio
Query completion rate
Response Quality:

Average confidence score
Farmer satisfaction rating (thumbs up/down)
Officer escalation rate
Resolution time
Technical Performance:

API response time (<2s for text, <5s for voice/image)
Offline functionality success rate
Speech recognition accuracy (Malayalam)
Image classification accuracy
App load time (<3s on 3G)
Agricultural Impact:

Most common crop issues identified
Seasonal query patterns
Regional agricultural trends
Farmer retention rate
Officer workload reduction



