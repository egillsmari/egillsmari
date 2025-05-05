"use client"
import React, { useState } from 'react';

type Sector = {
  id: string;
  title: string;
  description: string;
  path: string; // SVG path data
};

// Example sectors - update these with your actual sectors from the SVG
const sectors: Sector[] = [
  {
    id: 'sector1',
    title: 'Lóð 1',
    description: 'Texti um lóð 1',
    path: 'M10,10 L50,10 L50,50 L10,50 Z', // Replace with actual path
  },
  {
    id: 'sector2',
    title: 'Lóð 2',
    description: 'Texti um lóð 2',
    path: 'M60,10 L100,10 L100,50 L60,50 Z', // Replace with actual path
  },
  {
    id: 'sector3',
    title: 'Lóð 3',
    description: 'Texti um lóð 3',
    path: 'M60,10 L100,10 L100,50 L60,50 Z', // Replace with actual path
  },
  // Add more sectors as needed
];

export const Map = () => { 
  const [activeSector, setActiveSector] = useState<Sector | null>(null);
  const [highlightedSector, setHighlightedSector] = useState<Sector | null>(null);
  const [overlayPosition, setOverlayPosition] = useState({ x: 0, y: 0 });

  const handleSectorClick = (sector: Sector, e: React.MouseEvent) => {
    setActiveSector(sector);
    // We no longer set highlightedSector here, as it's handled by hover
    setOverlayPosition({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });
  };

  // New handlers for hover functionality
  const handleSectorMouseEnter = (sector: Sector) => {
    setHighlightedSector(sector);
  };

  const handleSectorMouseLeave = () => {
    setHighlightedSector(null);
  };

  const handleSectorDetails = (sectorId: string) => {
    // router.push(`/sectors/${sectorId}`);
  };

  const handleCloseOverlay = () => {
    setActiveSector(null);
    // Keep the sector highlighted after closing the overlay
  };

  return (
    <div className="relative">
      {/* SVG Map with overlay for highlighting */}
      <div className="relative ml-40">
        <div className="relative">
          <img 
            src="/vector_lodir.svg" 
            alt="Map of sectors"
            className="w-full h-auto max-w-none" 
            style={{ transform: 'scale(2.55)' }}
          />
          
          {/* Use a div with image map instead of SVG overlays */}
          <img 
            src="/vector_lodir.svg" 
            alt="Clickable map overlay"
            className="absolute inset-0 w-full h-auto max-w-none opacity-0"
            style={{ transform: 'scale(2.55)' }}
            useMap="#sector-map"
          />
          
          <map name="sector-map">
            {sectors.map((sector) => (
              <area
                key={sector.id}
                shape="poly"
                coords={sector.path} // You'll need to convert SVG paths to image map coordinates
                alt={sector.title}
                title={sector.title}
                onClick={(e) => handleSectorClick(sector, e)}
                onMouseEnter={() => handleSectorMouseEnter(sector)}
                onMouseLeave={handleSectorMouseLeave}
                className="cursor-pointer"
              />
            ))}
          </map>

          {/* Highlighting overlay - only show this when a sector is highlighted */}
          {highlightedSector && (
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `url('/vector_lodir.svg')`,
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                maskImage: `url('/sectors/${highlightedSector.id}_highlight.svg')`,
                WebkitMaskImage: `url('/sectors/${highlightedSector.id}_highlight.svg')`,
                maskSize: '100% 100%',
                WebkitMaskSize: '100% 100%',
                backgroundColor: 'rgba(59, 130, 246, 0.5)',
                transform: 'scale(2.85)'
              }}
            />
          )}
        </div>
      </div>

      {activeSector && (
        <div className="fixed inset-0 backdrop-blur-md bg-white/30 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-auto p-6 relative">
            <button 
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
              onClick={handleCloseOverlay}
              aria-label="Close"
            >
              ✕
            </button>
            <h3 className="font-bold text-xl mb-3 text-black">{activeSector.title}</h3>
            <p className="text-gray-600 my-4">{activeSector.description}</p>
            <div className="flex justify-end mt-6">
              <button 
                className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition-colors"
                onClick={() => handleSectorDetails(activeSector.id)}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}