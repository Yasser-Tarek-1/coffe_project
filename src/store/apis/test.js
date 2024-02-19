const arrayOfObjects = [
  {
    product: {
      id: 1, // Sample product price
    },
    count: 1, // Sample count
    supplimetaries: [
      { id: 1 }, // Sample supplementary product price
      { id: 2 }, // Sample supplementary product price
    ],
  },
];
function updateArray(addedObject) {
  const existingIndex = arrayOfObjects.findIndex((obj) => {
    // Check if the product ID matches
    return obj.product.id === addedObject.product.id;
  });

  if (existingIndex !== -1) {
    // If the product exists, check its supplements
    const existingObject = arrayOfObjects[existingIndex];
    const existingSupplimetariesIds = existingObject.supplimetaries.map(
      (sup) => sup.id
    );

    // Check if all new supplementary product IDs are already in the array
    const allSupplimetariesInArray = addedObject.supplimetaries.every((sup) =>
      existingSupplimetariesIds.includes(sup.id)
    );

    console.log(allSupplimetariesInArray);

    if (!allSupplimetariesInArray) {
      // if  allSupplimetariesInArray = false  add it
    } else {
      // If all supplements are in the array, update the count of the existing object update count
    }
  } else {
    // If the product is not in the array, add it
  }
}

// Example usage:
const addedObject = {
  product: {
    id: 1,
  },
  count: 1,
  supplimetaries: [{ id: 1 }, { id: 2 }],
};

updateArray(addedObject);
