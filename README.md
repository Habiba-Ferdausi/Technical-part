# Real-Time Location & Infinite-Users Technical test

A compact **Next.js 15** playground showcasing real-time features including live GPS sharing, location tracking, and infinite user list browsing.



##  Features

1. **Live GPS Sharing** (`/sender`)
   - Broadcast your device's real-time location
   - Automatic position updates
   - Error handling for GPS permissions

2. **Interactive Map Tracking** (`/track`)
   - View multiple shared locations on OpenStreetMap
   - Real-time marker updates
   - Customizable map view

3. **Infinite User List** (`/users`)
   - Virtualized scrolling for performance
   - Simulated infinite data loading
   - Responsive card layout

##  Quick Start

### Development

```bash
# Clone the repository
git clone [https://github.com/Habiba-Ferdausi/Technical-part.git]
cd Technical-part

# Install dependencies
pnpm install  # or npm install / yarn

# Start development server
pnpm dev
# Open http://localhost:3000




## 🛠 Technology Stack

### Core Framework
| Component           | Technology           | Description                                                                 |
|---------------------|----------------------|-----------------------------------------------------------------------------|
| Framework           | Next.js 15           | React 18 with App Router, Streaming SSR, and Route Groups                   |
| State Management    | React Context       | Lightweight state sharing for global values                                 |
| Styling             | Tailwind CSS v3     | Utility-first CSS with built-in dark mode support                           |

### Real-Time Features
| Component           | Technology           | Description                                                                 |
|---------------------|----------------------|-----------------------------------------------------------------------------|
| WebSocket           | @microsoft/signalr  | Handles real-time location broadcasting and updates                         |
| GPS Handling        | Custom `useLivePosition` | React hook wrapping `navigator.geolocation` with auto-refresh             |

### UI & Data
| Component           | Technology           | Description                                                                 |
|---------------------|----------------------|-----------------------------------------------------------------------------|
| Mapping             | react-leaflet + OpenStreetMap | Interactive maps with free tile servers                                  |
| Virtual Lists       | react-window         | Efficient rendering for infinite user lists                                 |
| Animation           | Framer Motion        | Smooth component transitions and interactions                               |
| Icons               | lucide-react         | Lightweight, tree-shakable SVG icons                                        |

### Data Management
| Component           | Technology           | Description                                                                 |
|---------------------|----------------------|-----------------------------------------------------------------------------|
| API Client          | Axios                | Promise-based HTTP requests with interceptors                               |
| Data Fetching       | TanStack Query v5    | Server-state management with infinite query support                         |

### Utilities
| Component           | Technology           | Description                                                                 |
|---------------------|----------------------|-----------------------------------------------------------------------------|
| Error Handling      | Next.js error.tsx    | Route-level error boundaries                                                |
| Loading States      | react-spinners       | Customizable loading indicators                                             |
                         
