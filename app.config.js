const VERSION = (process.env.VERSION || '0.0.0').replace('v', '')

export default {
  'name': 'pipeline',
  'slug': 'pipeline',
  'version': VERSION,
  'orientation': 'portrait',
  'icon': './assets/icon.png',
  'splash': {
    'image': './assets/splash.png',
    'resizeMode': 'contain',
    'backgroundColor': '#ffffff'
  },
  'updates': {
    'fallbackToCacheTimeout': 0
  },
  'assetBundlePatterns': [
    '**/*'
  ],
  'ios': {
    'supportsTablet': true
  },
  'android': {
    'adaptiveIcon': {
      'foregroundImage': './assets/adaptive-icon.png',
      'backgroundColor': '#FFFFFF'
    }
  },
  'web': {
    'favicon': './assets/favicon.png'
  }
}

