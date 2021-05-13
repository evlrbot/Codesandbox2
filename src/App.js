import "./styles.css";

/*
 * jQuery Event Listener and Selector
 */
$("#thebutton").on("click", function (event) {
  $(".flip-container").toggleClass("flip");
});

export default function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div class="alert alert-danger" role="alert">
        Danger! You are about to learn something! Check it out!
      </div>

      <div class="card" style={{ width: 100 + "%" }}>
        <h5 class="card-header">Card Header</h5>
        <div
          class="flip-container"
          ontouchstart="this.classList.toggle('hover');"
        >
          <div class="flipper">
            <div class="front">
              <img
                src="https://mma.prnewswire.com/media/610949/USCIYA_Logo.jpg?p=publish&w=400"
                class="card-img-top"
                alt="..."
              ></img>
            </div>
            <div class="back">
              <img src="https://ca-times.brightspotcdn.com/dims4/default/22e5613/2147483647/strip/true/crop/1548x871+0+0/resize/840x473!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F81%2F7f%2F9963576d6219c441c5d1e339361c%2Flat-sp-usc-full-logo-20140126"></img>
            </div>
          </div>
        </div>

        <div class="card-body">
          <a href="#" id="thebutton" class="btn btn-primary">
            Flip Me!
          </a>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}
