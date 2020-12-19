/**
 * Below is a list of tags that was given to you.
 * For this list, add an element into the DOM with the name of the tag and the color as the background color.
 * You can append the elements to the body element in the html.
 * 
 * The index.html file already includes this file. You can see if it works by looking at that file in a browser.
 */

 const tags = [
    {
      "_id": "5fd1f9904d2d4a6c5dee56b6",
      "name": "Lorem",
      "color": "yellow"
    },
    {
      "_id": "5fd1f990ddd945ac63fce0d2",
      "name": "elit",
      "color": "blue"
    },
    {
      "_id": "5fd1f990df25e1107ea8ce5f",
      "name": "officia",
      "color": "blue"
    },
    {
      "_id": "5fd1f990ae9607d58c2b0f16",
      "name": "eu",
      "color": "red"
    },
    {
      "_id": "5fd1f990a9aeac3a0911f07c",
      "name": "voluptate",
      "color": "red"
    },
    {
      "_id": "5fd1f990d147ad3452ce6699",
      "name": "ad",
      "color": "red"
    },
    {
      "_id": "5fd1f99020c5b7055e31ae1c",
      "name": "quis",
      "color": "blue"
    }
  ];

tags.forEach(tag => {
  const newTag = document.createElement(tag.name);
  newTag.setAttribute("id", tag._id);
  newTag.style.backgroundColor = tag.color;
  newTag.style.width = "100px";
  newTag.style.height = "100px";
  newTag.style.display = "inline-block";
  document.body.appendChild(newTag);
});

