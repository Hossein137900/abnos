import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Dynamic imports with lazy loading
const HeroSection = dynamic(() => import('@/components/static/heroSection'), { 
  ssr: true,
  loading: () => <div aria-busy="true">Loading...</div>
})

const WhatWeDo = dynamic(() => import('@/components/static/what-we-do'), { 
  ssr: true 
})

const BannerText = dynamic(() => import('@/components/global/bannerText'), { 
  ssr: true 
})

const OverlayBox = dynamic(() => import('@/components/static/overlayBox'), { 
  ssr: true 
})

const OurWork = dynamic(() => import('@/components/global/our-work'), { 
  ssr: true 
})

const OurStory = dynamic(() => import('@/components/static/ourStory'), { 
  ssr: true 
})

const OurProcess = dynamic(() => import('@/components/global/our-process'), { 
  ssr: true 
})

const BlogPost = dynamic(() => import('@/components/global/blog-post'), { 
  ssr: true 
})

export const metadata = {
  title: 'Abnos - High Performance Website',
  description: 'Optimized website with AMP-like performance',
  viewport: 'width=device-width, initial-scale=1, minimum-scale=1',
  themeColor: '#ffffff'
}

export default function Home() {
  return (
    <main 
      className="grid items-center justify-items-center min-h-screen"
      aria-label="Main Content"
    >
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
  
        <WhatWeDo />
        <BannerText 
          imageSrc="/assets/images/bannerText.jpg" 
          imageAlt="about" 
        />
        <OverlayBox />
        <OurWork />
        <OurStory />
        <OurProcess />
        <BlogPost />
      </Suspense>
    </main>
  )
}