
const test = () => {
    console.log('Sorting test');
    let array = getArray();

    console.log('Unsorted array:');
    printArray(array);

    console.log();
    console.log('Sorted array:');
    sort(array);
    printArray(array);
}

const printArray = (array) => {
  console.log(array.join(', '));
}

const sort = (array) => {
    quickSort(array, 0, array.length - 1);
}

const quickSort = (array, left, right) => {
    if (right <= left)
        return;

    let pivot = array[left];
    let partn = partition(array, left, right, pivot);

    quickSort(array, left, partn - 1);
    quickSort(array, partn, right); 
}

const partition = (array, left, right, pivot) => {
  while (left <= right) {
      while (array[left] < pivot)
          left++;

      while (array[right] > pivot)
          right--;

      if (left <= right) {
          swap(array, left, right);
          left++;
          right--;
      }
  }
    return left;
}

const swap = (array, left, right) => {
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;
}

const getArray = () => {
    let array = [];
    for (let i = 0; i < 100; i++) {
        array.push(Math.floor(Math.random() * 99));
    }

    return array;
}

module.exports = test;