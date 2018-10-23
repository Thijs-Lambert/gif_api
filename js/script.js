{

  const checkStatus = response => {
    if (!response.ok) throw Error(response.statusText);
    return response;
  };

  const parse = data => {
    const gif = data[Math.floor(Math.random() * data.length)];
    const $img = document.querySelector(`.result`);
    const $slug = document.querySelector(`.slug`);
    $img.src =  gif.images.original.url;
    $slug.textContent = gif.slug;
  };

  const search = value => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${value}&api_key=dc6zaTOxFJmzC`;
	
    fetch(url)
			.then(checkStatus)
			.then(result => result.json())
			.then(jsonData => parse(jsonData.data))
			.catch(reason => console.log(reason));

  };

  const onKeyUp = e => {
    if(e.keyCode === 13){
      const $input = e.currentTarget;
      search($input.value);
    }
  };

  const init = () => {
    document.querySelector(`.search`).addEventListener(`keyup`, onKeyUp);
  };

  init();
}