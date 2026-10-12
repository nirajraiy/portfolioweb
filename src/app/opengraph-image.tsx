import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'Niraj Rai — React Native Developer building iOS & Android apps';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const icons = ['qwaiting-staff', 'spark-resto', 'smart-review', 'addpeople', 'adlyfe', 'zayada'];

async function dataUri(file: string, mime: string) {
  const buf = await readFile(join(process.cwd(), 'public', file));
  return `data:${mime};base64,${buf.toString('base64')}`;
}

export default async function OpengraphImage() {
  const photo = await dataUri('nirajImage.png', 'image/png');
  const appIcons = await Promise.all(icons.map((s) => dataUri(`apps/${s}/icon.jpg`, 'image/jpeg')));

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: 'linear-gradient(135deg, #07080b 0%, #15100a 60%, #2a1503 100%)',
          color: '#fff',
          fontFamily: 'sans-serif',
          padding: 64,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              color: '#9ff5c4',
              border: '1px solid rgba(61,220,132,0.4)',
              borderRadius: 999,
              padding: '8px 18px',
              alignSelf: 'flex-start',
              marginBottom: 28,
            }}
          >
            Open to React Native roles
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -2, lineHeight: 1 }}>Niraj Rai</div>
          <div style={{ display: 'flex', fontSize: 40, fontWeight: 700, color: '#ff9a1f', marginTop: 14 }}>
            React Native Developer
          </div>
          <div style={{ display: 'flex', fontSize: 26, color: '#c4c6cc', marginTop: 18, maxWidth: 640 }}>
            iOS & Android apps · 12 shipped · 20K+ users · 99.7% crash-free
          </div>
          <div style={{ display: 'flex', gap: 16, marginTop: 40 }}>
            {appIcons.map((src, i) => (
              <img key={i} src={src} width={72} height={72} style={{ borderRadius: 18 }} alt="" />
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={photo}
            width={340}
            height={500}
            alt=""
            style={{ objectFit: 'cover', borderRadius: 32, border: '4px solid #ff8a00' }}
          />
        </div>
      </div>
    ),
    size
  );
}
