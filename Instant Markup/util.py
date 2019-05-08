#util.py
#这个模块的功能是为了将原文档分成块，以作为规则匹配程序的输入

#在文件末尾添加空行作为结束标志
def lines(file):
    for line in file: yield line
    yield '\n'

#一段话生成一个文本块
def blocks(file):
    block = []
    for line in lines(file):
        if line.strip():
            block.append(line)
        elif block:
            yield ''.join(block).strip()
            block = []
