def cipher(plain):
    cipher = list(plain)
    for i, c in enumerate(plain):
        if ord(c) in range(ord('a'), ord('z') + 1):
            cipher[i] = chr(ord('a') + ord('z') - ord(c))
    return ''.join(cipher)

if __name__ == '__main__':
    import sys
    print cipher(sys.argv[1])

