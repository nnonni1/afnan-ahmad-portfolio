import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={
 title:'أفنان أحمد الدحيم — Technology Builder & Innovation Specialist',
 description:'مهندسة ابتكار ومنتجات تقنية؛ أبني نماذج ومنتجات في الذكاء الاصطناعي والأتمتة والروبوتات وإنترنت الأشياء، وأقود الفرق من الفكرة إلى الأثر.',
 metadataBase:new URL('https://afnan-alduhaim.sites.openai.com'),
 openGraph:{title:'أفنان أحمد الدحيم — Technology Builder',description:'من الفكرة إلى نموذج ومنتج تقني قابل للتجربة.',images:['/og.png'],locale:'ar_SA',type:'website'},
 twitter:{card:'summary_large_image',title:'أفنان أحمد الدحيم — Technology Builder',description:'من الفكرة إلى نموذج ومنتج تقني قابل للتجربة.',images:['/og.png']}
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ar" dir="rtl"><body>{children}</body></html>}
