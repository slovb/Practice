def generateColumns(data):
    columns = []
    for j in range(len(data[0])):
        column = []
        count = 0
        for i in range(len(data)):
            if data[i][j] == '*':
                count += 1
            elif count != 0:
                column.append(count)
                count = 0
        if count != 0:
            column.append(count)
        columns.append(column)
    return columns

def generateRows(data):
    rows = []
    for data_row in data:
        row = []
        count = 0
        for c in data_row:
            if c == '*':
                count += 1
            elif count != 0:
                row.append(count)
                count = 0
        if count != 0:
            row.append(count)
        rows.append(row)
    return rows

