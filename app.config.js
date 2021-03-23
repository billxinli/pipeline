// import semverMajor from 'semver/functions/major'
// import semverMinor from 'semver/functions/minor'
// import semverPatch from 'semver/functions/patch'

const VERSION = (process.env.VERSION || '0.0.0').replace('v', '')

// const major = semverMajor(VERSION)
// const minor = semverMinor(VERSION)
// const patch = semverPatch(VERSION)
// const versionCode = parseInt(major.toString().padStart(3, '0') + minor.toString().padStart(3, '0') + patch.toString().padStart(3, '0'), 10)

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
    package: 'li.bill.pipeline',
    // versionCode,
    'adaptiveIcon': {
      'foregroundImage': './assets/adaptive-icon.png',
      'backgroundColor': '#FFFFFF'
    }
  },
  'web': {
    'favicon': './assets/favicon.png'
  }
}

