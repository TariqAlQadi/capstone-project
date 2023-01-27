import SVGIcon from "../SVGIcon";

export default function CardDetails({ content, onToggle }) {
  //length of the description until the first "!"
  const lengthOfDescription = content?.snippet.description.indexOf("!") + 1;

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.notes.value);
    content.notes[0].textContent = event.target.notes.value;
  }

  return (
    <section>
      <h2>{content?.snippet.title}</h2>
      <h3>by {content?.snippet.videoOwnerChannelTitle}</h3>
      <iframe
        //temporary fix for iframe size
        width={(200 * 16) / 9}
        height={200}
        src={`https://www.youtube.com/embed/${content?.snippet.resourceId.videoId}`}
        title={content?.snippet.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <p>{content?.snippet.description.substring(0, lengthOfDescription)}</p>
      <button
        type="button"
        onClick={() => {
          onToggle(content?.id);
        }}
      >
        {content?.isLiked ? (
          <>
            <SVGIcon variant="heart" width="50px" />
          </>
        ) : (
          <>
            <SVGIcon variant="heartOutline" width="50px" />
          </>
        )}
      </button>
      <h3>Notes:</h3>

      <p>{content?.notes[0]}</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="notes">Notes</label>
        <input type="text" name="notes" id="notes"></input>
        <button type="submit">Change</button>
      </form>
    </section>
  );
}
