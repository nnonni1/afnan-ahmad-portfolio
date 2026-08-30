import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={
 title:'أفنان الدحيم — قائدة برامج الابتكار الاجتماعي',
 description:'قائدة برامج ابتكار اجتماعي وتصميم تجارب تمكين؛ أحوّل الاحتياج المجتمعي إلى برنامج ونموذج أولي ونتيجة قابلة للقياس.',
 metadataBase:new URL('https://afnan-alduhaim.sites.openai.com'),
 openGraph:{title:'أفنان الدحيم — قائدة برامج الابتكار الاجتماعي',description:'من الاحتياج المجتمعي إلى برنامج ونموذج ونتيجة قابلة للقياس.',images:['/og.png'],locale:'ar_SA',type:'website'},
 twitter:{card:'summary_large_image',title:'أفنان الدحيم — قائدة برامج الابتكار الاجتماعي',description:'من الاحتياج المجتمعي إلى برنامج ونموذج ونتيجة قابلة للقياس.',images:['/og.png']}
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ar" dir="rtl"><body>{children}</body></html>}
