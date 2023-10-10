import pandas as pd
import numpy as np
from datetime import datetime


df = pd.read_csv(r"C:\Users\RAKESH ROSHAN RAY\Downloads\nse_data (1).csv")


df[['Date', 'Time']] = df['Datetime'].str.split(" ", expand = True)

Stamp_ts = '09:15:00'
Stamp_ts1 = '13:45:00'
Stamp_ts2 = '15:00:00'

df = df[(df['Time'] == Stamp_ts2) | (df['Time'] == Stamp_ts) | (df['Time'] == Stamp_ts1)]

df = df.drop(["Datetime","Open","Adj Close","Volume","Close"],axis=1)

df.to_excel('output.xlsx', index=False)


