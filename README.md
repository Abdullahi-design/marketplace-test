# FLEX Delivery - Marketplace Dashboard

A modern marketplace dashboard built with Next.js, TypeScript, Tailwind CSS, and Lucide React icons.

## Features

- **Sidebar Navigation**: Dark purple themed sidebar with expandable menu items and notification badges
- **Header**: Search bar, notifications, and user profile section
- **Marketplace Overview**: Key metrics display (Total created, Total active, etc.)
- **Advanced Filters**: Comprehensive filtering options with dropdowns and date pickers
- **Data Table**: Responsive table displaying marketplace listings with status indicators
- **JSON Data**: All marketplace data is loaded from `data/marketplace.json`

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

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

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main marketplace page
│   └── globals.css         # Global styles
├── components/
│   ├── Sidebar.tsx         # Navigation sidebar
│   ├── Header.tsx          # Top header bar
│   ├── MarketplaceOverview.tsx  # Overview metrics
│   ├── MarketplaceFilters.tsx   # Filter controls
│   └── MarketplaceTable.tsx     # Data table
├── data/
│   └── marketplace.json    # Marketplace data
├── types/
│   └── marketplace.ts     # TypeScript types
└── package.json
```

## Customization

### Updating Data

Edit `data/marketplace.json` to modify marketplace listings and overview metrics.

### Styling

The project uses Tailwind CSS. Customize colors in `tailwind.config.ts`:
- `purple-dark`: `#4B2E83`
- `purple-light`: `#6B46C1`

## License

This project is created for assessment purposes.


