import React, { useEffect, useRef, useState } from 'react';

export function WidthProvider(Component) {
    function WidthProviderComponent(props) {
        const containerRef = useRef(null);
        const [width, setWidth] = useState(1280);

        useEffect(() => {
            const element = containerRef.current;
            if (!element) {
                return undefined;
            }

            const updateWidth = () => {
                setWidth(element.offsetWidth);
            };

            updateWidth();

            if (typeof ResizeObserver !== 'undefined') {
                const observer = new ResizeObserver(updateWidth);
                observer.observe(element);
                return () => observer.disconnect();
            }

            window.addEventListener('resize', updateWidth);
            return () => window.removeEventListener('resize', updateWidth);
        }, []);

        return (
            <div ref={containerRef} style={{ width: '100%' }}>
                <Component {...props} width={width} />
            </div>
        );
    }

    WidthProviderComponent.displayName = `WidthProvider(${Component.displayName || Component.name || 'Component'})`;

    return WidthProviderComponent;
}
