import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import profilImage from "../images/profil.jpg"
import "../styles/profile.css"

const IndexPage = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const socialLinks = [
    {
      id: 'private',
      icon: '🔒',
      text: 'My private content',
      url: 'https://onlyfans.com/briannabums/c458',
      className: 'private',
      ariaLabel: 'Access private content'
    },
    {
      id: 'instagram',
      icon: '📷',
      text: 'My Instagram account',
      url: 'https://www.instagram.com/briannabums/',
      className: 'instagram',
      ariaLabel: 'Visit Instagram profile'
    },
    {
      id: 'bluesky',
      icon: '☁️',
      text: 'My BlueSky account',
      url: 'https://bsky.app/profile/briannabums.bsky.social',
      className: 'bluesky',
      ariaLabel: 'Visit BlueSky profile'
    },{/*
    {
      id: 'youtube',
      icon: '📺',
      text: 'My YouTube Channel',
      url: '#', // Replace with actual YouTube URL
      className: 'youtube',
      ariaLabel: 'Visit YouTube channel'
    }   */}
  ]

  const profileData = {
    username: '@briannabums',
    displayName: 'Brianna Bums',
    location: 'Chicago',
    bio: 'Dive into My World !',
    verified: true
  }

  return (
    <Layout>
      <div className="profile-container">
        <div className={`profile-card ${isLoaded ? 'loaded' : ''}`}>
          {/* Header */}
          <div className="profile-header">
            <a
              href="https://bestgirlscontent.netlify.app/"
              className="header-link"
              aria-label="Visit My Friends website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>My Friends</h2>
            </a>
          </div>

          {/* Avatar */}
          <div className="profile-avatar">
            <img
              src={profilImage}
              alt={`${profileData.displayName}'s profile`}
              loading="eager"
              onError={(e) => {
                e.target.style.display = 'none'
                console.warn('Profile image failed to load')
              }}
            />
            <div className="avatar-ring"></div>
          </div>

          {/* Profile Info */}
          <div className="profile-info">
            <h3 className="username">
              {profileData.username}
              {profileData.verified && (
                <span className="verified-badge" title="Verified account">
                  ✓
                </span>
              )}
            </h3>

            <p className="location">📍 {profileData.location}</p>

            <h2 className="display-name">{profileData.displayName}</h2>

            <div className="social-icons" role="presentation">
              <span title="Photography">📷</span>
              <span title="Social Media">🐦</span>
              <span title="Video Content">📺</span>
            </div>

            <p className="bio">{profileData.bio}</p>
          </div>

          {/* Link Buttons */}
          <div className="link-buttons">
            {socialLinks.map((link, index) => (
              <a
                key={link.id}
                href={link.url}
                className={`link-button ${link.className}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <span className="link-icon">{link.icon}</span>
                <span className="link-text">{link.text}</span>
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="profile-footer">
            <p className="footer-text">
              Built with 💜 using Gatsby
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Brianna Bums - My Links"
    description="Connect with Brianna Bums - Find all my social media links and content in one place"
    keywords="brianna bums, social media, links, chicago, content creator"
    image={profilImage}
  />
)

export default IndexPage