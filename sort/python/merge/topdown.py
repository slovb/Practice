# Top-down
def sort(A):
    def merge_sort(A):
        if len(A) <= 1:
            return A
        return merge(merge_sort(A[:len(A)/2]), merge_sort(A[len(A)/2:]))

    def merge(left, right):
        result = []
        while len(left) > 0 and len(right) > 0:
            result.append(left.pop(0) if left[0] <= right[0] else right.pop(0))
        return result + left + right

    return merge_sort(A)

if __name__ == '__main__':
    import sys
    print sort(map(int, sys.argv[1:]))

