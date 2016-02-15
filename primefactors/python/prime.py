def factorize(n):
    factors = []
    # Factors of 2 can be unrolled to allow steps of 2 in the loop
    i = 2
    while n % i == 0:
        factors += [i]
        n //= i
    # Primary factorization loop initialized at 3 with steps of 2
    i = 3
    while i <= n:
        while n % i == 0:
            factors += [i]
            n //= i
        i += 2
    return factors

if __name__ == '__main__':
    import sys
    factors(int(sys.argv[1]))

