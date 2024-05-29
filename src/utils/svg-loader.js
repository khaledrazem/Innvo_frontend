import React, { useState, useEffect } from 'react';

function SvgLoader({ svg }) { // svg is now received as a prop
  const [svgUrl, setSvgUrl] = useState(null);

  useEffect(() => {
    const importSvg = async () => {
      try {
        const svgModule = await import(`src/public/svg/${svg}.svg`);
        setSvgUrl(svgModule.default);
      } catch (error) {
        console.error('Error importing SVG:', error);
      }
    };

    importSvg();
  }, [svg]); // Add `svg` as a dependency to re-import when `svg` changes

  return (
    <div>
      {svgUrl && <img src={svgUrl} alt={svg} />} {/* Render the image */}
    </div>
  );
}

export default SvgLoader;
