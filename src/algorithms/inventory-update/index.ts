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

export function updateInventory (
  arr1: InventoryItem[],
  arr2: InventoryItem[]
): InventoryItem[] {
  return [...arr1, ...arr2].reduce<InventoryItem[]>(
    (inventory, item) => hasItem(inventory, item)
      ? updateItem(inventory, item)
      : addItem(inventory, item)
    ,
    []
  )
}
