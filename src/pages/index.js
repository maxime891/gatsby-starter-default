import React, { useState, useEffect, useRef } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import profilImage from "../images/background.jpg"
import backgroundImage from "../images/background.jpg"
import "../styles/profile.css"

const videoFile = "/videos/intro-video.mp4"

const IndexPage = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [videoError, setVideoError] = useState(false)
  const [retryCount, setRetryCount] = useState(0)
  const videoRef = useRef(null)
  const retryTimeoutRef = useRef(null)

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => {
      clearTimeout(timer)
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current)
      }
    }
  }, [])

  const handleVideoReady = () => {
    if (!isVideoLoaded) {
      setIsVideoLoaded(true)
      setVideoError(false)

      // Ensure video plays
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.log("Autoplay prevented:", error)
          // Try to play again after user interaction
          const playOnInteraction = () => {
            if (videoRef.current) {
              videoRef.current.play()
            }
            document.removeEventListener('click', playOnInteraction)
            document.removeEventListener('touchstart', playOnInteraction)
          }
          document.addEventListener('click', playOnInteraction)
          document.addEventListener('touchstart', playOnInteraction)
        })
      }
    }
  }

  const handleVideoCanPlay = () => {
    if (videoRef.current && videoRef.current.readyState >= 3) {
      handleVideoReady()
    }
  }

  const handleVideoError = (e) => {
    console.log("Video error:", e)
    setVideoError(true)

    if (retryCount < 3) {
      retryTimeoutRef.current = setTimeout(() => {
        if (videoRef.current) {
          console.log(`Retrying video load (attempt ${retryCount + 1})`)
          videoRef.current.load()
          setRetryCount(prev => prev + 1)
        }
      }, 1000 * (retryCount + 1))
    }
  }

  const handleVideoLoadStart = () => {
    console.log("Video load started")
    setVideoError(false)
  }

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted
      videoRef.current.muted = newMutedState
      setIsMuted(newMutedState)
    }
  }

  // Configuration - Just change these values
  const config = {
    brandName: "BriannaBums",
    mainTitle: "Exclusive Premium Content",
    buttonText: "CLAIM SUBSCRIPTION",
    buttonUrl: "https://onlyfans.com/briannabums/c458",
    videoTitle: "Hey It's Brianna Bums",
    profileName: "Brianna Bums",
    backgroundImage: backgroundImage,
    videoFile: videoFile,
    // Social media links
    socialLinks: {
      instagram: "https://www.instagram.com/briannabums19/",
      x: "https://x.com/BumsBriann18"
    }
  }

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Brianna Bums - Premium Subscription Content",
    "description": "Access exclusive premium content from Brianna Bums. Subscribe now for unlimited access to premium videos and exclusive content.",
    "url": "https://briannabums.com",
    "mainEntity": {
      "@type": "Person",
      "name": "Brianna Bums",
      "description": "Content creator offering premium subscription content",
      "image": profilImage
    },
    "offers": {
      "@type": "Offer",
      "description": "Premium subscription access to exclusive content",
      "url": config.buttonUrl
    }
  }

  return (
    <Layout>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="landing-container">
        {/* Social Media Buttons */}
        <div className="social-media-buttons">
          <a
            href={config.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="social-button instagram"
            aria-label="Follow Brianna Bums on Instagram"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href={config.socialLinks.x}
            target="_blank"
            rel="noopener noreferrer"
            className="social-button x"
            aria-label="Follow Brianna Bums on X"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>

        {/* SEO optimized main content wrapper */}
        <main role="main" itemScope itemType="https://schema.org/WebPage">

          {/* Background Image */}
          <div
            className="background-image"
            style={{ backgroundImage: `url(${config.backgroundImage})` }}
            role="img"
            aria-label="Brianna Bums background image"
          ></div>

          {/* Dark Overlay */}
          <div className="background-overlay"></div>

          {/* Main Content */}
          <div className={`landing-content ${isLoaded ? 'loaded' : ''}`}>
            {/* Brand Logo - H1 for SEO */}
            <header className="brand-logo">
              <h1 itemProp="name">{config.brandName}</h1>
            </header>

            {/* Left Side - Text Content */}
            <section className="text-content" itemScope itemType="https://schema.org/Offer">
              <h2 className="main-title" itemProp="description">{config.mainTitle}</h2>

              <button
                className="cta-button"
                onClick={() => window.open(config.buttonUrl, '_blank')}
                aria-label={`${config.buttonText} - Access Brianna Bums premium subscription content`}
                itemProp="url"
              >
                {config.buttonText}
              </button>
            </section>

            {/* Right Side - Video Player */}
            <section className="video-section" aria-label="Brianna Bums introduction video">
              <div className="video-container">
                {!isVideoLoaded && (
                  <div className="video-placeholder" aria-label="Video loading">
                    <div className="loading-spinner" role="status" aria-label="Loading video"></div>
                    {videoError && retryCount > 0 && (
                      <div className="error-message" role="alert">
                        Retrying... ({retryCount}/3)
                      </div>
                    )}
                  </div>
                )}

                <video
                  ref={videoRef}
                  className={`video-player ${isVideoLoaded ? 'loaded' : ''}`}
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  preload="auto"
                  onLoadStart={handleVideoLoadStart}
                  onCanPlay={handleVideoCanPlay}
                  onError={handleVideoError}
                  crossOrigin="anonymous"
                  aria-label="Brianna Bums introduction video"
                  title="Brianna Bums - Premium Content Creator Introduction"
                >
                  <source src={config.videoFile} type="video/mp4" />
                  <source src={config.videoFile} type="video/webm" />
                  <track kind="captions" srcLang="en" label="English captions" />
                  Your browser does not support the video tag.
                </video>

                {/* Sound Toggle Button */}
                <button
                  className={`sound-toggle ${isVideoLoaded ? 'visible' : ''}`}
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute Brianna Bums video' : 'Mute Brianna Bums video'}
                  title={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? '🔇' : '🔊'}
                </button>

                {isVideoLoaded && (
                  <div className="video-overlay">
                    <h3 className="video-title">{config.videoTitle}</h3>
                  </div>
                )}
              </div>
            </section>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Brianna Bums - Premium Subscription Content | Exclusive Videos & Content"
    description="Access exclusive premium content from Brianna Bums. Subscribe now for unlimited access to premium videos, exclusive content, and personalized experiences. Join thousands of satisfied subscribers."
    keywords="Brianna Bums, Brianna Bums subscription, exclusive content creator, premium subscription content, Brianna Bums onlyfans, adult content creator, subscription platform, exclusive videos, premium content, content creator subscription"
    image={profilImage}
    article={false}
    pathname="/"
  />
)

export default IndexPage