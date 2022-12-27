export const isOnMobile = () => {
  if (typeof window !== 'undefined') {
    return Boolean(
      window.matchMedia('(pointer:coarse)').matches ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)
    )
  }
}

export const mobileImageCheck = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 500 && window.innerWidth > 400) {
      return 430
    }
  }
}

//MORE OPTIONS:

export function isAndroid(): boolean {
  return (
    typeof navigator !== 'undefined' && /android/i.test(navigator.userAgent)
  );
}

export function isSmallIOS(): boolean {
  return (
    typeof navigator !== 'undefined' && /iPhone|iPod/.test(navigator.userAgent)
  );
}

export function isLargeIOS(): boolean {
  return typeof navigator !== 'undefined' && /iPad/.test(navigator.userAgent);
}

export function isIOS(): boolean {
  return isSmallIOS() || isLargeIOS();
}

export function isMobile(): boolean {
  return isAndroid() || isSmallIOS();
}