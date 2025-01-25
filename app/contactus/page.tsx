import HeroSection from '@/components/global/heroSection'
import ContactUs from '@/components/static/contact_us'

 const Contactus = () => {
  return (
    <div className=''>
        <HeroSection
        title="Welcome to Abnos contact us"
        description="Your vision, our innovation"
        videoUrl="/assets/video/video.mp4"
      />
        <ContactUs />
        <iframe 
          src="https://www.google.com/maps?ll=35.891855,50.842928&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=13995456689188650281"
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>    
        </div>
  )
}
export default Contactus