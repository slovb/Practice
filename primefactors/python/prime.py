def factorize(n):
    factors = []
    if (n > 1):
        if (n % 2 == 0):
            factors += [2]
            n /= 2
        factors += [n]
    return factors

if __name__ == '__main__':
    import sys
    factors(int(sys.argv[1]))
