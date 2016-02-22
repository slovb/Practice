def encrypt(plain, shift = 1):
    cipher = list(plain)

    orda = ord('a')
    ordz = ord('z')
    ordA = ord('A')
    ordZ = ord('Z')
    diff = ordz - orda + 1

    for i, c in enumerate(cipher):
        if ord(c) in range(orda, ordz + 1):
            ordc = ord(c) + shift
            wrap = ((ordc - orda) % diff) + orda
            cipher[i] = chr(wrap)
        elif ord(c) in range(ordA, ordZ + 1):
            ordc = ord(c) + shift
            wrap = ((ordc - ordA) % diff) + ordA
            cipher[i] = chr(wrap)
    return ''.join(cipher)

def decrypt(ciphertext, shift = 1):
    return encrypt(ciphertext, 0-shift)

if __name__ == '__main__':
    import sys
    print encrypt(''.join(sys.argv[1:]))

