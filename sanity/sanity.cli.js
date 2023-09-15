import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'bcfb3044',
    dataset: 'production',
  },
  plugins: ['@sanity/base', '@sanity/default-layout', '@sanity/default-login', '@sanity/desk-tool'],
})
