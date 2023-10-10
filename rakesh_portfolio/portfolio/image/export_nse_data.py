import yfinance as yf
import numpy as np
import pandas as pd
from google.colab import files

ticker_symbol = '^NSEI'

nse_data = yf.download(ticker_symbol, start='2023-07-24', interval='15m')

# Specify the Excel file name
csv_file_name = 'nse_data.csv'

# Export the data to an Excel file
nse_data.to_csv (csv_file_name)

files.download('nse_data.csv')