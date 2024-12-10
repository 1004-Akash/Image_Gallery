import React from 'react';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');

  const handleDownload = () => {
    // This will log the download URL and check if it's correct
    console.log('Download URL:', image.largeImageURL);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #{tag}
          </span>
        ))}
      </div>

      {/* Download Button */}
      <div className="px-6 py-4">
        <a
          href={image.largeImageURL} // Direct link to the high-resolution image
          download={`image_${image.id}`} // Suggest a filename for the download
          className="inline-block bg-blue-500 text-white rounded-full px-4 py-2 text-sm font-semibold"
          onClick={handleDownload} // For debugging, log the URL on click
        >
          Full Screen
        </a>
      </div>
    </div>
  );
};

export default ImageCard;
