def factorize(n):
    factors = []
    i = 2
    while (n > 1):
        while (n % i == 0):
            factors += [i]
            n /= i
        i += 1
    return factors

if __name__ == '__main__':
    import sys
    factors(int(sys.argv[1]))
