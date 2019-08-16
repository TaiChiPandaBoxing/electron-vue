export function PrefixZero (num, length = 2) {
  return (Array(length).join(0) + num).slice(-length)
}
