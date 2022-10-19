import json
import pandas as pd

song_df = pd.read_excel('./music_list_610.xlsx')
song_df = song_df.astype(object).where(pd.notnull(song_df), None)
song_list = []

for index, row in song_df.iterrows():
    # print(index, row[0], row[1])
    song_data = {"index": index, "song_name": row[0], "artist": row[1], "lang_genre": row[2], "remarks": row[3], "price": row[4]}
    song_list.append(song_data)
    

with open("./public/music_list_610.json", 'w') as file:
    file.write(json.dumps(song_list))
