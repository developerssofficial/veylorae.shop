# AI_RULES.md - Development Guidelines

## Tech Stack

- **React 18** with TypeScript for UI development
- **Vite** as the build tool and dev server
- **React Router v6** for client-side routing (routes defined in `src/App.tsx`)
- **Tailwind CSS** for all styling (utility-first approach)
- **shadcn/ui** component library (pre-installed, use as-is)
- **Radix UI** primitives (underlying shadcn/ui components)
- **Lucide React** for all icons
- **Tanstack Query** for server state management and data fetching
- **Zustand** for client-side state management
- **React Hot Toast** for notifications
- **date-fns** for date formatting and manipulation

## Library Usage Rules

### Styling
- **ALWAYS** use Tailwind CSS classes for styling
- **NEVER** write inline styles or CSS modules
- Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`) for responsive design

### Components
- **ALWAYS** use shadcn/ui components when available (Button, Dialog, Card, Input, etc.)
- Import shadcn/ui components from `@/components/ui/`
- Create new components in `src/components/` directory
- Keep components under 100 lines; refactor if larger

### Icons
- **ONLY** use `lucide-react` for icons
- Import icons individually: `import { IconName } from 'lucide-react'`

### State Management
- Use **Zustand** for client-side UI state (modals, selections, etc.)
- Use **Tanstack Query** for any server/API data fetching
- Keep stores in `src/stores/` directory

### Routing
- Keep all routes in `src/App.tsx`
- Use React Router v6 syntax
- Place page components in `src/pages/` directory

### Notifications
- Use `react-hot-toast` for user notifications
- Import toast from `react-hot-toast`

### Data Handling
- Use `date-fns` for all date formatting needs
- Use TypeScript interfaces for data models
- Place shared types in `src/types/` directory

### File Organization
- Pages → `src/pages/`
- Components → `src/components/`
- Hooks → `src/hooks/`
- Utilities → `src/lib/`
- Types → `src/types/`
- Stores → `src/stores/`

## Code Style Rules

- **ALWAYS** use TypeScript (no `.js` files)
- **ALWAYS** use functional components with hooks
- **ALWAYS** use `export default` for page components
- **NEVER** use class components
- **NEVER** use `any` type - use proper TypeScript types