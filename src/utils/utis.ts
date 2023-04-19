export function extractFirstName(
  name: string[] | string | undefined
): string | null | undefined {
  if (Array.isArray(name)) {
    return name[0]?.trim()?.split(' ')[0]
  }
  return name?.trim()?.split(' ')[0]
}
