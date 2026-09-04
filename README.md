# SKYE — Postpartum Support Platform

SKYE is a research-driven postpartum support platform designed to make the early postpartum experience feel less overwhelming, fragmented, and isolating.

The platform brings together guided wellbeing check-ins, culturally aware postpartum information, peer community, private professional support, and expert resources in one calm, low-friction experience.

> **Note:** SKYE is a product prototype created for research and design exploration. It is not a medical device and does not provide medical diagnosis or emergency care.

---

## The Problem

Postpartum recovery involves much more than physical healing. New mothers may simultaneously navigate physical symptoms, emotional changes, conflicting advice, cultural expectations, newborn care, and uncertainty about when professional support is needed.

Information is often scattered across healthcare resources, family advice, online communities, and cultural traditions.

SKYE explores a simple product question:

**What if postpartum support met mothers where they are — emotionally, culturally, and practically — instead of making them search across disconnected resources?**

---

## Core Experience

### Guided Check-Ins

Users can quickly check in when:

- their body feels off
- they feel overwhelmed
- something simply doesn't feel right

Instead of presenting a dense health dashboard, SKYE asks a small number of clear questions about what the user is experiencing and how it has changed.

The experience then provides supportive context, simple next steps, the ability to save the check-in, and a clear path to professional support.

---

### Cultural Bridge

Postpartum advice can differ significantly between medical guidance and family or cultural traditions.

The Cultural Bridge allows users to explore topics such as:

- Diet
- Rest & Sleep
- Recovery
- Baby Care
- Emotions
- Rituals & Beliefs

Rather than framing one perspective as "right" and the other as "wrong," SKYE presents **traditional wisdom and medical guidance side by side** and highlights areas where they align.

---

### Community

The community space gives mothers a place to ask questions and learn from shared experiences.

Features include:

- topic-based discussions
- anonymous posting
- peer responses
- professional responses
- clear visual distinction between peer and verified professional guidance

---

### Private Professional Support

Users can privately communicate with healthcare and support professionals when they need additional guidance.

The interface prioritizes privacy, professional identity, and a clear transition from self-guided support to human support.

---

### Resources & Expert Sessions

SKYE includes upcoming and on-demand sessions covering topics such as:

- postpartum recovery
- mental wellbeing
- breastfeeding
- newborn care
- sleep

The goal is to make expert information easier to discover without overwhelming users with a large resource library.

---

## Product & UX Principles

The experience was designed around the reality that postpartum users may be tired, overwhelmed, distracted, or using the product one-handed.

Design decisions therefore prioritize:

**Low cognitive load**  
Short interactions and focused choices instead of dense dashboards.

**Emotional reassurance**  
Supportive language without making assumptions about how the user should feel.

**Clear next steps**  
Every important interaction should help the user understand what they can do next.

**Cultural sensitivity**  
Traditional practices are acknowledged respectfully alongside medical perspectives.

**Privacy**  
Sensitive conversations and check-ins are treated as personal experiences rather than social activity.

**Human escalation**  
The product should make it easy to move from digital guidance to professional support when appropriate.

---

## Prototype Screens

The current interactive prototype includes:

- Home
- Quick Check-In
- Check-In Results
- Check-In History
- Cultural Bridge
- Community
- Community Post & Replies
- Private Messages
- Professional Conversation
- Resources & Webinars
- Profile
- Full Design Showcase

A dedicated `/showcase` view is also included for reviewing the major product screens together.

---

## Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS v4**
- Component-based UI architecture
- Responsive mobile-first interface

The prototype was initially explored through Figma and later developed into an interactive React experience.

---

## Project Structure

```text
src/
├── components/
│   └── BottomNav.tsx
│
├── screens/
│   ├── HomeScreen.tsx
│   ├── CheckInScreen.tsx
│   ├── CheckInHistoryScreen.tsx
│   ├── CulturalBridgeScreen.tsx
│   ├── CommunityScreen.tsx
│   ├── PostDetailScreen.tsx
│   ├── MessagesScreen.tsx
│   ├── ConversationScreen.tsx
│   ├── ResourcesScreen.tsx
│   ├── ProfileScreen.tsx
│   └── ShowcasePage.tsx
│
├── App.tsx
├── index.css
└── main.tsx
```

---

## Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/gracy1305/skye-postpartum-support.git
cd skye-postpartum-support
```

### 2. Install dependencies

Using pnpm:

```bash
pnpm install
```

Or npm:

```bash
npm install
```

### 3. Start the development server

```bash
pnpm dev
```

or

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

To view the complete design showcase, navigate to:

```text
/showcase
```

---

## Current Scope

SKYE is currently a **front-end interactive prototype** focused on product experience, information architecture, interaction design, and postpartum-support workflows.

The current professional profiles, conversations, community posts, check-in responses, and health-related content are illustrative prototype data rather than live healthcare services.

---

## Future Exploration

Potential future development includes:

- secure authentication and user accounts
- persistent check-in history
- configurable privacy controls
- verified professional onboarding
- appointment and referral workflows
- localization and multilingual support
- accessibility testing
- usability studies with postpartum users
- secure backend infrastructure for sensitive health information

---

## About the Project

SKYE explores the intersection of **human-computer interaction, healthcare technology, cultural context, and supportive product design**.

The project focuses not only on what information a postpartum platform can provide, but also on **how that information should be presented when a user may already be physically and emotionally overwhelmed.**

---

## Project Context

SKYE was developed as a collaborative academic project exploring postpartum support through human-centered design and technology.

This repository contains the interactive prototype and implementation I am showcasing as part of my project portfolio.

---

*SKYE is an educational and research prototype. It is not intended to replace professional medical advice, diagnosis, or treatment.*
