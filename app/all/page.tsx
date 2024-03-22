import { getAllPictures } from "../../api/contentful";


const Page = async () => {
  const pictures = await getAllPictures();

  return (
    <div>
      <h1>My Pictures</h1>
      <div>
        {pictures.map((picture) => (
          <div key={picture.title}>
            <h2>{picture.title}</h2>
            <img src={picture.imageUrl} alt={picture.title} />
            <p>{picture.description}</p>
            <div>
              {picture.tags?.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;