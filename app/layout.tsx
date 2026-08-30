import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={
 title:'أفنان الدحيم — قائدة ابتكار اجتماعي',
 description:'أحوّل الاحتياج المجتمعي إلى أنظمة أثر ونماذج أولية قابلة للاختبار.',
 metadataBase:new URL('https://afnan-alduhaim.sites.openai.com'),
 openGraph:{title:'أفنان الدحيم — قائدة ابتكار اجتماعي',description:'أحوّل التحديات إلى أنظمة أثر.',images:['/og.png'],locale:'ar_SA',type:'website'},
 twitter:{card:'summary_large_image',title:'أفنان الدحيم — قائدة ابتكار اجتماعي',description:'أحوّل التحديات إلى أنظمة أثر.',images:['/og.png']}
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ar" dir="rtl"><body>{children}</body></html>}
