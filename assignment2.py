import numpy as np
import pandas as pd
import matplotlib as mtl
import matplotlib.pyplot as plt
r1=np.random.randint(5,20,10)
r2=np.random.randint(20,30,10)
r3=np.random.randint(30,40,10)
r4=np.random.randint(40,50,10)
df={"A": pd.Series(r1),"B": pd.Series(r2),"C": pd.Series(r3),"D": pd.Series(r4)}
data_frame=pd.DataFrame(df)

data_frame

data_frame.plot.bar()

r1=np.random.randint(9,10,5)
r2=np.random.randint(10,20,5)
r3=np.random.randint(20,30,5)
r4=np.random.randint(30,40,5)
df={"A": pd.Series(r1),"B": pd.Series(r2),"C": pd.Series(r3),"D": pd.Series(r4)}
data_frame=pd.DataFrame(df)
print(data_frame)
print(data_frame.plot.bar())

print(data_frame.plot(kind="hist"))
plt.show()