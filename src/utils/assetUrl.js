export function resolveAssetUrl(path) {
  if (!path) return path

  // Preserve absolute URLs and non-file protocols.
  if (
    /^(https?:)?\/\//i.test(path) ||
    path.startsWith('data:') ||
    path.startsWith('mailto:') ||
    path.startsWith('#')
  ) {
    return path
  }

  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  return `${import.meta.env.BASE_URL}${normalizedPath}`
}
