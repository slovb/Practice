def factors(n):
    if (n < 2):
        return []
    return [n]

if __name__ == '__main__':
    import sys
    factors(int(sys.argv[1]))
