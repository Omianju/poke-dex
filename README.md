# Pokemon Explorer

A modern React application that allows users to explore and search through the first 150 Pokemon using the PokeAPI. Built with React, TypeScript, and Tailwind CSS.

[![Pokemon Explorer Screenshot](https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)](https://poke-dex-five-phi.vercel.app/)


## Features

- 📱 Fully responsive design that works on all devices
- 🔍 Real-time search functionality
- 🏷️ Filter Pokemon by type
- 🎨 Beautiful card-based layout with type-specific colors
- ⚡ Fast and efficient with React context for state management
- 🔄 Loading states and error handling
- 🖼️ High-quality Pokemon artwork

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## Getting Started

### Prerequisites

- Node.js 16.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Omianju/pokemon-explorer.git
   cd pokemon-explorer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
src/
├── components/         # React components
├── context/           # React context for state management
├── icons/             # Custom SVG icons
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Reference

This project uses the [PokeAPI](https://pokeapi.co/) to fetch Pokemon data. The following endpoints are used:

- `https://pokeapi.co/api/v2/pokemon?limit=150` - Fetch first 150 Pokemon
- `https://pokeapi.co/api/v2/pokemon/{id}` - Fetch detailed Pokemon information



## Acknowledgments

- [PokeAPI](https://pokeapi.co/) for providing the Pokemon data
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide React](https://lucide.dev/) for the beautiful icons