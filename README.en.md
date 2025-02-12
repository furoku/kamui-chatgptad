# Kamui ChatGPT Ad Maker

A web application that converts images into dot art style

## Overview

This project is a web application that converts uploaded images into black and white dot art. It recreates the dot art style similar to the one used in OpenAI's Super Bowl commercial, utilizing the Canvas API.

## Key Features

- **Image Upload**
  - Upload images via drag & drop or file selection
  - Supported formats: PNG, JPG, GIF
- **Dot Size Adjustment**
  - Fine-tune dot sizes using a custom slider
  - Adjustable range from 1 to 20
- **Dot Effect Application**
  - Convert images to black and white dot art
  - Dot sizes vary based on image brightness
- **Real-time Preview**
  - Side-by-side display of original and processed images
  - Instant visualization of the effect

## Technology Stack

- React (Function Components + Hooks)
- TypeScript
- Tailwind CSS (UI Styling)
- Canvas API (Image Processing)

## Core Components

- `ChatGPTAdMaker.tsx`: Main Component
  - Handles image upload functionality
  - Manages dot size state
  - Controls overall UI layout
- `DotSlider.tsx`: Dot Size Slider
  - Custom range slider implementation
  - Size range from 1 to 20
- `dotEffect.ts`: Dot Processing Logic
  - Canvas API image processing
  - Grayscale conversion
  - Dot pattern generation

## Development Setup

1. Clone the repository
```bash
git clone https://github.com/furoku/kamui-chatgptad.git
cd kamui-chatgptad
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm start
```

## License

This project is released under the MIT License.

## Credits

This project is inspired by the dot art style used in OpenAI's Super Bowl LVIII (2024) commercial.

Reference Videos:
- [OpenAI Super Bowl LVIII Commercial](https://www.youtube.com/watch?v=Y8GtKnz6Zs8)
- [OpenAI Super Bowl Commercial - Behind the Scenes](https://www.youtube.com/watch?v=kIhb5pEo_j0) 