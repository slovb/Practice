import unittest
from timeline import build

class TestTimeline(unittest.TestCase):
    def test_sample(self):
        expected = '''<----------------------------->
  A     B  C           D    E'''
        self.assertEqual(expected, build([1990, 1996, 1999, 2011, 2016]))

    def test_case1(self):
        expected = '''<------------------------------------------------------->
  BC     G      FE         I         D           J   HA'''
        self.assertEqual(expected, build([32767, 32715, 32716, 32750, 32730, 32729, 32722, 32766, 32740, 32762]))

    def test_case2(self):
        expected = '''<---->
  BA'''
        self.assertEqual(expected, build([2015, 2014]))

    def test_case3(self):
        expected = '''<----------------------------->
  A     B  C           D    E'''
        self.assertEqual(expected, build([1990, 1996, 1999, 2011, 2016]))

    def test_case4(self):
        expected = '''<------->
  CABED'''
        self.assertEqual(expected, build([2, 3, 1, 5, 4]))

    def test_case5(self):
        expected = '''<--->
  A'''
        self.assertEqual(expected, build([12345]))

if __name__ == '__main__':
    unittest.main()

