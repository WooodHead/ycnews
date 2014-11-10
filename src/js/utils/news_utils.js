/**
 * Return the source (website) for a given URL
 * @param  {string} url - the full URL
 * @return {string} the website name
 */
function getSource(url) {
  return url.replace(/^https?:\/\/(?:www\.)?([^\/]+)(?=($|\/)).*/, '$1');
}
