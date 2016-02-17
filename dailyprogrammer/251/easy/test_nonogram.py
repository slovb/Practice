import unittest
import nonogram

class TestNonogram(unittest.TestCase):
    def test_sample(self):
        data = [    
            '    *',
            '   **',
            '  * *',
            ' *  *',
            '*****'
        ]
        columns = nonogram.generateColumns(data)
        expectedColumns = [
            [ 1 ],
            [ 2 ],
            [ 1, 1 ],
            [ 1, 1 ],
            [ 5 ]
        ]
        self.assertEqual(columns, expectedColumns)
        rows = nonogram.generateRows(data)
        expectedRows = [
            [ 1 ],
            [ 2 ],
            [ 1, 1 ],
            [ 1, 1 ],
            [ 5 ]
        ]
        self.assertEqual(rows, expectedRows)

if __name__ == '__main__':
    unittest.main()

