# Algorithms

## Searching

### Linear Search
::: theorem Linear Search
This is the simplest search algorithm, we iterate through the whole
array, if the integer we are searching for is there we return it's index in the array.
If we don't see the integer, we return -1 to signal that it is not in the array.
:::

```java
public static int linear(int[] array, int x) {
    for (int i = 0; i < array.length; i++) {
        if (array[i] == x) {
            return i;
        }
    }
    return -1;
}
```

### Binary Search
::: theorem Binary Search
this algorithm leverages an already sorted array, by splitting
the array and determining on which side of the split the element could be.
:::

#### Iterative
```java
public static int binarySearchIterative(int[] array, int x) {
    int upperLimit = array.length -1;
    int lowerLimit = 0;
    int mid;

    while (upperLimit >= lowerLimit) {
        mid = (upperLimit + lowerLimit) / 2;
        if (array[mid] == x) {
            return mid;
        }

        if (array[mid] > x) {
            upperLimit = mid - 1;
        } else {
            lowerLimit = mid + 1;
        }
    }
    return -1;
}
```

#### Recursive
```java
public static int binarySearchRecursive(int[] array, int lowerLimit, int upperLimit, int x) {
    if (upperLimit >= lowerLimit) {
        int mid = (upperLimit + lowerLimit) / 2;

        if (array[mid] == x) {
            return mid;
        }

        if (array[mid] > x) {
            return binarySearchRecursive(array, lowerLimit, mid - 1, x);
        }

        return binarySearchRecursive(array, mid + 1, upperLimit, x);
    }
    return -1;
}

public static int binarySearch(int[] array, int element) {
    return binarySearchRecursive(array, 0, array.length - 1, element);
}
```

## Sorting

### Selection Sort
::: theorem Selection Sort
The selection sort algorithm sorts an array by repeatedly finding the minimum element from an unsorted part of an array and placing it at the start of the unsorted part.
:::

```java
public static void selectionSort(int[] array) {
    for (int i = 0; i < array.length ; i++) {
        int minIndex = i;
        // find smallest element in array.
        for (int j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        // swap i with the found element.
        int temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = i;
    }
}
```
### Insertion Sort
::: theorem Insertion Sort
The insertion sort algorithm sorts an array like a human would sort cards, 
when you are sorting cards let's say you start at the left, then, you 
look at the cards before the one you want to place if there are cards that are greater than your current card
you put the card where its supposed to go and the others get shifted one place to the right.
in real life you just *insert* the card at the correct place but in java you need to shift the cards that are greater than your current card to the right so you can place your card in that spot where you know it's supposed to go.
:::

```java
public static void insertionSort(int[] array) {
    for (int i = 1; i < array.length; i++) {
        int key = array[i];
        int j = i - 1;

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
    }
}
```
### Bubble Sort
::: theorem Bubble Sort
This is a slow sorting algorithm that checks successive elements of an array
are they in order ? no -> swap, yes -> next pair.
:::

```java
public static void bubbleSort(int[] array) {
    for (int i = 0; i < array.length; i++) {
        for (int j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                int temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
}
```

### Quick Sort
::: theorem Quick Sort
QuickSort is a Divide and Conquer algorithm.
It picks an element as pivot and partitions the given array around the picked pivot.

There are many different versions of quickSort:
+ Pick first element as pivot.
+ Pick pick last element as pivot (implemented below)
+ Pick a random element as pivot.
+ Pick the median of low and high as pivot.
:::

```java
public static void quickSort(int[] array) {
    quickSortRecursive(array, 0, array.length-1);
}

public static void quickSortRecursive(int[] array, int low, int high) {
    if (low < high + 1) {
        int partition = partition(array, low, high);
        quickSortRecursive(array, low, partition - 1);
        quickSortRecursive(array, partition + 1, high);
    }
}

public static int partition(int[] arr, int low, int high) {
    int pivot = getPivotIndex(low, high);
    int partitionIndex = 0;

    swap(arr, pivot, high);

    for (int i = 0; i < high; i++) {
        // we put the pivot arr[high]
        if (arr[i] <= arr[high]) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, partitionIndex, high);

    return partitionIndex;
}

private static int getPivotIndex(int low, int up)
{
    Random rand = new Random();
    return rand.nextInt((up - low) + 1) + low;
}

public static void swap(int[] arr, int a, int b) {
    int temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
```

### Merge Sort
::: theorem Merge Sort
Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, low, middle, middle+1, high) takes arr[low..middle] and arr[middle+1..high] which should be sorted and merges the two them into one.
:::

