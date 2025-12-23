"use client";
import { useState, useEffect } from 'react';
import MetallicPaint, { parseLogoImage } from './MetallicPaint';

interface MetallicTextProps {
  text: string;
  className?: string;
  params?: any;
  height?: number; // Target height of the text in pixels (for resolution)
}

export function MetallicText({ 
  text, 
  className, 
  params,
  height = 300
}: MetallicTextProps) {
  const [imageData, setImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    async function generateText() {
       const canvas = document.createElement('canvas');
       const ctx = canvas.getContext('2d');
       if (!ctx) return;

       // Use Space Grotesk as it's the main font
       const font = "900 " + height + "px 'Space Grotesk', sans-serif";
       ctx.font = font;
       
       const metrics = ctx.measureText(text);
       const width = Math.ceil(metrics.width * 1.2); // Add padding
       const canvasHeight = Math.ceil(height * 1.4); // Add padding

       canvas.width = width;
       canvas.height = canvasHeight;
       
       const ctx2 = canvas.getContext('2d')!;
       ctx2.font = font;
       ctx2.fillStyle = 'black';
       ctx2.textAlign = 'center';
       ctx2.textBaseline = 'middle';
       
       // Add stroke to thicken the text further
       ctx2.lineWidth = height * 0.04;
       ctx2.strokeStyle = 'black';
       ctx2.strokeText(text, width / 2, canvasHeight / 2);
       ctx2.fillText(text, width / 2, canvasHeight / 2);

       canvas.toBlob(async (blob) => {
         if (!blob) return;
         const file = new File([blob], "text.png", { type: 'image/png' });
         const parsed = await parseLogoImage(file);
         setImageData(parsed.imageData);
       }, 'image/png');
    }
    
    document.fonts.ready.then(generateText);
    
  }, [text, height]);

  if (!imageData) return <span className={className} style={{ opacity: 0 }}>{text}</span>;

  const aspectRatio = imageData.width / imageData.height;

  return (
    <div className={className} style={{ 
        display: 'inline-block', 
        height: '1.1em', 
        width: `${aspectRatio * 1.1}em`,
        verticalAlign: 'middle',
        position: 'relative'
    }}>
       <MetallicPaint imageData={imageData} params={params} />
    </div>
  );
}
