import { v4 as uuidv4 } from 'uuid';

function songs(){
    return [
        {
            name:"Making a Way",
            cover:"https://chillhop.com/wp-content/uploads/2022/07/e435a424c2a637c19d2241dea2399a4813d984b3-1024x1024.jpg",
            artist:"The BREED",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=41956",
            color:['#B13C28','#CC9D07'],
            id:uuidv4(),
            active:true 
        },
        {
            name:"no problem",
            cover:"https://chillhop.com/wp-content/uploads/2022/07/379d68b8db2ba38393c379a5cdf74ff8b255ae9a-1024x1024.jpg",
            artist:"Misha",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=42051",
            color:['#1D356A','#C7B8A2'],
            id:uuidv4(),
            active:false 
        },
        {
            name:"Indian Summer Rally",
            cover:"https://chillhop.com/wp-content/uploads/2022/03/c03fa64d8da9f1aa67db2a6b0c20cce262e9a976-1024x1024.jpg",
            artist:"oddfish",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=42241",
            color:['#97786D','#767B7E'],
            id:uuidv4(),
            active:false 
        },
        {
            name:"Hold me tight",
            cover:"https://chillhop.com/wp-content/uploads/2022/10/bde03d4549afe8464c919b89dcb02c2cea1ba676-1024x1024.jpg",
            artist:"Philanthrope",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=42445",
            color:['#125076','#C6B9A6'],
            id:uuidv4(),
            active:false 
        },
        {
            name:"Lost In Thoughts",
            cover:"https://chillhop.com/wp-content/uploads/2020/07/62f2a182e7ce538c2257c7e69791f4e0a6baa4d8-1024x1024.jpg",
            artist:"kenji",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=8890",
            color:['#33215B','#D5CFAB'],
            id:uuidv4(),
            active:false 
        },
        {
            name:"Monolith",
            cover:"https://chillhop.com/wp-content/uploads/2022/10/0fe2c45f6e5410339c1040b8d72a137294a95d95-1024x1024.jpg",
            artist:"Toonorth",
            audio:"https://mp3.chillhop.com/serve.php/?mp3=34328",
            color:['#AB8A00','#DDA801'],
            id:uuidv4(),
            active:false 
        },
    ]
}

export default songs;