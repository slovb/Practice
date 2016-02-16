import unittest
import atbash

class TestAtbash(unittest.TestCase):
    def test_foobar(self):
        self.assertEqual('ullyzi', atbash.cipher('foobar'))

    def test_wizard(self):
        self.assertEqual('draziw', atbash.cipher('wizard'))

    def test_dailyprogrammer(self):
        self.assertEqual('/i/wzrobkiltiznnvi', atbash.cipher('/r/dailyprogrammer'))

    def test_sentence(self):
        self.assertEqual('gsrh rh zm vcznkov lu gsv zgyzhs xrksvi', atbash.cipher('this is an example of the atbash cipher'))

if __name__ == '__main__':
    unittest.main()

