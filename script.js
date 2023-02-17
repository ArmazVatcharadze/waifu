const button = document.querySelector('.btn')
const imagesHere = document.querySelector('.singleimage')
const selectType = document.querySelector('#select1')
const selectType2 = document.querySelector('#select2')


selectType.addEventListener('change', function(){
    const selectType2 = document.querySelector('#select2')
    
    if(selectType.value == 'nsfw'){
        const childs = selectType2.querySelectorAll('option')
        childs.forEach(child => {
            child.style.display = 'none'
        })

            const options = [
            { value: 'waifu', text: 'Waifu' },
            { value: 'neko', text: 'Neko' },
            { value: 'trap', text: 'Trap' },
            { value: 'blowjob', text: 'Blowjob' },
            
            ];

            options.forEach(option => {
            const newOption = document.createElement('option');
            newOption.value = option.value;
            newOption.text = option.text;
            selectType2.appendChild(newOption);
            });
        
    }

})




button.addEventListener('click', function(){
    const selectType = document.querySelector('#select1')
    const selectType2 = document.querySelector('#select2')
    
    const imageDiv = document.querySelector('.images')

    for(let i = 0; i < 3; i++){
    fetch(`https://api.waifu.pics/${selectType.value}/${selectType2.value}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.url)
        const newImage = document.createElement('img')
        newImage.setAttribute('class', 'image')
        newImage.src = data.url
        imageDiv.appendChild(newImage)
        
    })
}

   
})

