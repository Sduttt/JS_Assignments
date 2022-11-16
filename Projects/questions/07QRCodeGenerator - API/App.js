
let submit = document.getElementById("submit")
submit.addEventListener("click", () => {
    let input = document.getElementById("input").value;
    
    // const options = {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json',
    //         'X-RapidAPI-Key': '002e2fbbfcmsh84961ce4fd631f8p1a8819jsn576001ea759c',
    //         'X-RapidAPI-Host': 'qrcode3.p.rapidapi.com'
    //     },
    //     body: '{"data":"${input}","image":{"uri":"icon://appstore","modules":true},"style":{"module":{"color":"black","shape":"default"},"inner_eye":{"shape":"default"},"outer_eye":{"shape":"default"},"background":{}},"size":{"width":200,"quiet_zone":4,"error_correction":"M"},"output":{"filename":"qrcode","format":"png"}}'
    // };
    
    // fetch('https://qrcode3.p.rapidapi.com/qrcode/text', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));

    const options = {
        method: 'POST',
        headers: {
          Accept: 'image/svg+xml',
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': '002e2fbbfcmsh84961ce4fd631f8p1a8819jsn576001ea759c'
        },
        body: JSON.stringify({
          data: input,
          image: {uri: 'icon://appstore', modules: true},
          style: {
            module: {color: 'black', shape: 'default'},
            inner_eye: {shape: 'default'},
            outer_eye: {shape: 'default'}
          },
          size: {width: 200, quiet_zone: 4, error_correction: 'M'},
          output: {filename: 'qrcode', format: 'png'}
        })
      };
      
      fetch('https://qrcode3.p.rapidapi.com/qrcode/text', options)
      .then(async response => {
        let blob = await response.blob();
        let img = document.getElementById("img");
        img.src = URL.createObjectURL(blob);
    })
        .catch(err => console.error(err));
})
