import React, { useState } from 'react';

const HoverPlayVideo: React.FC<{ videoId: string, thumbnailUrl: string }> = ({ videoId, thumbnailUrl }) => {
    const [isHovered, setIsHovered] = useState(false);
    // L'URL de l'iframe avec autoplay activé
    const videoUrl = `https://www.youtube.com/embed/${videoId}?mute=1&playlist=${videoId}`;
    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ maxWidth: '100%', maxHeight: '100%', overflow: 'hidden', width: '100%', height: '100%' }}
        >
            {isHovered ? (
                <iframe
                    width="100%"
                    height="100%"
                    src={videoUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube video player"
                    style={{ objectFit: 'cover' }}
                ></iframe>
            ) : (
                <img src={thumbnailUrl} alt="Video Thumbnail" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} loading='lazy' />
            )}
        </div>
    );
};

export default HoverPlayVideo;