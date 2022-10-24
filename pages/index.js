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
    //复制到剪贴板并发送Toast
    if (song.id.includes("thirtySC")) {
      //30sc付费曲目
      copy("点歌 " + song.innerText);
      // navigator.clipboard.writeText("点歌 " + songName); //如支持iOS则可替换
      //复制成功反馈
      toast.success(
        `付费曲目"` + song.innerText + `"成功复制到剪贴板!记得发30的SC点歌哟~`
      );
    } else if (song.id.includes("hundredSC")) {
      //100sc付费曲目
      copy("点歌 " + song.innerText);
      // navigator.clipboard.writeText("点歌 " + songName); //如支持iOS则可替换
      //复制成功反馈
      toast.success(
        `付费曲目"` + song.innerText + `"成功复制到剪贴板!记得发100的SC点歌哟~`
      );
    } else {
      //免费曲目
      copy("点歌 " + song.innerText);
      // navigator.clipboard.writeText("点歌 " + songName); //如支持iOS则可替换
      toast.success(`"` + song.innerText + `"成功复制到剪贴板!`);
    }
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
    ).childNodes[1];

    if (!songName_) {
      toast.info("歌单已经没歌了!");
    } else if (songName_.id.includes("thirtySC")) {
      //如30sc付费曲目
      copy("点歌 " + songName_.innerText);
      toast.success(
        `付费曲目"` +
          songName_.innerText +
          `"成功复制到剪贴板!记得发30的SC点歌哟~`
      );
    } else if (songName_.id.includes("hundredSC")) {
      //如100sc付费曲目
      copy("点歌 " + songName_.innerText);
      toast.success(
        `付费曲目"` +
          songName_.innerText +
          `"成功复制到剪贴板!记得发100的SC点歌哟~`
      );
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

          <meta name="theme-color" content="#ffffff" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="apple-mobile-web-app-title" content="610的歌单" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="msapplication-config" content="/a2hs/browserconfig.xml" />
          <meta name="msapplication-tap-highlight" content="no" />
          <link rel="shortcut icon" href="/favicon.ico" />

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/a2hs/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/a2hs/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/a2hs/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/a2hs/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/a2hs/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/a2hs/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/a2hs/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/a2hs/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/a2hs/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/a2hs/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/a2hs/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/a2hs/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/a2hs/favicon-16x16.png"
          />
          <link rel="manifest" href="/a2hs/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="/a2hs/ms-icon-144x144.png"
          />

          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            href="splash_screens/12.9__iPad_Pro_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            href="splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            href="splash_screens/10.9__iPad_Air_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            href="splash_screens/10.5__iPad_Air_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            href="splash_screens/10.2__iPad_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            href="splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            href="splash_screens/iPhone_14_Pro_Max__iPhone_14_Max__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            href="splash_screens/iPhone_14_Pro__iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            href="splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            href="splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            href="splash_screens/iPhone_11__iPhone_XR_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            href="splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            href="splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            href="splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            href="splash_screens/12.9__iPad_Pro_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            href="splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            href="splash_screens/10.9__iPad_Air_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            href="splash_screens/10.5__iPad_Air_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            href="splash_screens/10.2__iPad_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            href="splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            href="splash_screens/iPhone_14_Pro_Max__iPhone_14_Max__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            href="splash_screens/iPhone_14_Pro__iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            href="splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            href="splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            href="splash_screens/iPhone_11__iPhone_XR_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            href="splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            href="splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            href="splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png"
          />
        </Head>

        <section className={styles.main}>
          {/** 头像和标题 */}
          <Row>
            <Col>
              <div
                className={styles.centerFlexDiv}
                style={{ paddingTop: "2rem" }}
              >
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
            <Col xs={12} md={{ span: 6, order: 2 }}>
              <Form.Control
                className={styles.filters}
                type="search"
                aria-label="搜索"
                placeholder="搜索"
                onChange={(e) => setSearchBox(e.target.value)}
              />
            </Col>
            <Col xs={6} md={{ span: 3, order: 1 }}>
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
            <Col xs={6} md={{ span: 3, order: 3 }}>
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
                        <th className={styles.noWrapForce}></th>
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
