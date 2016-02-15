import unittest
import prime

class TestPrime(unittest.TestCase):
    def test_empty(self):
        self.assertEqual(prime.factors(1), [])

    def test_2(self):
        self.assertEqual(prime.factors(2), [2])

    def test_3(self):
        self.assertEqual(prime.factors(3), [3])

    def test_4(self):
        self.assertEqual(prime.factors(4), [2,2])

    def test_5(self):
        self.assertEqual(prime.factors(5), [5])

    def test_6(self):
        self.assertEqual(prime.factors(6), [2,3])

    def test_7(self):
        self.assertEqual(prime.factors(7), [7])

    def test_8(self):
        self.assertEqual(prime.factors(8), [2,2,2])

    def test_9(self):
        self.assertEqual(prime.factors(9), [3,3])

    def test_10(self):
        self.assertEqual(prime.factors(10), [2,5])

    def test_100(self):
        self.assertEqual(prime.factors(100), [2,2,5,5])

    def test_34503489(self):
        self.assertEqual(prime.factors(34503489), [3,3,3,3,17,25057])

    def test_2342623178(self):
        self.assertEqual(prime.factors(2342623178), [2,7,1237,135271])

    def test_4126264356(self):
        self.assertEqual(prime.factors(4126264356), [2,2,3,59,5828057])

if __name__ == '__main__':
    unittest.main()

