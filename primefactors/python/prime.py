def factorize(n):
    factors = []
    while (n % 2 == 0):
        factors += [2]
        n /= 2
    if (n > 1):
        factors += [n]
    return factors

if __name__ == '__main__':
    import sys
    factors(int(sys.argv[1]))
