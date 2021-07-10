import matplotlib as mtl
import matplotlib.pyplot as plt
import seaborn as sns

fmri=sns.load_dataset("fmri")
fmri.head(4)

sns.relplot(x="timepoint",y="signal",data=fmri,hue="region",style="event",size="subject")

sns.relplot(x="timepoint",y="signal",data=fmri,color="green",hue="region",kind="line",style="event")

print(sns.lineplot(x="timepoint",y="signal",data=fmri,color="blue",style="event"))

sns.catplot(x="region",y="timepoint",data=fmri,color="orange",dodge=True)

sns.catplot(x="event",y="signal",kind="box",data=fmri,dodge=True)

sns.catplot(x="region",y="timepoint",kind="box",data=fmri,color="green",dodge=False)

sns.catplot(x="signal",y="event",kind="box",data=fmri,color="blue",dodge=False)


sns.boxplot(x="timepoint", y="signal", hue="region", data=fmri)
plt.show()