import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div><h1>Footer Page</h1>

        <div>
            <p>&copy; 2024 PrinceDastan. All Rights Reserved.</p>

            <div>
                <ul>
                    <li><a href="/footer/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/footer/terms-of-service">Terms of Service</a></li>
                </ul>

            </div>

        </div>
        
    </div>
  )
}

export default Footer