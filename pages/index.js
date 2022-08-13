import React, { useState, useEffect } from "react";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import "react-toastify/dist/ReactToastify.css";

import { Container, Row, Col, Form, Table, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";

import MusicList from "../public/music_list_610.json";

import SongDetail from "../components/SongDetail.component";

import imageLoader from "../utils/ImageLoader";

export default function Home() {
  //状态保存: 下拉选单，搜索框和回到顶部按钮
  const [filterSongLangGenreSelect, setFilterSongLangGenreSelect] =
    useState("");
  const [searchBox, setSearchBox] = useState("");
  const [showToTopButton, setToTopShowButton] = useState(false);

  useEffect(() => {
    //检测窗口滚动
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 600) {
        setToTopShowButton(true);
      } else {
        setToTopShowButton(false);
      }
    });
  }, []);

  //根据首字母和搜索框进行过滤
  const filteredSongList = MusicList.filter(
    (song) =>
      //首字母下拉选单
      (filterSongLangGenreSelect != ""
        ? filterSongLangGenreSelect == song.lang_genre
        : true) &&
      //搜索框搜歌名
      (song.song_name
        ?.toString()
        .toLowerCase()
        .includes(searchBox ? searchBox.toLowerCase() : "") ||
        //搜索框搜歌手
        song.artist
          ?.toString()
          .toLowerCase()
          .includes(searchBox ? searchBox.toLowerCase() : "") ||
        //搜索框搜曲风
        song.lang_genre
          ?.toString()
          .toLowerCase()
          .includes(searchBox ? searchBox.toLowerCase() : "") ||
        //搜索框搜备注
        song.remarks
          ?.toString()
          .toLowerCase()
          .includes(searchBox ? searchBox.toLowerCase() : ""))
  );

  //处理用户复制行为
  const handleClickToCopy = (song) => {
    copy("点歌 " + song.innerText);
    // navigator.clipboard.writeText("点歌 " + songName); //如支持iOS则可替换
    toast.success(`"` + song.innerText + `"成功复制到剪贴板!`);
  };

  //随便听听
  const handleRandomSong = () => {
    //定位歌单
    let parentSelector = document.querySelector(".songList");
    //随机生成序号
    let random = Math.floor(
      1 + Math.random() * parentSelector.childElementCount
    );
    let songName_ = document.querySelector(
      ".songList>tr:nth-child(" + random + ")"
    ).childNodes[0];
    if (songName_.id == "noSongInList") {
      toast.info("歌单已经没歌了!");
    } else {
      //如免费曲目
      copy("点歌 " + songName_.innerText);
      toast.success(`"` + songName_.innerText + `"成功复制到剪贴板!`);
    }
  };

  //滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className={styles.outerContainer}>
      <Container>
        <Head>
          <title>610的歌单</title>
          <meta
            name="keywords"
            content="清则子,清則子,B站,bilibili,哔哩哔哩,电台唱见,歌单"
          />
          <meta name="description" content="610清則子的歌单" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </Head>

        <section className={styles.main}>
          {/** 头像和标题 */}
          <Row>
            <Col>
              <div className={styles.centerFlexDiv}>
                <Image
                  loader={imageLoader}
                  className={styles.avatar}
                  src="qzz_avatar.webp"
                  alt="則宝的头像"
                  width={250}
                  height={250}
                />
              </div>
              <h1 className={"display-6 text-center pt-3 " + styles.grandTitle}>
                610的歌单
              </h1>
              <div className={styles.centerFlexDiv}>
                <Link href="https://live.bilibili.com/610" passHref>
                  <a target="_blank">
                    <Button className={"mt-3 " + styles.customRandomButton}>
                      <img
                        className={styles.biliIcon}
                        src="/bilibili_logo.png"
                        alt="bilibili logo"
                      />{" "}
                      前往則宝的直播间{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-chevron-right"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </Button>
                  </a>
                </Link>
              </div>
              <p className={"text-center pt-3 text-muted"}>
                轻点歌名可以复制哦
              </p>
            </Col>
          </Row>
          {/** 过滤器控件 */}
          <Row>
            <Col xs={12} md={{span: 6, order: 2}}>
              <Form.Control
                className={styles.filters}
                type="search"
                aria-label="搜索"
                placeholder="搜索"
                onChange={(e) => setSearchBox(e.target.value)}
              />
            </Col>
            <Col xs={6} md={{span: 3, order: 1}}>
              <Form.Select
                className={styles.filters}
                aria-label="过滤语言和曲风"
                onChange={(e) => setFilterSongLangGenreSelect(e.target.value)}
              >
                <option value="">所有语言和曲风</option>
                <option value="古风">国语-古风</option>
                <option value="流行">国语-流行</option>
                <option value="粤语">粤语</option>
                <option value="日语">日语</option>
              </Form.Select>
            </Col>
            <Col xs={6} md={{span: 3, order: 3}}>
              <div className="d-grid">
                <Button
                  className={styles.customRandomButton}
                  onClick={handleRandomSong}
                >
                  随便听听
                </Button>
              </div>
            </Col>
          </Row>
          {/** 歌单表格 */}
          <Row>
            <Col>
              <div className={styles.songListMarco}>
                <Container fluid>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th className={styles.noWrapForce}>歌名</th>
                        <th className={styles.noWrapForce}>歌手</th>
                        <th className={styles.noWrapForce}>语言和曲风</th>
                        <th className={styles.noWrapForce}>备注</th>
                      </tr>
                    </thead>
                    <tbody className="songList">
                      <SongDetail
                        filteredSongList={filteredSongList}
                        handleClickToCopy={handleClickToCopy}
                      />
                    </tbody>
                  </Table>
                </Container>
              </div>
            </Col>
          </Row>
        </section>
        {showToTopButton ? (
          <button
            onClick={scrollToTop}
            className={styles.backToTopBtn}
            title="返回顶部"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-up"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
              />
            </svg>
          </button>
        ) : (
          <div></div>
        )}
        <footer className={styles.footer}>
          Copyright © 2022 清則子@bilibili
        </footer>
      </Container>
    </div>
  );
}
