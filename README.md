# Hobbies for Dummies

## API docs

### Endpoints

- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/googleLogin`
- `GET /api/pixabay`
- `GET /api/jikan`
- `GET /api/jikan/:id`
- `GET /api/recipe`

### Auth

#### **Login**

Logs user into the app.

URL - `/auth/login`

Method - `POST`

URL Params

None

Data Params

* **Required**

`username=[string]`

`password=[string]`

Success Response

Code - `200`

Content

```json
{
    "access_token": "JWT String"
}
```

* **Error Response**

Code - `401 Unauthenticated`

Content `{ error : "The username or password you input is incorrect." }`

#### **Login**

Logs user into the app through Google's OAuth.

URL - `/auth/googleLogin`

Method - `POST`

Request Headers

```JS
{
    google_token: "Google token string"
}
```

URL Params

None

Data Params

None

Success Response

Code - `200`

Content

```json
{
    "access_token": "JWT String"
}
```

* **Error Response**

Code - `401 Unauthenticated`

Content `{ error : "The username or password you input is incorrect." }`

#### **Register**

Registers user into a database

URL - `/auth/register`

Method - `POST`

URL Params

None

Data Params

* **Required**

`username=[string]`

`email=[string]`

`password=[string]`

Success Response

Code - `201`

Content

```json
{
    "id": [id],
    "username": "[username]",
    "email": "[email]"
}
```

* **Error Response**

Code - `400 BAD REQUEST`

Content `{ error : [Error(s) will depend on user input] }`

<!--  -->

### 3rd Party API Calls

### **Pixabay API**

Fetches photos data through Pixabay API.

URL - `/api/pixabay`

Method - `GET`

URL Params

None

* **Data Params**

Required

```markdown
key=[API key string]
```

Optional

None

* **Success Response**

Code - `200`

Content

```json
[
    {
        "id": 5525025,
        "pageURL": "https://pixabay.com/photos/car-vehicle-chase-speed-blur-5525025/",
        "type": "photo",
        "tags": "car, vehicle, chase",
        "previewURL": "https://cdn.pixabay.com/photo/2020/08/28/16/47/car-5525025_150.jpg",
        "previewWidth": 150,
        "previewHeight": 100,
        "webformatURL": "https://pixabay.com/get/53e5d7464a50a914f1dc846096293f7f133cdde5574c704c7c2679d49448c650_640.jpg",
        "webformatWidth": 640,
        "webformatHeight": 425,
        "largeImageURL": "https://pixabay.com/get/53e5d7464a50a914f6da8c7dda7936761439dde653556c48702672d6974ec05bb0_1280.jpg",
        "imageWidth": 4213,
        "imageHeight": 2799,
        "imageSize": 2643761,
        "views": 19836,
        "downloads": 19018,
        "favorites": 41,
        "likes": 76,
        "comments": 70,
        "user_id": 13452116,
        "user": "Syaibatulhamdi",
        "userImageURL": "https://cdn.pixabay.com/user/2020/08/19/09-44-13-930_250x250.png"
    }
]
```

* **Error Response**

Code - `400 Bad Request`

Content `{ error : "Sorry, but bad requests do happen." }`

***

#### **Jikan API**

##### Get All

Fetches data from MyAnimeList through Jikan API. Type parameter is limited to just `Anime` and `Manga`.

URL - `/api/jikan/:type`

Method - `GET`

URL Params

```markdown
type=[anime|manga]
```

Queries

Required

```markdown
name=[query name]
```

Optional

None

* **Success Response**

Code - `200`

Content

```json
[
    {
        "mal_id": 20,
        "url": "https://myanimelist.net/anime/20/Naruto",
        "image_url": "https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6",
        "title": "Naruto",
        "airing": false,
        "synopsis": "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi'...",
        "type": "TV",
        "episodes": 220,
        "score": 7.88,
        "start_date": "2002-10-03T00:00:00+00:00",
        "end_date": "2007-02-08T00:00:00+00:00",
        "members": 1540066,
        "rated": "PG-13"
    }
]
```

* **Error Response**

Code - `400 Bad Request`

Content `{ error : "Sorry, but bad requests do happen." }`

***

##### Get One

Fetches data from MyAnimeList by its ID, through Jikan API. Type parameter is limited to just `Anime` and `Manga`.

URL - `/api/jikan/:type/:mal_id`

Method - `GET`

URL Params

```markdown
type=[anime|manga]
mal_id=[integer]
```

* **Success Response**

Code - `200`

Content

```json
{
    "request_hash": "request:anime:e35e3e0b82c976e7a004df305f6a699a48fed03f",
    "request_cached": true,
    "request_cache_expiry": 58787,
    "mal_id": 20,
    "url": "https://myanimelist.net/anime/20/Naruto",
    "image_url": "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
    "trailer_url": "https://www.youtube.com/embed/j2hiC9BmJlQ?enablejsapi=1&wmode=opaque&autoplay=1",
    "title": "Naruto",
    "title_english": "Naruto",
    "title_japanese": "ナルト",
    "title_synonyms": [
        "NARUTO"
    ],
    "type": "TV",
    "source": "Manga",
    "episodes": 220,
    "status": "Finished Airing",
    "airing": false,
    "aired": {
        "from": "2002-10-03T00:00:00+00:00",
        "to": "2007-02-08T00:00:00+00:00",
        "prop": {
            "from": {
                "day": 3,
                "month": 10,
                "year": 2002
            },
            "to": {
                "day": 8,
                "month": 2,
                "year": 2007
            }
        },
        "string": "Oct 3, 2002 to Feb 8, 2007"
    },
    "duration": "23 min per ep",
    "rating": "PG-13 - Teens 13 or older",
    "score": 7.88,
    "scored_by": 1004082,
    "rank": 686,
    "popularity": 9,
    "members": 1545592,
    "favorites": 55630,
    "synopsis": "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto. Now, Naruto is a hyperactive and knuckle-headed ninja still living in Konohagakure. Shunned because of the Kyuubi inside him, Naruto struggles to find his place in the village, while his burning desire to become the Hokage of Konohagakure leads him not only to some great new friends, but also some deadly foes. [Written by MAL Rewrite]",
    "background": null,
    "premiered": "Fall 2002",
    "broadcast": "Thursdays at 19:30 (JST)",
    "related": {
        "Adaptation": [
            {
                "mal_id": 11,
                "type": "manga",
                "name": "Naruto",
                "url": "https://myanimelist.net/manga/11/Naruto"
            }
        ],
        "Side story": [
            {
                "mal_id": 442,
                "type": "anime",
                "name": "Naruto Movie 1: Dai Katsugeki!! Yuki Hime Shinobu Houjou Dattebayo!",
                "url": "https://myanimelist.net/anime/442/Naruto_Movie_1__Dai_Katsugeki_Yuki_Hime_Shinobu_Houjou_Dattebayo"
            },
            {
                "mal_id": 594,
                "type": "anime",
                "name": "Naruto: Takigakure no Shitou - Ore ga Eiyuu Dattebayo!",
                "url": "https://myanimelist.net/anime/594/Naruto__Takigakure_no_Shitou_-_Ore_ga_Eiyuu_Dattebayo"
            },
            {
                "mal_id": 761,
                "type": "anime",
                "name": "Naruto: Akaki Yotsuba no Clover wo Sagase",
                "url": "https://myanimelist.net/anime/761/Naruto__Akaki_Yotsuba_no_Clover_wo_Sagase"
            },
            {
                "mal_id": 936,
                "type": "anime",
                "name": "Naruto Movie 2: Dai Gekitotsu! Maboroshi no Chiteiiseki Dattebayo!",
                "url": "https://myanimelist.net/anime/936/Naruto_Movie_2__Dai_Gekitotsu_Maboroshi_no_Chiteiiseki_Dattebayo"
            },
            {
                "mal_id": 1074,
                "type": "anime",
                "name": "Naruto Narutimate Hero 3: Tsuini Gekitotsu! Jounin vs. Genin!! Musabetsu Dairansen Taikai Kaisai!!",
                "url": "https://myanimelist.net/anime/1074/Naruto_Narutimate_Hero_3__Tsuini_Gekitotsu_Jounin_vs_Genin_Musabetsu_Dairansen_Taikai_Kaisai"
            },
            {
                "mal_id": 2144,
                "type": "anime",
                "name": "Naruto Movie 3: Dai Koufun! Mikazuki Jima no Animaru Panikku Dattebayo!",
                "url": "https://myanimelist.net/anime/2144/Naruto_Movie_3__Dai_Koufun_Mikazuki_Jima_no_Animaru_Panikku_Dattebayo"
            },
            {
                "mal_id": 7367,
                "type": "anime",
                "name": "Naruto: The Cross Roads",
                "url": "https://myanimelist.net/anime/7367/Naruto__The_Cross_Roads"
            }
        ],
        "Sequel": [
            {
                "mal_id": 1735,
                "type": "anime",
                "name": "Naruto: Shippuuden",
                "url": "https://myanimelist.net/anime/1735/Naruto__Shippuuden"
            }
        ]
    },
    "producers": [
        {
            "mal_id": 16,
            "type": "anime",
            "name": "TV Tokyo",
            "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
        },
        {
            "mal_id": 17,
            "type": "anime",
            "name": "Aniplex",
            "url": "https://myanimelist.net/anime/producer/17/Aniplex"
        },
        {
            "mal_id": 1365,
            "type": "anime",
            "name": "Shueisha",
            "url": "https://myanimelist.net/anime/producer/1365/Shueisha"
        }
    ],
    "licensors": [
        {
            "mal_id": 119,
            "type": "anime",
            "name": "Viz Media",
            "url": "https://myanimelist.net/anime/producer/119/Viz_Media"
        }
    ],
    "studios": [
        {
            "mal_id": 1,
            "type": "anime",
            "name": "Studio Pierrot",
            "url": "https://myanimelist.net/anime/producer/1/Studio_Pierrot"
        }
    ],
    "genres": [
        {
            "mal_id": 1,
            "type": "anime",
            "name": "Action",
            "url": "https://myanimelist.net/anime/genre/1/Action"
        },
        {
            "mal_id": 2,
            "type": "anime",
            "name": "Adventure",
            "url": "https://myanimelist.net/anime/genre/2/Adventure"
        },
        {
            "mal_id": 4,
            "type": "anime",
            "name": "Comedy",
            "url": "https://myanimelist.net/anime/genre/4/Comedy"
        },
        {
            "mal_id": 31,
            "type": "anime",
            "name": "Super Power",
            "url": "https://myanimelist.net/anime/genre/31/Super_Power"
        },
        {
            "mal_id": 17,
            "type": "anime",
            "name": "Martial Arts",
            "url": "https://myanimelist.net/anime/genre/17/Martial_Arts"
        },
        {
            "mal_id": 27,
            "type": "anime",
            "name": "Shounen",
            "url": "https://myanimelist.net/anime/genre/27/Shounen"
        }
    ],
    "opening_themes": [
        "\"R★O★C★K★S\", by Hound Dog (eps 1-25)",
        "\"Haruka Kanata (遥か彼方)\" by Asian Kung-fu Generation (eps 26-53)",
        "\"Kanashimi wo Yasashisa ni (悲しみをやさしさに)\" by little by little (eps 54-77)",
        "\"GO!!!\" by FLOW (eps 78-103)",
        "\"Seishun Kyosokyoku (青春狂騒曲)\" by Sambomaster (eps 104-128)",
        "\"No Boy, No Cry (ノーボーイ・ノークライ)\" by Stance Punks (eps 129-153)",
        "\"Namikaze Satellite (波風サテライト)\" by Snowkel (eps 154-178)",
        "\"Re:member\" by FLOW (eps 179-202)",
        "\"YURA YURA (ユラユラ)\" by Hearts Grow (eps 203-220)"
    ],
    "ending_themes": [
        "\"Wind\" by Akeboshi (eps 1-25)",
        "\"Harmonia\" by Rythem (eps 26-51)",
        "\"Viva Rock ~Japanese Side~\" by Orange Range (eps 52-64)",
        "\"ALIVE\" by Raiko (eps 65-77)",
        "\"Ima made Nando mo\" by the Mass Missile (eps 78-89)",
        "\"Ryusei\" by Tia (eps 90-103)",
        "\"Mountain A Go Go Too\" by Captain Straydum (eps 104-115)",
        "\"Hajimete Kimi to Shabetta\" by GagagaSP (eps 116-128)",
        "\"Nakushita Kotoba\" by No Regret Life (eps 129-141)",
        "\"Speed\" by Analogfish (eps 142-153)",
        "\"Soba ni Iru Kara\" by Amadori (eps 154-165)",
        "\"Parade\" by CHABA (eps 166-178)",
        "\"Yellow Moon\" by Akeboshi (eps 179-191)",
        "\"Pinocchio\" by Ore Ska Band (eps 192-202)",
        "\"Scenario\" by SABOTEN (eps 203-220)"
    ]
}
```

* **Error Response**

Code - `400 Bad Request`

Content `{ error : "Sorry, but bad requests do happen." }`

***

### **Recipe API**

Fetches all recipes through Recipe Puppy API. Queries limited to `i` of `onions,garlic` and `q` of `omelet`

URL - `/api/recipe`

Method - `GET`

* **Success Response**

Code - `200`

Content

```json
{
    "title": "Recipe Puppy",
    "version": 0.1,
    "href": "http://www.recipepuppy.com/",
    "results": [
        {
            "title": "Monterey Turkey Omelet",
            "href": "http://allrecipes.com/Recipe/Monterey-Turkey-Omelet/Detail.aspx",
            "ingredients": "butter, eggs, garlic, green pepper, monterey jack cheese, onions, turkey, water",
            "thumbnail": "http://img.recipepuppy.com/5506.jpg"
        }
    ]
}
```

* **Error Response**

Code - `400 Bad Request`

Content `{ error : "Sorry, but bad requests do happen." }`
