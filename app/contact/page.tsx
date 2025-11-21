"use client";
import ContactSection from '@/components/contactpage/connect-setion';
import Location from '@/components/contactpage/location';
import OfficeLocations from '@/components/contactpage/office-location';
import HeroTitle from '@/components/hero-title';
import React from 'react'

const page = () => {
  return (
    <div>
        <HeroTitle title='Contact Us' leftText='Home' rightText='Contact Us'  />
        <ContactSection />
        <Location />
        <OfficeLocations />
    
    </div>
  )
}

export default page