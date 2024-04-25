<script>
  export let data;
  const events = data?.allEvents || [];
  const tekst = data.homepage
</script>

<nav>Lorem ipsum dolor sit amet </nav>

<main>
  <header>
    <img src="../assets/Satsang-header.jpg" alt="">
    {@html tekst.introTekst}
  </header>

  <section class="info">
    <article>
      {@html tekst.ramayanSatsang}
    </article>
    <article>
      {@html tekst.hindiLes}
    </article>
  </section>

  <section class="events">
    <h1>Events</h1>
    <section class="event-body">
      {#each events as event}
        <article class="event-card">
          <div class="event-date" style="background-color: #{event.soort};">
            <h2>{event.datum}</h2>
          </div>

          <div class="event-info" style="border: 3px solid #{event.soort};">
            <h3>{event.titel}</h3>
            <p>{event.omschrijving}</p>
            <div class="event-info-btm">
              <p><b>Toegang</b><br>{event.toegang}</p>
              <p><b>Locatie</b><br>{event.locatie}</p>
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
      NL ABNB 028393739e38u3<br />
      KVK: 75495763
    </p>
    <section class="footer-links">
      <a href="https://www.instagram.com/stichtingsatsangnederland/"
        ><img src="../assets/instagram.svg" alt=""></a
      >
      <a href="mailto:satsangned@gmail.com"><img src="../assets/mail.svg" alt=""></a>
    </section>
  </section>
</footer>

<style>

@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&display=swap');

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
    background-color: #FDFDFD;
    font-family: "Baloo 2", sans-serif;

  }
  nav {
    background-color: orange;
    width: max-width;
    height: 5em;
  }
  header {
    background-color: brown;
    width: max-width;
    height: 30em;
  }
  .info {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: max-width;
    height: 30em;
  }

  .info > article{
    border: 3px solid #F08B67;
    border-radius: 8px;
    width: 30%;
    height: 25em;
    margin: auto;
    padding: 1em;
  }

  .events {
    width: 100%;
    height: fit-content;
  }
  .events > h1{
    margin: 1em 10em;
    font-size: 2.5vw;
  }
  .event-body {
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 40em;
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
    height: 15em;
  }
  .event-date {
    padding: 1em;
    border-radius: 8px;
    width: 30%;
    height: 12em;
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
    justify-content: space-evenly;
    padding: 0.5em;
    width: 80%;
    height: 12em;
    border: 1px solid #000;
    border-radius: 8px;
    word-wrap: break-word;
    white-space: inherit;
    word-break: break-word;
  }
.event-info-btm > p{
    width: 50%;
    height: 3.5em;
}
  .event-info-btm {
    display: flex;
    flex-direction: row;
  }
  img {
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
</style>
