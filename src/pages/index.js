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
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="icon">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
        </svg>
      ),
      text: 'My private content',
      url: 'https://onlyfans.com/briannabums/c458',
      className: 'private',
      ariaLabel: 'Access private content'
    },
    {
      id: 'instagram',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="icon">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      text: 'My Instagram account',
      url: 'https://www.instagram.com/briannabums19/',
      className: 'instagram',
      ariaLabel: 'Visit Instagram profile'
    },
    {
      id: 'twitter',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="icon">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      text: 'My Twitter account',
      url: 'https://x.com/BumsBriann18',
      className: 'twitter',
      ariaLabel: 'Visit Twitter profile'
    },
    {
      id: 'bluesky',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="icon">
          <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 2.104.139 3.107.139 5.394.139 8.464c0 3.07.378 5.3 1.271 6.681.893 1.381 2.339 2.1 3.589 2.1 1.251 0 3.072-.719 4.063-1.792.991 1.073 2.812 1.792 4.063 1.792 1.25 0 2.696-.719 3.589-2.1.893-1.381 1.271-3.611 1.271-6.681 0-3.07 0-5.357-.763-6.36C16.563 1.266 15.558.944 12.922 2.805 10.17 4.747 13.087 8.686 12 10.8z"/>
        </svg>
      ),
      text: 'My BlueSky account',
      url: 'https://bsky.app/profile/briannabums.bsky.social',
      className: 'bluesky',
      ariaLabel: 'Visit BlueSky profile'
    },{/*
    {
      id: 'youtube',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="icon">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
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