import React, { useState } from 'react'
import MainMContext from './MainMContext'
import HeaderMContext from './HeaderMContext'
import FooterMContext from './FooterMContext'
import { ThemeProvider } from './CONTEXT/ThemeContext'
import { LanguageProvider } from './CONTEXT/LanguageContext'
import AuthContext, { AuthProvider } from './CONTEXT/AuthContext'



function MyPageContext() {
    
    



  return (
    <div className="my-page">
      <ThemeProvider>
          <LanguageProvider>
          <AuthProvider>
          <HeaderMContext  
          
          ></HeaderMContext>
          
          <MainMContext>

          </MainMContext>

          </AuthProvider>
          <FooterMContext  ></FooterMContext>
        </LanguageProvider>
      </ThemeProvider>
      
        
    </div>
  )
}

export default MyPageContext