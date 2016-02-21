def isPalindrome(candidate):
    def clean(string):
        import re
        return ''.join(re.findall(re.compile(r'[a-z]+'), string.lower()))
    string = clean(candidate)
    for i, x in enumerate(string[:len(string)/2]):
        if (x != string[len(string)-1-i]):
            return False
    return True

if __name__ == '__main__':
    import sys
    print isPalindrome(sys.argv[1:])

