import { useDeferredValue } from "react";

import styles from "../styles/Home.module.css";

export default function SongDetail({ filteredSongList, handleClickToCopy }) {
  const deferredFilteredSongList = useDeferredValue(filteredSongList);

  return deferredFilteredSongList.length !== 0 ? (
    deferredFilteredSongList.map((song) => (
      <tr
        className={
          song.price == 100
            ? styles.songRow100sc
            : song.price == 30
            ? styles.songRow30sc
            : styles.songRow
        }
        key={song.index}
        onClick={(e) => {
          handleClickToCopy(
            e.target.parentNode.firstChild.nodeName === "TD"
              ? e.target.parentNode.childNodes[1]
              : e.target.parentNode.parentNode.childNodes[1]
          );
        }}
      >
        <td className={styles.tableIconTd}>
          {song.price == 100 ? (
            <img
              src="100sc.png"
              alt="付费"
              className={styles.tableIcons}
              title="付费曲目(100SC点唱)"
              style={{ marginLeft: "0.5rem" }}
            ></img>
          ) : song.price == 30 ? (
            <img
              src="30sc.png"
              alt="付费"
              className={styles.tableIcons}
              title="付费曲目(30SC点唱)"
              style={{ marginLeft: "0.5rem" }}
            ></img>
          ) : (
            <div></div>
          )}
        </td>
        <td
          className={styles.noWrapForceRemoveBg}
          style={{ fontWeight: "bold" }}
          id={
            song.price == 100
              ? `hundredSC ${song.index}`
              : song.price == 30
              ? `thirtySC ${song.index}`
              : song.index
          }
        >
          {song.song_name}
        </td>
        <td className={styles.noWrapForceRemoveBg}>{song.artist}</td>
        <td className={styles.noWrapForceRemoveBg}>{song.lang_genre}</td>
        <td className={styles.noWrapForceRemoveBg}>
          {song.difficulty == "简单" ? (
            <span className={styles.easySong}>{song.difficulty}</span>
          ) : song.difficulty == "中等" ? (
            <span className={styles.mediumSong}>{song.difficulty}</span>
          ) : song.difficulty == "困难" ? (
            <span className={styles.hardSong}>{song.difficulty}</span>
          ) : song.difficulty == "超级难" ? (
            <span className={styles.extremeSong}>{song.difficulty}</span>
          ) : (
            <span>{song.difficulty}</span>
          )}
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td
        className={"display-6 text-center " + styles.noWrapForceRemoveBg}
        colSpan="5"
        id="noSongInList"
      >
        歌单里没有诶~隐藏歌单碰碰运气!
      </td>
    </tr>
  );
}
