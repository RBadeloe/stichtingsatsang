<script>
  import { formatDate } from "$lib/utils/date.js";
  export let data;
  const events = data?.allEvents || [];
  const tekst = data.homepage;
</script>

<main>
  <header>
    <img src="../assets/SSNLogo.jpg" alt="" />
  </header>

  <section class="header-text">
    {@html tekst.introTekst}
  </section>
  <section class="info">
    <article>
      {@html tekst.ramayanSatsang}
    </article>
    <article>
      {@html tekst.hindiLes}
    </article>
    <article>
      {@html tekst.seminars}
    </article>
  </section>

  <section class="events">
    <h1>Events</h1>
    <section class="event-body">
      {#each events as event}
        <article class="event-card">
          <div class="event-date" style="background-color: #{event.soort};">
            <h2>{formatDate(event.datum)}</h2>
          </div>

          <div class="event-info" style="border: 3px solid #{event.soort};">
            <h3>{event.titel}</h3>
            <p>{event.omschrijving}</p>
            <div class="event-info-btm">
              <p><b>Toegang</b><br />{event.toegang}</p>
              <p><b>Locatie</b><br />{event.locatie}</p>
            </div>
          </div>
        </article>
      {/each}
    </section>
  </section>
</main>

<footer>
  <img src="../assets/Satsang_footer.jpg" alt="" />
  <section class="footer-info">
    <p>
      NL69 ABNA 0118 7452 63<br />
      KVK: 88145174 <br />
      TEL: +31647070470
    </p>
    <section class="footer-links">
      <a href="https://www.instagram.com/stichtingsatsangnederland/"
        ><img src="../assets/instagram.svg" alt="" /></a
      >
      <!-- <a href="https://facebook.com/stichtingsatsangnederland/"
        ><img src="../assets/facebook.svg" alt="" /></a
      > -->
      <a href="mailto:satsangned@gmail.com"
        ><img src="../assets/mail.svg" alt="" /></a
      >
    </section>
  </section>
</footer>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&display=swap");

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :global(:root, body),
  main {
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #fdfdfd;
    font-family: "Baloo 2", sans-serif;
    scroll-behavior: smooth;
  }

  .header-text {
    margin: 5em auto;

    width: 80%;
    height: 10em;
  }

  header {
    background-color: brown;
    width: 100%;
    height: 40em;
    background-image: url(/static/assets/Satsang-header.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    padding: 5em;
  }

  header > img {
    display: flex;
    justify-content: center;
    margin: auto;

    width: 20em;
    height: 20em;

    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
  }
  .info {
    display: flex;
    flex-direction: row;
    padding: 5em;
    display: flex;
    align-items: stretch;
    justify-content: space-around;
    background-image: url(/static/assets/background-info.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .info > article {
    border: 3px solid #f08b67;
    background-color:#fdfdfdbb ;
    border-radius: 8px;
    width: 30%;
    margin: 0 0.5em;
    padding: 0.5em;
    min-height: 100%;

  }

  .events {
    width: 100%;
    height: fit-content;
  }
  .events > h1 {
    margin: 1em 10em;
    font-size: 2.5vw;
  }
  .event-body {
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 45em;
    margin: auto;
    margin-bottom: 6em;
    padding: 1em;
    overflow: scroll;
    overflow-x: hidden;
  }
  .event-card {
    display: flex;
    flex-direction: row;
    margin: 1em;
    padding: 1em;
    gap: 2em;
    width: 90%;
    height: 18em;
  }
  .event-date {
    padding: 1em;
    border-radius: 8px;
    width: 30%;
    height: initial;
  }
  .event-date > h2 {
    width: 100%;
    padding: 1px;
    height: 5em;
    text-align: start;
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: break-word;
  }
  .event-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    height: fit-content;
    padding: 1em;
    min-height: 100%;
    border: 1px solid #000;
    border-radius: 8px;
    word-wrap: break-word;
    /* white-space: inherit; */
    /* word-break: break-word; */
  }
  .event-info-btm > p {
    width: 50%;
    height: 5em;
  }
  .event-info-btm {
    display: flex;
    flex-direction: row;
    width: 102%;
  }
  footer > img {
    object-fit: cover;
    width: 100%;
    height: auto;
    display: flex;
  }

  .footer-info {
    background: rgb(255, 122, 40);
    background: -moz-linear-gradient(
      180deg,
      rgba(255, 122, 40, 1) 0%,
      rgba(248, 157, 95, 1) 40%
    );
    background: -webkit-linear-gradient(
      180deg,
      rgba(255, 122, 40, 1) 0%,
      rgba(248, 157, 95, 1) 50%
    );
    background: linear-gradient(
      180deg,
      rgba(255, 122, 40, 1) 0%,
      rgba(248, 157, 95, 1) 50%
    );
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: max-width;
    height: 10em;
  }
  .footer-links {
    display: flex;
    flex-direction: row;
    width: 10em;
    justify-content: space-evenly;
  }
  footer {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
  /* mobile */
  @media only screen and (max-width: 1024px),
    (min-device-width: 768px) and (max-device-width: 1115px) {
    .header-text {
      margin: 4vw auto;
      width: 90%;
      height: fit-content;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 100%;
      height: fit-content;
    }

    .info > article {
      border: 3px solid #f08b67;
      border-radius: 8px;
      width: 80%;
      height: fit-content;
      margin: 2em auto;
      padding: 1em;
    }
    .events > h1 {
      margin: 24vh 13vh auto;
      text-align: left;
      width: 90%;
      height: 5vw;
      font-size: 2.5em;
    }

    .event-body {
      width: 90%;
      height: fit-content;
    }

    .event-card {
      flex-direction: column;
      height: fit-content;
    }

    .event-date {
      width: 100%;
      height: 6em;
      padding: 0.5em;
    }

    .event-info {
      width: 100%;
      height: fit-content;
    padding: 0.5em;
    min-height: 100%
    }

    .event-info-btm > p {
      width: 80%;
      height: 3.5em;
    }
    .event-info-btm {
      display: flex;
      flex-direction: column;
      height: fit-content;
    }
  }

  @media only screen and (min-width: 700px),
    (min-device-width: 768px) and (max-device-width: 1115px) {
    .header-text {
      margin: 5vw auto;
      width: 90%;
      height: 20em;
    }
  }
</style>
