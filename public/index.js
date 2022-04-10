/* global axios */

axios.get("http://localhost:3000/songs").then(function (response) {
  var songs = response.data;
  console.log(songs);
});
