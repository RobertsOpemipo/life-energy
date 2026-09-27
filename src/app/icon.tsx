import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
          position: 'relative',
        }}
      >
        {/* Square */}
        <div
          style={{
            position: 'absolute',
            top: 2,
            right: 2,
            width: 20,
            height: 20,
            background: 'linear-gradient(180deg, #d9241b 0%, #f59e0b 100%)',
            borderRadius: 1,
          }}
        />
        {/* Oval */}
        <div
          style={{
            position: 'absolute',
            bottom: 2,
            left: 2,
            width: 22,
            height: 18,
            background: 'linear-gradient(135deg, #15a065 0%, #125c77 100%)',
            borderRadius: '50%',
          }}
        />
      </div>
    ),
    { ...size }
  );
}