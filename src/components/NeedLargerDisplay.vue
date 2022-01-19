<template>
  <main id="pop-up">
      <h2>Joshua Paul Jacob</h2>
      <div id="email">
        <a
          href="mailto:contact@joshuapjacob.com?subject=Hello"
          target="_blank"
          title="Email"
          >contact @ joshuapjacob.com</a
        >
      </div>
      <div id="social">
        <a
          href="https://www.instagram.com/joshuapjacob"
          target="_blank"
          title="Instagram "
          ><img src="@/assets/icons/instagram-brands.svg"
        /></a>
        <a
          href="https://www.linkedin.com/in/joshuapjacob/"
          target="_blank"
          title="LinkedIn "
          ><img src="@/assets/icons/linkedin-brands.svg"
        /></a>
        <a href="https://t.me/joshuapjacob" target="_blank" title="Telegram "
          ><img src="@/assets/icons/telegram-plane-brands.svg"
        /></a>
        <a
          href="https://github.com/joshuapjacob/"
          target="_blank"
          title="GitHub "
          ><img src="@/assets/icons/github-brands.svg"
        /></a>
        <a
          href="https://www.goodreads.com/user/show/57891424-joshua-paul-jacob"
          target="_blank"
          title="Goodreads "
          ><img src="@/assets/icons/goodreads-brands.svg"
        /></a>
      </div>
      <p>Sorry, this website is not designed for small screen sizes. View more by using a machine with a larger display resolution (preferably a desktop/laptop).</p>
  </main>
</template>


<style scoped>
#pop-up {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 50;
  padding: 10%;
  text-align: center;
  background-color: black;
}

#email {
  padding-top: 10px;
  font-size: 18px;
}

#social {
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

#social img {
  filter: invert(50%);
  width: 50px;
  padding: 10px;
}

#social img:hover {
  filter: invert(85%);
}

p {
  padding: 10px;
  color: gray;
}

@media only screen and (min-width: 800px) and (min-height: 600px){
  #pop-up {
    visibility: hidden;
    clear: both;
    display: none;
  }
}
</style>