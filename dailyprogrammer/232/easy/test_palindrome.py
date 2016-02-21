import unittest
from palindrome import isPalindrome

class TestPalindrome(unittest.TestCase):
    def test_trivial(self):
        self.assertTrue(isPalindrome(''))
        self.assertTrue(isPalindrome('a'))
        self.assertTrue(isPalindrome('Q'))
        self.assertTrue(isPalindrome('b?'))
        self.assertTrue(isPalindrome('t '))

    def test_one_word(self):
        self.assertTrue(isPalindrome('abba'))
        self.assertTrue(isPalindrome('abBA'))
        self.assertTrue(isPalindrome('ABBA!!'))
        self.assertFalse(isPalindrome('abab'))
        self.assertFalse(isPalindrome('abab?'))

    def test_two_words(self):
        self.assertTrue(isPalindrome('one eno'))
        self.assertTrue(isPalindrome('one eno!'))
        self.assertTrue(isPalindrome('onetwothree eerhtowteno'))
        self.assertFalse(isPalindrome('one owt'))
        
    def test_sample(self):
        self.assertTrue(isPalindrome(
            '''Was it a car
            or a cat
            I saw?'''
        ))
        self.assertFalse(isPalindrome(
            '''A man, a plan, 
            a canal, a hedgehog, 
            a podiatrist, 
            Panama!'''
        ))
        self.assertFalse(isPalindrome(
            '''Are we not drawn onward, 
            we few, drawn onward to new area?'''
        ))

if __name__ == '__main__':
    unittest.main()
