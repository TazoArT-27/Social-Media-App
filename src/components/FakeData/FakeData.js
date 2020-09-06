import React from 'react';
const FakeData = [
    {
    "id": 1,
    "photo": "https://randomuser.me/api/portraits/men/75.jpg",
    "name": "Leanne Graham",
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
   
    },
    {
    "id": 2,
    "name": "Tony Stark",
    "photo": "https://randomuser.me/api/portraits/men/76.jpg",
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"

    },
    {
    "id": 3,
    "name": "Peter Parker",
    "photo": "https://randomuser.me/api/portraits/men/77.jpg",
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"

    },
    {
    "id": 4,
    "name": "Bruce Wayne",
    "photo": "https://randomuser.me/api/portraits/men/78.jpg",
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
    {
    "id": 5,
    "name": "Henry Cavil",
    "photo": "https://randomuser.me/api/portraits/men/79.jpg",
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
    "id": 6,
    "name": "Peter Pots",
    "photo": "https://randomuser.me/api/portraits/men/71.jpg",
    "title": "dolorem eum magni eos aperiam quia",
    "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
    "id": 7,
    "name": "Padric Chan",
    "photo": "https://randomuser.me/api/portraits/men/72.jpg",
    "title": "magnam facilis autem",
    "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
    "id": 8,
    "name": "Clementina DuBuque",
    "photo": "https://randomuser.me/api/portraits/men/73.jpg",
    "title": "dolorem dolore est ipsam",
    "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
    "id": 9,
    "name": "Glenna Reichert",
    "photo": "https://randomuser.me/api/portraits/men/74.jpg",
    "title": "nesciunt iure omnis dolorem tempora et accusantium",
    "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    },
    {
    "id": 10,
    "name": "Nicholas Runolfsdottir",
    "photo": "https://randomuser.me/api/portraits/men/70.jpg",
    "title": "optio molestias id quia eum",
    "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    },
    {
    "id": 11,
    "name": "Kurtis Weissnat",
    "photo": "https://randomuser.me/api/portraits/men/2.jpg",
    "title": "et ea vero quia laudantium autem",
    "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
    
    },
    {
    "id": 12,
    "name": "Mrs. Dennis Schulist",
    "photo": "https://randomuser.me/api/portraits/men/6.jpg",
    "title": "in quibusdam tempore odit est dolorem",
    "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"

    },
    {
    "id": 13,
    "name": "Chelsey Dietrich",
    "photo": "https://randomuser.me/api/portraits/men/7.jpg",
    "title": "dolorum ut in voluptas mollitia et saepe quo animi",
    "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"

    },
    {
    "id": 14,
    "name": "Patricia Lebsack",
    "photo": "https://randomuser.me/api/portraits/men/8.jpg",
    "title": "voluptatem eligendi optio",
    "body": "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
    },
    {
    "id": 15,
    "name": "Clementine Bauch",
    "photo": "https://randomuser.me/api/portraits/men/9.jpg",
    "title": "eveniet quod temporibus",
    "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
    },
    {
    "id": 16,
    "name": "Ervin Howell",
    "photo": "https://randomuser.me/api/portraits/men/10.jpg",
    "title": "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
    "body": "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
    }
    ]

    export default FakeData;