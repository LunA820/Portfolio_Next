import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.homePage}>
      <Head>
        <title>Luna Yang</title>
        <meta name="description" content="Luna Yang" />
        <link rel="icon" href="/half-moon.ico" />
        <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css' />
      </Head>


      <div className={styles.homePageContent}>
        <video className={styles.bgVideo} autoPlay loop muted src="home_video.mp4" />

        <div className="home_content">
          <div className="ori-responsive">
            <div className={styles.glitch}>
              <span className={styles.first_char}>L</span>unA_yAnG
            </div>
          </div>

          <div className={styles.subtitle}>Developer . Gamer . HongKonger</div>
        </div>
      </div>
    </div>
  )
}
