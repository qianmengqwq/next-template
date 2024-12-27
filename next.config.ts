import type { NextConfig } from 'next'
import process from 'node:process'
import bundleAnalyzer from '@next/bundle-analyzer'

const nextConfig: NextConfig = {
  /* config options here */
}

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer(nextConfig)
