import unittest
from ceasar import encrypt, decrypt

class TestCeasar(unittest.TestCase):
    def test_encrypt_trivial(self):
        self.assertEqual('', encrypt(''))
        self.assertNotEqual('!', encrypt(''))
        self.assertNotEqual('!', encrypt('!!'))
        self.assertEqual('asdf', encrypt('asdf', 0))
        self.assertNotEqual('qwer', encrypt('asdf', 0))
        self.assertEqual('asdf', encrypt('asdf', 26))

    def test_decrypt_trivial(self):
        self.assertEqual('!', decrypt('!'))
        self.assertNotEqual('!', decrypt(''))
        self.assertNotEqual('!', decrypt('!!'))
        self.assertEqual('qwer', decrypt('qwer', 0))
        self.assertNotEqual('asdf', decrypt('qwer', 0))
        self.assertEqual('qwer', decrypt('qwer', 26))

    def test_encrypt_single(self):
        self.assertEqual('bteg', encrypt('asdf', 1))
        self.assertEqual('BTEG', encrypt('ASDF', 1))
        self.assertNotEqual('BTEG', encrypt('asdf', 1))
        self.assertEqual('bteg', encrypt('asdf'))
        self.assertNotEqual('qteg', encrypt('asdf', 1))
        self.assertEqual('a', encrypt('z', 1))
        self.assertEqual('bcdefghijklmnopqrstuvwxyza', encrypt('abcdefghijklmnopqrstuvwxyz', 1))

    def test_decrypt_single(self):
        self.assertEqual('asdf', decrypt('bteg', 1))
        self.assertEqual('asdf', decrypt('bteg'))
        self.assertNotEqual('qsdf', decrypt('bteg', 1))
        self.assertEqual('z', decrypt('a', 1))
        self.assertEqual('zabcdefghijklmnopqrstuvwxy', decrypt('abcdefghijklmnopqrstuvwxyz', 1))

    def test_encrypt_double(self):
        self.assertEqual('cufh', encrypt('asdf', 2))
        self.assertNotEqual('xufh', encrypt('asdf', 2))
        self.assertEqual('cdefghijklmnopqrstuvwxyzab', encrypt('abcdefghijklmnopqrstuvwxyz', 2))

    def test_decrypt_double(self):
        self.assertEqual('asdf', decrypt('cufh', 2))
        self.assertNotEqual('xsdf', decrypt('cufh', 2))
        self.assertEqual('yzabcdefghijklmnopqrstuvwx', decrypt('abcdefghijklmnopqrstuvwxyz', 2))

if __name__ == '__main__':
    unittest.main()

