
export const iOSVersion = () => {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    const v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/)
    return Array.isArray(v) ? [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)] : [];
  }
}

export const isSafari = () => navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1;

