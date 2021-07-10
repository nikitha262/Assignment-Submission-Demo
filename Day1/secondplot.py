import numpy as np
import matplotlib as mtl
import matplotlib.pyplot as plt
days = [1,2,3,4,5,6,7] #days of d week
sales_1 = [160,150,140,145,175,165,180] #sales of company1
sales_2 = [70,90,160,150,140,145,175]  #sales of company2
plt.xlabel("Days of Week",color = "blue")
plt.ylabel("Sales according to Week", color ="red")
plt.title("Line Chart",color="Black")
plt.plot(days,sales_1,"bo--",label="Line_1", markersize=10)
plt.plot(days,sales_2,"o:r", label="line_2",markersize=10)
plt.show()