'use client'

import { Links } from '../section/links'
import { LanguageProvider } from '@/components/LanguageProvider'

export default function LinkPage() {
  return (
    <LanguageProvider>
      <Links />
    </LanguageProvider>
  )
} 