import { useState } from 'react';
import { Image } from 'expo-image';

type NetImageProps = {
  uri: string;
  altKey?: string;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
};

export function NetImage({ uri, altKey = 'fallback', width = '100%', height = 200, borderRadius = 0 }: NetImageProps) {
  const [sourceUri, setSourceUri] = useState(uri);
  const fallback = `https://picsum.photos/seed/${encodeURIComponent(altKey)}/1200/800`;

  return (
    <Image
      source={{ uri: sourceUri }}
      style={{ width, height, borderRadius }}
      contentFit="cover"
      transition={200}
      onError={() => setSourceUri(fallback)}
    />
  );
}