import { generateId, type GenerateId } from "@/utils/generate-id"
import { utcDate, type UtcDate } from "@/utils/utc-date"

// Generate ID and UTC date

const date = utcDate()
const id = generateId(date)

console.log("\x1b[32m%s\x1b[0m", "Generated ID:", id)
console.log("\x1b[32m%s\x1b[0m", "UTC Date:", date)

export { generateId, type GenerateId, utcDate, type UtcDate }