```java
public static void mergeSort(int[] arr) {
    mergeSortRecursive(arr, 0, arr.length - 1);
}

public static void mergeSortRecursive(int[] arr, int low, int high) {
    if (low < high) {
        int middle = (high + low)/2;
        mergeSortRecursive(arr, low, middle);
        mergeSortRecursive(arr, middle + 1, high);
        merge(arr, low, middle, middle + 1, high);
    }
}

public static void merge(int[] arr, int low1, int high1, int low2, int high2) {
    int index1 = 0;
    int index2 = 0;
    int indexArr = low1;

    int[] copy1 = new int[high1 - low1+1];
    int[] copy2 = new int[high2 - low2+1];

    for (int i = 0; i < copy1.length; i++) {
        copy1[i] = arr[low1 + i];
    }
    for (int i = 0; i < copy2.length; i++) {
        copy2[i] = arr[low2 + i];
    }

    while (index1 < copy1.length && index2 < copy2.length) {
        if (copy1[index1] <= copy2[index2]) {
            arr[indexArr] = copy1[index1];
            index1++;
        } else {
            arr[indexArr] = copy2[index2];
            index2++;
        }
        indexArr++;
    }

    for (int i = index1; i < copy1.length; i++, indexArr++) {
        arr[indexArr] = copy1[i];
    }

    for (int i = index2; i < copy2.length; i++, indexArr++) {
        arr[indexArr] = copy2[i];
    }
}
```

### Radix Sort
::: theorem Radix Sort
Radix is a sorting algorithm that does not use comparison.

Instead it iterates over the digits in the elements you want to sort (for example in base 10, ones', tenths', hundredths' ...)
Then we iterate over our elements and we count how many times we find a digit, and we put that count in a count array.

Ok, deep breath :nose:

With this count array, we can find what is called the *prefix sum* which gives you
the position+1 of the element should be placed at in the next step.

Then we make a new output array (this array will be ordered but only relative to the digits that have been iterated on),
to do this you have to iterate over the input array from right to left, getting the digit of the element.
and using the count array with the digit as key to find the new place the element should take.

Thank you for coming to my TED talk :satisfied:

There are several ways of doing Radix Sort:
+ with buckets (in practice a linked-list, or a queue like data-structure) takes a lot of memory
+ in combination with countingSort. takes less memory but costs more time.
:::

*implementation: radixSort with countingSort*
```java
public static int[] radixSort(int[] arr) {
    int[] count = new int[10];
    int digit;

    // find the length of the largest number.
    int max = arr[0];
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    int countDigits = Integer.toString(max).length();

    // Iterate for each digit in the largest number in the array.
    // keep track of the digits, tenths, hundredths ... with digitTen
    for (int times = 1, digitTen = 1; times <= countDigits; times++, digitTen *= 10) {
        // clear the count array.
        Arrays.fill(count, 0);

        // for each digit in the increase the count in the count array.
        for (int i = 0; i < arr.length; i++) {
            digit = arr[i] % (digitTen * 10);
            digit = digit/digitTen;
            count[digit]++;
        }

        // get the prefix sum of the count array.
        for (int i = 1; i < count.length; i++) {
            count[i] = count[i - 1] + count[i];
        }

        // use the prefix sum to find the correct index for a digit.
        int[] output = new int[arr.length];
        for (int i = arr.length - 1; i >= 0; i--) {
            digit = arr[i] % (digitTen * 10);
            digit = digit/digitTen;
            output[--count[digit]] = arr[i];
        }

        arr = output;
    }
    return arr;
}
```

## Complexity

| Algorithm | Type | Best-Time | Worst-Time | Space | Remarks |
| --------- | ---- | --------- | ---------- | ----- | ------- |
| [Linear Search](#linear-search) | Search | $\mathcal{O}(1)$ | $\mathcal{O}(n)$| $\mathcal{O}(1)$ | |
| [Binary Search](#binary-search) | Search | $\mathcal{O}(1)$ | $\mathcal{O}(\log_2 n)$ | $\mathcal{O}(1)$ | |
| [Selection Sort](#selection-sort) | Sort | $\mathcal{O}(n^2)$| $\mathcal{O}(n^2)$ | $\mathcal{O}(1)$ | |
| [Insertion Sort](#insertion-sort) | Sort | $\mathcal{O}(n + m)$ | $\mathcal{O}(n^2)$ | $\mathcal{O}(1)$ | **m**: number of swaps used |
| [Bubble Sort](#bubble-sort) | Sort | $\mathcal{O}(n)$ | $\mathcal{O}(n^2)$ | $\mathcal{O}(n)$ | |
| [Quick Sort](#quick-sort) | Sort | $\mathcal{O}(n\log_2 n)$ | $\mathcal{O}(n^2)$ | $\mathcal{O}(\log_2 n)$ | |
| [Merge Sort](#merge-sort) | Sort | $\mathcal{O}(n^2)$ | $\mathcal{O}(n^2)$ | $\mathcal{O}(n)$ | |
| [Radix Sort](#radix-sort) | Sort | $\mathcal{O}(d(n + b))$ | $\mathcal{O}(d (n + b))$ | $\mathcal{O}(n + b)$ | **d**: the amount of digits in the input, **b**: the base of the numbers sorted |

## Sources:
+ [alemoraru's algorithms pages](https://alemoraru.github.io/algorithms)
