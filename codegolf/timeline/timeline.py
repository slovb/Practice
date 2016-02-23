def build(events):
    dateOfFirstEvent = min(events)
    dateOfLastEvent = max(events)
    output = '<' + ('-' * (dateOfLastEvent - dateOfFirstEvent + 3)) + '>\n'
    # Place the events in buckets
    buckets = [' ']*(dateOfLastEvent - dateOfFirstEvent + 5)
    i = ord('A')
    for e in events:
        buckets[e - dateOfFirstEvent + 2] = chr(i)
        i += 1
    # Join the buckets
    output += ''.join(buckets)
    # Trim the excess whitespace
    output = output.strip()
    return output

if __name__ == '__main__':
    import sys
    print build(map(int, sys.argv[1:]))

