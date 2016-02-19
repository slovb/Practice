from random import randint
def sort(arg):
    def quicksort(A, lo, hi):
        if lo < hi:
            pivot = partition(A, lo, hi)
            quicksort(A, lo, pivot - 1)
            quicksort(A, pivot + 1, hi)
    
    def partition(A, lo, hi):
        q = randint(lo, hi)
        A[q], A[hi] = A[hi], A[q]
        pivot = A[hi]
        i = lo
        for j in range(lo, hi):
            if A[j] <= pivot:
                A[i], A[j] = A[j], A[i]
                i += 1
        A[i], A[hi] = A[hi], A[i]
        return i

    quicksort(arg, 0, len(arg) - 1)
    return arg

if __name__ == '__main__':
    import sys
    print sort(map(int, sys.argv[1:]))

