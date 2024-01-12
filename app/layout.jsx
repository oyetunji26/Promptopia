import React, { children } from 'react'

// import the style from the styles folder
import '@styles/globals.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: "promptopia",
    description: "Discover and share AI prompts"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
              <div className="gradient"></div>
          </div>
          
          <main className="app">
            <Nav />
            {children}
          </main>
          </Provider>
      </body>
    </html>
  )
}

// this file is rendered everywhere, so instead of calling Nav into all routes, just call it here and it would show in all routes
export default RootLayout