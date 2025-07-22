# FlowTech - SaaS Company React App

A modern, polished React application for a SaaS company featuring multiple pages, reusable components, data tables, customer reviews, and a complex responsive layout.

## Features

### 📱 **5 Main Pages**
- **Home** - Hero section with features overview and testimonials
- **Features** - Detailed feature showcase with integrations
- **Pricing** - Interactive pricing plans with comparison table
- **Dashboard** - Customer management with sortable/filterable data table
- **Contact** - Contact form with office locations and FAQs

### 🧩 **Reusable Components**
- **Button** - Configurable button component with variants and sizes
- **Card** - Flexible card container with header, content, and footer
- **Badge** - Status and category badges with color variants
- **Avatar** - User profile images with fallback support
- **Rating** - Star rating component
- **TestimonialCard** - Customer review cards
- **FeatureIcon** - Icon-based feature displays
- **Section** - Page section wrapper with consistent styling

### 📊 **Data Table Features**
- Sortable columns (name, revenue, last active)
- Search functionality across customer data
- Status filtering (active, trial, inactive)
- Pagination controls
- Responsive design
- Customer management actions

### ⭐ **Customer Reviews**
- Star ratings display
- Customer testimonials with photos
- Company and role information
- Responsive grid layout

### 🎨 **Complex Layout**
- Modern gradient backgrounds
- Card-based design system
- Responsive navigation with mobile menu
- Sticky header
- Multi-column layouts
- Interactive hover effects
- Animated elements

## Technology Stack

- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Animation library
- **Custom Components** - Reusable UI component library

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.js
│   │   ├── Card.js
│   │   ├── Badge.js
│   │   ├── Avatar.js
│   │   └── Rating.js
│   ├── Navbar.js          # Navigation component
│   ├── Footer.js          # Footer component
│   ├── TestimonialCard.js # Testimonial display
│   ├── FeatureIcon.js     # Feature icon component
│   └── Section.js         # Page section wrapper
├── pages/
│   ├── Home.js            # Landing page
│   ├── Features.js        # Features showcase
│   ├── Pricing.js         # Pricing plans
│   ├── Dashboard.js       # Customer dashboard
│   └── Contact.js         # Contact page
├── App.js                 # Main app component
├── index.js              # React entry point
└── index.css             # Global styles + Tailwind
```

## Component Usage Examples

### Button Component
```jsx
<Button variant="primary" size="lg" icon={<ArrowRight />}>
  Get Started
</Button>
```

### Card Component
```jsx
<Card hover padding="p-8">
  <Card.Header>
    <h3>Title</h3>
  </Card.Header>
  <Card.Content>
    <p>Content here</p>
  </Card.Content>
</Card>
```

### TestimonialCard Component
```jsx
<TestimonialCard 
  testimonial={{
    name: "John Doe",
    role: "CEO",
    company: "TechCorp",
    content: "Great product!",
    rating: 5,
    image: "avatar-url"
  }}
/>
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Features Breakdown

### 🏠 Home Page
- Hero section with call-to-action buttons
- Feature highlights with icons
- Customer testimonials
- Statistics showcase
- Responsive image layouts

### ⚡ Features Page
- Detailed feature descriptions
- Benefits comparison
- Integration showcases
- Interactive demo sections

### 💰 Pricing Page
- Three-tier pricing structure
- Monthly/Annual toggle
- Feature comparison table
- Customer testimonials
- FAQ section

### 📊 Dashboard Page
- Customer data table with 6 sample customers
- Search, sort, and filter functionality
- Statistics cards
- Action buttons and dropdowns
- Responsive table design

### 📞 Contact Page
- Contact form with validation
- Multiple contact methods
- Office locations
- Business hours
- FAQ section

## Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Tablet and desktop optimizations
- Collapsible navigation menu
- Flexible grid layouts
- Touch-friendly interactions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
