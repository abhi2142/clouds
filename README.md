# HR Cloud Hub

This is a Next.js web application for HR Cloud Hub, a platform designed to help HRs and employees manage their work efficiently.

## Project Overview

HR Cloud Hub is a web-based Human Resource Management System (HRMS). It aims to streamline HR tasks such as employee onboarding, leave/attendance tracking, performance reviews, and payroll management.

The application features four main pages:
- **Home:** Introduction to HR Cloud Hub, key features, and testimonials.
- **Services:** Detailed list of services offered by the platform.
- **About:** Information about the company's mission, vision, and team.
- **Contact:** A contact form and company contact details.

## Tech Stack

- **Framework:** Next.js (React)
- **Styling:** Tailwind CSS with ShadCN UI components
- **Icons:** Lucide React
- **Form Handling:** React Hook Form with Zod for validation

## Getting Started

### Prerequisites

- Node.js (Version 18 or later recommended)
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd hr-cloud-hub
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:9002](http://localhost:9002) (or your configured port) with your browser to see the result.

## Folder Structure

```
/
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js App Router pages and layouts
│   │   ├── (pages)/    # Route groups for pages
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── services/
│   │   │   └── page.tsx    # Home page
│   │   ├── globals.css # Global styles
│   │   └── layout.tsx  # Root layout
│   ├── components/
│   │   ├── ui/         # ShadCN UI components
│   │   └── layout/     # Layout components (Navbar, Footer)
│   ├── hooks/          # Custom React hooks (e.g., use-toast)
│   ├── lib/            # Utility functions (e.g., cn)
│   └── assets/         # (Optional) Icons, images if not in public/
├── .env                # Environment variables
├── components.json     # ShadCN UI configuration
├── next.config.ts      # Next.js configuration
├── package.json        # Project dependencies and scripts
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Design Choices

- **UI Framework:** ShadCN UI provides a set of accessible and customizable components built on Radix UI and styled with Tailwind CSS.
- **Styling:** Tailwind CSS is used for utility-first styling, allowing for rapid UI development and easy customization. Colors are defined using CSS variables based on the requested theme.
- **Responsiveness:** Layouts are designed using Tailwind's responsive modifiers (sm:, md:, lg:) to ensure adaptability across various screen sizes.
- **Navigation:** A consistent Navbar and Footer are implemented using custom layout components. Mobile navigation uses a Sheet component from ShadCN.
- **Contact Form:** Built using React Hook Form for state management and Zod for schema validation, providing a robust and user-friendly form experience. Toast notifications provide feedback on submission.
- **Icons:** Lucide React is used for a clean and consistent icon set.
