// Génère au moment de la compilation une image PNG 1200 × 627 par page, aux couleurs Clair-obscur.
import type { APIRoute, GetStaticPaths } from 'astro';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { apercus, fichierOg, type ApercuOg } from '../../lib/og';

const require = createRequire(import.meta.url);
const police = (chemin: string) => readFileSync(require.resolve(chemin));
const polices = [
  { name: 'Epilogue', data: police('@fontsource/epilogue/files/epilogue-latin-800-normal.woff'), weight: 800 as const, style: 'normal' as const },
  { name: 'Quicksand', data: police('@fontsource/quicksand/files/quicksand-latin-600-normal.woff'), weight: 600 as const, style: 'normal' as const },
];

const ENCRE = '#2F2933';
const ENCRE_PROFONDE = '#221D26';
const OR = '#C7AB5A';
const CLAIR = '#F4F5F7';

export const getStaticPaths: GetStaticPaths = async () =>
  (await apercus()).map((p) => ({ params: { chemin: fichierOg(p.route) }, props: p }));

// Taille du titre selon sa longueur, pour qu'il tienne toujours sur l'image.
const tailleTitre = (t: string) => (t.length <= 30 ? 76 : t.length <= 60 ? 62 : t.length <= 90 ? 52 : 44);

// Structure de l'image, décrite comme un petit arbre HTML (format attendu par satori).
const el = (type: string, style: Record<string, unknown>, children: unknown) => ({ type, props: { style, children } });

export const GET: APIRoute = async ({ props }) => {
  const p = props as ApercuOg;
  const arbre = el('div', {
    width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    backgroundColor: ENCRE, backgroundImage: `linear-gradient(135deg, ${ENCRE} 0%, ${ENCRE_PROFONDE} 100%)`,
    padding: '72px 84px', fontFamily: 'Quicksand', color: CLAIR,
  }, [
    el('div', { display: 'flex', flexDirection: 'column' }, [
      el('div', { width: 96, height: 6, backgroundColor: OR, marginBottom: 36 }, ''),
      el('div', { fontSize: 26, letterSpacing: 3, textTransform: 'uppercase', color: OR, marginBottom: 28 }, p.surtitre),
      el('div', { fontFamily: 'Epilogue', fontWeight: 800, fontSize: tailleTitre(p.titre), lineHeight: 1.12, maxWidth: 1000 }, p.titre),
    ]),
    el('div', { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', fontSize: 26 }, [
      el('div', { color: CLAIR }, p.signature ?? 'Aurélien Mizeret'),
      el('div', { color: OR }, 'aurelienmizeret.com'),
    ]),
  ]);

  const svg = await satori(arbre as any, { width: 1200, height: 627, fonts: polices });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
