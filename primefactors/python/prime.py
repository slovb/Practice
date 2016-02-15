def factorize(n):
    factors = []
    if (n > 1):
        factors += [n]
    return factors

if __name__ == '__main__':
    import sys
    factors(int(sys.argv[1]))
