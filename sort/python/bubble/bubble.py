def sort(arg):
    for j in range(len(arg)-1, 0, -1):
        for i in range(j):
            if arg[i] > arg[i+1]:
                arg[i], arg[i+1] = arg[i+1], arg[i]
    return arg

if __name__ == '__main__':
    import sys
    print sort(map(int, sys.argv[1:]))

