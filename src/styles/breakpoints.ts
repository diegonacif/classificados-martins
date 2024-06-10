interface Size {
  tablet: string
  notebook: string
  desktop: string
  widescreen: string
}

const size: Size ={
  tablet: `600px`,
  notebook: `1024px`,
  desktop: `1280px`,
  widescreen: `1920px`,
}

export const deviceBreakpoint = {
  tablet: `(min-width: ${size.tablet})`,
  notebook: `(min-width: ${size.notebook})`,
  desktop: `(min-width: ${size.desktop})`,
  widescreen: `(min-width: ${size.widescreen})`,
}