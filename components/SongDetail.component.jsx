import styles from "../styles/Home.module.css";

export default function SongDetail({ filteredSongList, handleClickToCopy }) {
  return filteredSongList.length !== 0 ? (
    filteredSongList.map((song) => (
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
            ></img>
          ) : song.price == 30 ? (
            <img
              src="30sc.png"
              alt="付费"
              className={styles.tableIcons}
              title="付费曲目(30SC点唱)"
            ></img>
          ) : (
            <div></div>
          )}
        </td>
        <td
          className={styles.noWrapForce}
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
        <td className={styles.noWrapForce}>{song.artist}</td>
        <td className={styles.noWrapForce}>{song.lang_genre}</td>
        <td className={styles.noWrapForce}>{song.remarks}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td className="display-6 text-center" colSpan="4" id="noSongInList">
        歌单里没有诶~隐藏歌单碰碰运气!
      </td>
    </tr>
  );
}
