import pandas as pd

def create_dataframe():
    sheet_id = "1WRAuF_5hYF-zgKfIk20hiv2RDZA7y0Vq4kCm_kcY9zg"
    df = pd.read_csv(f"https://docs.google.com/spreadsheets/d/{sheet_id}/export?format=csv")