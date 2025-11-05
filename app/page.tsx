"use client"

import React from "react"
import Hero from "./components/ui/animated-shader-hero"
import { 
  FaLinkedin, 
  FaGithub, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaTwitch,
  FaTiktok,
  FaFilePdf
} from 'react-icons/fa'

export default function Home() {
  return (
    <Hero
      headline={{
        line1: "Melih Koçhan",
        line2: ""
      }}
      subtitle=""
      description="This is a simple welcome page for now. Feel free to explore the links and discover more!"
      socialLinks={[
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/melih-kochan-7961371a2/', icon: <FaLinkedin /> },
        { name: 'GitHub', url: 'https://github.com/melihkochan', icon: <FaGithub /> },
        { name: 'Twitter', url: 'https://x.com/melihkochan1', icon: <FaTwitter /> },
        { name: 'Instagram', url: 'https://www.instagram.com/melih_kochan/', icon: <FaInstagram /> },
        { name: 'YouTube', url: 'https://music.youtube.com/channel/UCH7mSmrradMTPpMkmDFCcIQ', icon: <FaYoutube /> },
        { name: 'CV', url: '/melihkochancv.pdf', icon: <FaFilePdf />, download: true },
      ]}
      className=""
    />
  )
}
