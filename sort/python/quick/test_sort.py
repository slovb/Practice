import unittest

class TestSort(unittest.TestCase):
    def test_empty(self):
        self.assertEqual(sort([]), [])

    def test_single(self):
        self.assertEqual(sort([1]), [1])
        self.assertEqual(sort([0]), [0])
        self.assertEqual(sort([-1]), [-1])

    def test_two(self):
        self.assertEqual(sort([2,1]), [1,2])
        self.assertEqual(sort([1,2]), [1,2])
        self.assertEqual(sort([7,8]), [7,8])
        self.assertEqual(sort([7,4]), [4,7])

    def test_multiples(self):
        self.assertEqual(sort([1,1]), [1,1])
        self.assertEqual(sort([5,5,5,5]), [5,5,5,5])
        self.assertEqual(sort([5,5,4,5]), [4,5,5,5])

    def test_sorted(self):
        self.assertEqual(sort([1]), [1])
        self.assertEqual(sort([1,2]), [1,2])
        self.assertEqual(sort([1,2,3]), [1,2,3])
        self.assertEqual(sort([1,2,3,4]), [1,2,3,4])

    def test_kitchen_sink(self):
        self.assertEqual(
            sort([1,2,5,72,3,6,3,234,5,6,4,2,1,7,9,6,4,322,7,56,23,4,6,4,2,3,6,8,5,3,1,3]),
            [1,1,1,2,2,2,3,3,3,3,3,4,4,4,4,5,5,5,6,6,6,6,6,7,7,8,9,23,56,72,234,322]
        )
        self.assertEqual(
            sort([9,5,4,3,1,6,5,7,5,8,9,9,8,0,8,9,8,7,4,2,1,5,4,6,7,3,1,4,3,5,7,8,9,3]),
            [0,1,1,1,2,3,3,3,3,4,4,4,4,5,5,5,5,5,6,6,7,7,7,7,8,8,8,8,8,9,9,9,9,9]
        )

    def test_fixed_seed(self):
        def is_sorted(A):
            for i in range(1, len(A)):
                if A[i-1] > A[i]:
                    return False
            return True
        import random
        random.seed(17)
        for i in range(100):
            A = random.sample(xrange(10000000), 10000)
            self.assertTrue(is_sorted(sort(A)))

if __name__ == '__main__':
    from quick import sort
    unittest.main()

