export function PrefixZero (num, length) {
  return (Array(length).join(0) + num).slice(-length)
}
