import { pathnameSymbol } from "../constants/variable"

type pathnameSymbolType = createMutable<typeof pathnameSymbol>

const pathnameArray = (pathname: string): string[] => {
  return pathname.split(/(\/)/).slice(1)
}

export const pathnameToCategory = (pathname: string): string => {
  return pathnameArray(pathname)[1]
}

export const pathnameToBreadCrumb = (pathname: string) => {
  const map = new Map();
  pathnameArray(pathname).map(path => map.set(pathnameSymbol[path as keyof pathnameSymbolType], 1))

  return [...map.keys()]
}

export const pathnameToTitle = (pathname: string) => {
  return pathnameToBreadCrumb(pathname)[1]
}
