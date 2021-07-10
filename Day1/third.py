import numpy as np
import matplotlib as mtl
import matplotlib.pyplot as plt
x = [1,2,3,4]
y1 = [4,3,2,1]
y2 = [10,20,30,40]
y3 = [40,30,20,10]
y4 = [1,2,1,2]
y5 = [40,70,90,70]


plt.subplot(3,3,1)
plt.plot(x,y1,"b--")

plt.subplot(3,3,2)
plt.plot(x,y2,"y*-.")

plt.subplot(3,3,3)
plt.plot(x,y3,"p--")

plt.subplot(3,3,4)
plt.plot(x,y4,"o--")

plt.subplot(3,3,5)
plt.plot(x,y5,"r*-")

plt.subplot(3,3,6)
plt.plot(x,"o-")

plt.subplot(3,3,7)
plt.plot(y1,y2,"om-")

plt.subplot(3,3,8)
plt.plot(y3,y4,"g*--")

plt.subplot(3,3,9)
plt.plot(y1,y4,"c--")
plt.show()