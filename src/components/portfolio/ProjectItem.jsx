export default function ProjectItem({ data }) {
  const title = data.properties.Name.title[0]?.plain_text;
  const description = data.properties.Description.rich_text[0]?.plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const git = data.properties.Github.url;
  const youtube = data.properties.Youtube.url;
  const tags = data.properties.Tags.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;
  const demo = data.properties.Demo.url;
  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    var startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    var endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result;
  };

  return (
    <>
      <img className="project__img" alt="cover image" src={imgSrc} />
      <div className="project__title-container">
        <h1 className="project__title">{title}</h1>
        <p className="project__date">
          {start} ~ {end} ({calculatedPeriod(start, end)}일)
        </p>
      </div>
      <h3 className="project__description">{description}</h3>

      <div className="project__social">
        {git != null ? (
          <a href={git} className="project__social-icon" target="__blank">
            <i class="uil uil-github"></i>
          </a>
        ) : null}
        {youtube != null ? (
          <a href={youtube} className="project__social-icon" target="__blank">
            <i class="uil uil-youtube"></i>
          </a>
        ) : null}
        {demo != null ? (
          <a href={demo} className="project__social-icon" target="__blank">
            <i class="uil uil-desktop-alt"></i>
          </a>
        ) : null}
      </div>

      <div className="project__tag-container">
        {tags.map((tag) => (
          <span className="project__tag" key={tag.id}>
            {tag.name}
          </span>
        ))}
      </div>
      <div className="flex items-start mt-2 flex-wrap gap-1 content-start "></div>
      <a href="" className="project__button">
        더 보기
        <i className="bx bx-right-arrow-alt project__button-icon"></i>
      </a>
    </>
  );
}
