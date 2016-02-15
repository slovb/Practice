import unittest
import prime

class TestPrime(unittest.TestCase):
    def test_empty(self):
        self.assertEqual([], prime.factors(1))

if __name__ == '__main__':
    unittest.main()

#primetester(2, [2]);
#primetester(3, [3]);
#primetester(4, [2,2]);
#primetester(5, [5]);
#primetester(6, [2,3]);
#primetester(7, [7]);
#primetester(8, [2,2,2]);
#primetester(9, [3,3]);
#primetester(10, [2,5]);
#primetester(100, [2,2,5,5]);
#primetester(34503489, [3,3,3,3,17,25057]);
#primetester(2342623178, [2,7,1237,135271]);
#primetester(4126264356, [2,2,3,59,5828057]);

