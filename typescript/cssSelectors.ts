// Calculate the weights of two CSS selectors and return the one with higher specificity.

type Counts = {
  ids: number,
  classes: number,
  tags: number,
}

const getSelectorCounts = (selectors: Array<string>): Counts => {
  const counts: Counts = { ids: 0, classes: 0, tags: 0 }
  
  for (let val of selectors) {
    val.split("").forEach((char, i) => {
      if (i === 0 && char !== "#" && char !== "." && char !== "*"){
        counts.tags++
      } else if (char === "#") {
        counts.ids++
      } else if (char === ".") {
        counts.classes++
      }
    })
  }
  
  return counts
}

const compareSpecificity = (a: Counts, b: Counts): number => {
  return (
    b.ids - a.ids ||
    b.classes - a.classes ||
    b.tags - a.tags
  )
}

export function compare (a: string, b: string): string {
  const aCounts = getSelectorCounts(a.split(" "))
  const bCounts = getSelectorCounts(b.split(" "))
  
  return compareSpecificity(aCounts, bCounts) < 0 ? a : b
}