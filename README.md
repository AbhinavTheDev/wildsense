# WildSense: AI-Powered Wildlife Conservation Platform

<p align="center">
  <img src="public/logo.svg" alt="WildSense Logo" width="120" />
</p>

WildSense is a web application that leverages artificial intelligence to advance wildlife conservation efforts. The platform offers tools to predict animal lifespans and assess conservation status, empowering researchers and conservationists with data-driven insights.

## 🔗 Live Demo

Visit [WildSense](https://wildsense.vercel.app) to see the application in action.

## ✨ Features

### 🦁 Lifespan Predictor
Estimates the expected lifespan of wildlife species based on biological and environmental factors, helping researchers understand longevity patterns across different species.

### 🌿 Conservation Status Predictor
Evaluates the conservation status of wildlife species based on multiple risk factors, helping prioritize protection efforts for the most vulnerable populations.

## 🛠️ Technology Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **UI Components**: Radix UI, ShadcnUI
- **Styling**: TailwindCSS with custom nature-inspired theme
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form, Zod
- **Routing**: React Router
- **API Integration**: Fetch API
- **Backend**: Flask, Flask CORS, gunicorn
- **Data Processing** - Numpy, Pandas
- **Model Integration** - Scikit Learn, joblib
## 🧩 Project Structure
```
wildsense/ 
├── public/ # Static assets 
├── src/ 
│ ├── components/ # Reusable UI components 
│ │ ├── ui/ # Base UI components 
│ │ └── ... # Feature-specific components 
│ ├── hooks/ # Custom React hooks 
│ ├── lib/ # Utility functions 
│ ├── pages/ # Application pages 
│ ├── service/ # API service layer 
│ ├── App.tsx # Main application component 
│ └── main.tsx # Application entry point 
├── index.html # HTML entry point 
└── package.json # Project dependencies
```
## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abhinavthedev/wildsense.git
   cd wildsense

2. Install dependencies:
   ```bash
   npm install 
   # or
   yarn
   ```

3. Create a .env file in the root directory with the following variables:
   ```bash
   VITE_BACKEND_URL=your_backend_api_url
   VITE_API_KEY=your_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open http://localhost:5173 in your browser to see the application.

### 📦 Building for Production
   ```bash
   npm run build
   # or 
   yarn build
   ```
##### The build artifacts will be stored in the dist/ directory.

### 🧪 Linting
   ```bash
   npm run lint
   # or 
   yarn lint
   ```

## 👥 Team
- [Abhinav](https://github.com/abhinavthedev)
- [Keshav Gaur](https://github.com/keshavvgaur)
- [Naman Goyal](https://github.com/Naman16161)

## 📝 License
This project is licensed under the MIT License.

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 💖 Acknowledgements
- [World Wildlife Fund](https://www.worldwildlife.org/)
- [IUCN Red List](https://www.iucnredlist.org/)
- [Conservation International](https://www.conservation.org/home)
All the developers and conservationists working to protect our planet's biodiversity
---
<p align="center">Made with ❤️ for wildlife conservation</p>