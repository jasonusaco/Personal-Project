import sys, re
from handlers import *
from util import *
from rules import *
 
class Parser:
    """
    A Parser 读入文本, 使用 rules and 控制 a handler.
    
    """
    #初始化成员，handler,rules(),filters()
    def __init__(self, handler):
        self.handler = handler
        self.rules = []
        self.filters = []
        
    #添加rule,方便扩展
    def addRule(self, rule):
        self.rules.append(rule)
        
    #添加过滤器， 方便扩展
    def addFilter(self, pattern, name):
        def filter(block, handler):
            return re.sub(pattern, handler.sub(name), block)
        self.filters.append(filter)
        
    #方法parse，读取文本（调用util.py的blocks(file)）并分成block，
    #使用循环用规则(rule)和过滤器（filter(block, handler)处理block，
    def parse(self, file):
        self.handler.start('document')
        for block in blocks(file):
            for filter in self.filters:
                block = filter(block, self.handler)
            for rule in self.rules:
                if rule.condition(block):
                    if rule.action(block,
                           self.handler): break
 
        self.handler.end('document')
 
#Parser派生出的具体的类（通过添加具体的规则和过滤器）：用于添加HTML标记
class BasicTextParser(Parser):

    """
    在构造函数中添加规则和过滤器的parser子类
    
    """
 
    def __init__(self, handler):
        Parser.__init__(self, handler)
        self.addRule(ListRule())
        self.addRule(ListItemRule())
        self.addRule(TitleRule())
        self.addRule(HeadingRule())
        self.addRule(ParagraphRule())
 
        self.addFilter(r'\*(.+?)\*', 'emphasis')
        self.addFilter(r'(http://[\.a-zA-Z/]+)', 'url')
        self.addFilter(r'([\.a-zA-Z]+@[\.a-zA-Z]+[a-zA-Z]+)', 'mail')
 
#主程序：构造handler实例，构造parser（使用对应的handler）实例,调用parser的方法parser进行对文本的处理
handler = HTMLRenderer()
parser = BasicTextParser(handler)
 
parser.parse(sys.stdin)
