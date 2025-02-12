import { createDotPattern } from '../utils/dotEffect';

describe('dotEffect', () => {
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;

  beforeEach(() => {
    canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100;
    ctx = canvas.getContext('2d')!;
  });

  it('creates dot pattern with specified size', () => {
    const dotSize = 10;
    const brightness = 0.5;

    createDotPattern(ctx, 50, 50, dotSize, brightness);

    // Get the pixel data from where we drew the dot
    const imageData = ctx.getImageData(45, 45, 10, 10);
    const hasNonTransparentPixels = Array.from(imageData.data).some(
      (value, index) => index % 4 === 3 && value !== 0
    );

    expect(hasNonTransparentPixels).toBe(true);
  });

  it('adjusts dot size based on brightness', () => {
    const dotSize = 10;
    const brightnessDark = 0.2;
    const brightnessLight = 0.8;

    // Draw two dots with different brightness
    createDotPattern(ctx, 25, 25, dotSize, brightnessDark);
    createDotPattern(ctx, 75, 75, dotSize, brightnessLight);

    // Compare the pixel data of both dots
    const darkDot = ctx.getImageData(20, 20, 10, 10);
    const lightDot = ctx.getImageData(70, 70, 10, 10);

    const darkPixels = Array.from(darkDot.data).filter(
      (value, index) => index % 4 === 3 && value !== 0
    ).length;
    const lightPixels = Array.from(lightDot.data).filter(
      (value, index) => index % 4 === 3 && value !== 0
    ).length;

    expect(darkPixels).toBeLessThan(lightPixels);
  });
}); 