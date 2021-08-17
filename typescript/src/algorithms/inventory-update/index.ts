export type InventoryItem = [number, string]

function hasItem (inventory: InventoryItem[], item: InventoryItem): boolean {
  return typeof inventory.find(el => item[1] === el[1]) !== 'undefined'
}

function updateItem (inventory: InventoryItem[], item: InventoryItem): InventoryItem[] {
  return inventory.map(
    el => el[1] === item[1]
      ? ([el[0] + item[0], el[1]] as InventoryItem)
      : el
  )
}

function addItem (inventory: InventoryItem[], item: InventoryItem): InventoryItem[] {
  return [...inventory, item]
}

function sortString (a: string, b: string): number {
  if (a < b) return -1
  if (a > b) return 1
  return 0
}

export function updateInventory (
  arr1: InventoryItem[],
  arr2: InventoryItem[]
): InventoryItem[] {
  const inventory = [...arr1, ...arr2].reduce<InventoryItem[]>(
    (inventory, item) => hasItem(inventory, item)
      ? updateItem(inventory, item)
      : addItem(inventory, item)
    , [])

  return inventory.sort((a, b) => sortString(a[1], b[1]))
}
