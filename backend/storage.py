import os
import sys


def get_counter():
    if os.path.exists('counter.txt'):
        with open('counter.txt', 'r') as f:
            return f.readline()
    else:
        return '0'


def increase_counter():
    if os.path.exists('counter.txt'):
        f = open('counter.txt', 'r+')
        number = int(f.readline())
        f.seek(0)
        f.write(str(number + 1))
        f.close()
    else:
        create_file()


def create_file():
    f = open('counter.txt', 'w')
    f.write('1')
    f.close()
