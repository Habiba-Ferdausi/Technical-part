# Real-Time Location & Infinite-Users - Technical task

A showcase Next.js 15 app that lets you

1. **Share** your device’s live GPS (“Sender”),  
2. **Track** shared locations on an interactive map (“Track”), and  
3. **Browse** a virtualised, infinite-scroll list of user profiles (“Users”).

Data moves through a public SignalR hub; the user feed is fetched from a
sample REST API.

---

## 🚀 Quick Start

```bash
# 1 Clone
git clone https://github.com/<your-handle>/realtime-location-demo.git
cd realtime-location-demo

# 2 Install deps
pnpm install           # or npm i / yarn

# 3 Run dev server
pnpm dev
# open http://localhost:3000
