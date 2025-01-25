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
          src="https://neshan.org/maps/@35.889673,50.84275,17.5z,0p/places/4520e98c9359d21dc3ae9e50a70734b7"
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