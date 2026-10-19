/**
 * Bhutan Stay - Interactive Application Script
 */

// Sample image collections for carousel functionality per stay card
const stayGalleryMap = {
   
                    //    hotel of paro 
    'Hotel Gakyidiana': 
    [    'https://images.trvl-media.com/lodging/101000000/100570000/100564000/100563901/234d8c71.jpg?impolicy=resizecrop&rw=1200&ra=fit',
         'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TN6ab6iuDOhrrFPDlHI-so1tj9-S1mkESLCCGwjNUqWJtIme0hNo0MADWcmzCvbs6ViXXy1gdiwY7G1d_leM20gnEUWu-xxdcFswRnapEWyauQa8qctv1ehQKyfERN0IYXs4q9=s1360-w1360-h1020-rw', 
         'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmcZW13YYDVWFDNUzMC8YEu4VANLG1SAeeArJ5gHYXCKzRaBBQtJiKZiPwljoeKsZjt4Dg6bKxYGziTfXO7iTIdk05rS3dTzO0cpB1780YBkXD-jYE6EXvWtkgMjhO8p7pjoDyl=s1360-w1360-h1020-rw'
        ],
    'Hotel Khamsum':
    [    'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnyFh-gMG3DE8vYaCbU_jAzwv_I_HR7DpP_tMhiduHHHIbsUEXmIQUkfkDMddrZ-yrQaRMOUav7YcaYHg_6V0WxMBXgK9epJncOvkkGyJH4J2l6Nap6zEXtJDPJsKBuGy5kMTcDyQ=s1360-w1360-h1020-rw',
        'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkknZZUff61yZkDXIBP_H4kKbUJMB65IQ6-oqUmvjnhPQQjR6IJrj4ICcdDleHiEGyBt0YrzL3Q8wNOpIbXoIZpgs3YuGNppoRBO-3fOZqbGuRadn2k5ndQzAWkFkvSYnh03dzyuw=s1360-w1360-h1020-rw',
        'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWntcOaTQ4zcbalqujLn8fYRVAdEDospk7LtrEISiBUkh3UNYTZz5-q_h5-w17WIh5jSjtkUjMooKAlnYrHP5t-et9ThKKcRduXe4Bxf4UbKKor19WVMpqWfTt1Qbi0hWUnQwTlFl1eq9oI=s1360-w1360-h1020-rw'
    ],
    'COMO Uma Paro':
    [   'https://lh3.googleusercontent.com/proxy/usGCFhItrsR_DoagZ_Sm6Phq3p6tEc5kfdx2bIDhXfhfTDo8kvDYmoBC0LJVwWztV6zNIVu6V9MRDJNx1c46L4HbBllv3dUll7et0QHe8oMTUhDrgCbdHQqqRetT7RDL8Hkq3xYTRfbrPJ3wriNFbO4NVd3KM5g=s1360-w1360-h1020-rw',
        'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlH0xp1bVS5P-n8ClSCoXQlgC7241HJ8HlwM4UHpK1AN7FXJF6jEGSMLEFnWc6KY_up5M2aWBkOlqlMRHjF2FpNPbFNWRgOtpJLEr3707uU5wxmXE0nTvzRAlZe-sYbMZ9jPSru7g=s1360-w1360-h1020-rw',
        'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk8Upt9_Or7UEStsPJM05POIBXX-o4bIumkUaPyMaMlG0mVprm4-ECM3Ejxj_Dnx-oCVhFAkYkRg2Y0tQkqzo5PkafmRJkFSGZ4_zmmCZZ1eSZgvEYTm7OsMHyvN4OYufZcYpfAEA=s1360-w1360-h1020-rw'
    ],


                          //guesthouse of paro
    'Paro Guest House':
     [  'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/38/80/76/caption.jpg?w=1400&h=-1&s=1', 
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/38/80/77/caption.jpg?w=1400&h=-1&s=1', 
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/38/80/78/caption.jpg?w=1100&h=-1&s=1'
     ],

     

    'Paro Village stay':
    [    'https://lh3.googleusercontent.com/grass-cs/ACvplmOiU5ef0nuJ1lMuS6idkAslaKTTSDWe6jQwQZRXKkv9DzGt5wDwI5YF2tgB7qbfnTFeJxEbrRBrvTOqa9Kk1iB-WsFYCwKdd-RWNDpzKk3dDofKhDhs9WwiqS6i8KphGjkgxFgg=s1360-w1360-h1020-rw',
        'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkJJ_gJxIuVphgVTkFNtAJ9gp8vhqozGT3fRqEuRAlT7eT7tlU8oLSOCHcd3OmpOr25cmjyngpmp4p_y6GcPpx3XGzxdPmeHJVmrkG7md3zmW8fuDK_wJC19GUy0HI1zS0jqPjY=s1360-w1360-h1020-rw',
        'https://lh3.googleusercontent.com/grass-proxy/AIM7gW1h7PAH1YYxH5-pXWi0EgmNBO6Lh52yMps4p26ljnaHGM6s4JZJ-UHZ9g_9cfA_u3AWReI0-v8YpmfPnZbQyAlU0NA2FUbZYHmsYDvkjtny0UaWwYh4VBQ4gSy-PmBjXzB7rEBdC1c-A_oU2UAZ8yqVV4MrCEUZ8-E7jQl8reddZOwrj8Tk-tph=s1360-w1360-h1020-rw'
    ],

             //lodges in paro

    'Paro Eco Lodge': 
    [   'https://cf.bstatic.com/xdata/images/hotel/max1024x768/536410161.jpg?k=98256f821a3bf66f8119fdc7ce4f98133cd0688d1740fe8fc34dc7bf1fb85c42&o=', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjcj0oRRtw77sbAYg96UsSDUhWfd_B1fjl57QXJbXFA&s=10', 
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/528362773.jpg?k=cc6b8363deaf3c7f2cbfb19228f3000245e9d10c3da302aaaf9c40215bf0e7d2&o='
    ],

   'Amankora Lodge': 
     [   'https://smartflyer-cdn.s3.amazonaws.com/wp-content/uploads/2019/04/Amankora-Bhutan-Punakha-Suite_High-Res_18019.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7H3iGPQcyOvrjSHMvoJG5cD-Sv1r6z3IMNIcji49LltnondTS_7WlivTz&s=10',
        
        'https://e8jyptdrnaz.exactdn.com/wp-content/uploads/2023/08/SOC_People-Jonathan-Lithgow-Amankora-Bhutan-007-1024x576.jpg?strip=all&lossy=1&ssl=1'
    ],


    'Six Sense Lodge':
    [    'https://media.privateupgrades.com/_data/default-hotel_image/9/46098/sixsensesbhutan-1_1400x1400_auto.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEav8NtF0I4k_ZIC07cv9AzvkE2vf-gZ1OJsEkrys2YCZsDqh5IgAjfuE&s=10',
        'https://cdn.drukasia.com/www/images/media/six-senses-paro2.png'

    ],

             // hotel of Punakha
   
    'PemaKo':
    [   'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm3hn33Ynv5ZjERG3b_wYqVlk5w0xu_AtaQSJ5IZiAkYlLIioecZ0NlskCDz_WICobr-VIDbzTerERM5fE2iVSNzRh91Ftx8c6Yi7Tr7jP17eK95IgRkL9rv9ANudaBaoDCtvNR=s1360-w1360-h1020-rw',
        'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmbi_mkrKPz561iT8gN1kEzT6EUV991jbBMebyVOBi10woN1bo28KUNjYQotfijywKN1ftl1cBXu2WUaUKl1_60Wt7wugavX7a10GyZK8jXfPMorqT_ss4F-3jRYQ_4Q9GUFXGI71fsobgX=s1360-w1360-h1020-rw',
        'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlSBSoYOK6hTDTcYSb8Oqa-UYI25ErUHpm_4M7pYCohEBTrvNtDqUIe2nY1wcHnQpCDMhxJwKMbRoGjgOyo9_6sA_5p9kXq7m9dpS64qWF1WnWhmEIH3dXzOwAyWyy2WTkB8cvT=s1360-w1360-h1020-rw'

    ],

    'Khuru khuru Hotel':
    [   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbLRIhU4fqnaDrMkWVIo3TtZhCVJ_ZhE3unJ-5y7IBJw&s=10',
        'https://images.trvl-media.com/lodging/104000000/103180000/103171200/103171138/72114dad.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ93mxF3b8ZbyE60WTCaHZfhTM78ytOKmuJ_7ZdogwO2A&s=10'

    ],

                // homesaty and guesthouse punakha

    'Gatshothang Happiness Field Homestay': 
    [    'https://yeegetaway.com/wp-content/uploads/2023/01/20190831_152318-1536x728.jpg', 
        'https://yeegetaway.com/wp-content/uploads/2023/01/gatshothang11-1365x2048.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY81Un9PLt9W57gszvErt4nxson7U2lkWJ95ZS3gDhfaYtK6qTE9i681NQ&s=10', 
        'https://yeegetaway.com/wp-content/uploads/2023/01/20190831_152318-1536x728.jpg', 
        'https://yeegetaway.com/wp-content/uploads/2023/01/gatshothang11-1365x2048.jpg'
    ],


    'lala Homestay':
    [   'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/34/65/ec/64/caption.jpg?w=1100&h=1100&s=1',
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/3c/1f/f0/caption.jpg?w=1200&h=1200&s=1',
        'https://cf.bstatic.com/xdata/images/hotel/max300/208822161.jpg?k=b515e96465803bd3f217e00d9b145edc1693852251ec728898d7add6999255ce&o='

    ],


    'Chay Chay Stay':
    [   'https://cf.bstatic.com/xdata/images/hotel/max1024x768/590690899.jpg?k=8bd02c82522fc018a05a88eef313df7e3dd98bdd9a2fabae8c5a5160d40cef0b&o=',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/590693910.jpg?k=b373b64f7c4b56b5159ff1dc76d6af9018e22565f08e63c3da1490ecaced9d03&o=',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/590690970.jpg?k=181700b8f5a4b58462a354cdabb61404ef159955ec4db56d7a1152d22b940a16&o='
    ],


             // lodge of punakha


    'Spirit Village Lodge': 
    [  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITEVAOdU_dV-iG3gdoYuL2HZH2rUU9zDghCizeOSj_g&s=10', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkEnXlLSHaB7DUCfnJK4B0J6wPsju1Z3JckCtajMxCIg&s=10', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXpg59VJRTMNoUvrf8AiR2KzW7M2xe4u69abCk6XABWtMZwL92IZvS_Z0&s=10'
    ],


   'Punakha Jungle lodge':
   [   'https://scontent.fpbh2-1.fna.fbcdn.net/v/t39.99422-6/752674529_880520674704275_3991348915593361069_n.png?stp=dst-jpg_tt6&cstp=mx996x693&ctp=s590x590&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7yJRr2xLnPwQ7kNvwGKHiRM&_nc_oc=AdpLZZ3MMdyFxiUZcDrq5pm7CmhdYY9mBEucjWiM6UCKpKcHlImA3mOjdi1_I-ms1ZE&_nc_zt=14&_nc_ht=scontent.fpbh2-1.fna&_nc_gid=hFmPZUukuvE6-QH-QdjRoQ&_nc_ss=7b289&oh=00_AQNxUDmNCoy5wD6qmdU9B0RYD-Uz8v7w63J0HnBH_SGx2Q&oe=6ACAF9F1',
       'https://scontent.fpbh2-1.fna.fbcdn.net/v/t39.99422-6/753396567_1011892521825838_4968202169327489620_n.png?stp=dst-jpg_tt6&cstp=mx996x693&ctp=s590x590&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=V-mivviZuk4Q7kNvwFUKFNa&_nc_oc=AdoktCt6IqdAt1tFATBVXAjU1kkKu0DBmCfVol10wZx3seVKyYx4af8RAZmjC0kDSDc&_nc_zt=14&_nc_ht=scontent.fpbh2-1.fna&_nc_gid=hFmPZUukuvE6-QH-QdjRoQ&_nc_ss=7b289&oh=00_AQNX8L6KwDzHLKcGVbmFOG6g67SgGefUZlUiMYGWr8bB3A&oe=6ACAE6FC',
       'https://scontent.fpbh2-1.fna.fbcdn.net/v/t39.99422-6/753738908_4174647186110452_9009937561199731969_n.png?stp=dst-jpg_tt6&cstp=mx996x693&ctp=s590x590&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7aJWCq4IXUQQ7kNvwEzTtGd&_nc_oc=AdrrTUSetC5yyMbpC6ugj8_PYR0txcLSu08cIraCo0Xfwh1QTPys-oG0rgCnEy9DEf0&_nc_zt=14&_nc_ht=scontent.fpbh2-1.fna&_nc_gid=hFmPZUukuvE6-QH-QdjRoQ&_nc_ss=7b289&oh=00_AQMrPVQ5rB4W-k7_Nw3gM4DPXb47DqQ8MCYwN3m3g3mhHg&oe=6ACAE93A'
   ],


                  // thimphu hotels

    'Druk Hotel Thimphu': 
    [   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwqXTrHdQpdBePMPg-Ip30AlIse9Rl_C7z3_KM2r3YkQ&s=10', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSChqFddQCYOLhZLoBRzp-2PI_fBQ_8lqchOuLXLbBP1A&s=10', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyu1EkS7xitNTOa9iHLPyAsoYo4ivgdfKwEN0FK0XmAA&s=10'
    ],

    'Lemon Tree Hotel':
    [   'https://cf.bstatic.com/xdata/images/hotel/max300/244619823.jpg?k=567e4b8944b0f31a60fa9ec1d586c3513cd00e04ffbc7e69e1acca1250f63302&o=',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/244619823.jpg?k=567e4b8944b0f31a60fa9ec1d586c3513cd00e04ffbc7e69e1acca1250f63302&o=',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/270126549.jpg?k=89ffa90f76b540a2350589c9e7f4a413b3d145ae041353e77c661fbd9fef5e81&o='

    ],

    'Hotel Migmar':
    [   'https://images.trvl-media.com/lodging/23000000/22480000/22478400/22478351/31f6759e.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        'https://images.trvl-media.com/lodging/23000000/22480000/22478400/22478351/8912324f.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        'https://images.trvl-media.com/lodging/23000000/22480000/22478400/22478351/35c6c44c.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        'https://images.trvl-media.com/lodging/23000000/22480000/22478400/22478351/507e4e7d.jpg?impolicy=resizecrop&rw=1200&ra=fit'
    ],

    'Lhaki Hotel':
    [  'https://bhutanhotels.com.bt/wp-content/uploads/2024/05/27.Deluxe-twin.jpg',
        'https://bhutanhotels.com.bt/wp-content/uploads/2024/05/Dining.jpg',
        'https://bhutanhotels.com.bt/wp-content/uploads/2024/05/Lobby.jpg'

    ],

               // guesthouse or homestay in thimphu

    'Yeedzin Guest House': 
    [   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPjB_VWuNjtVCCULB5Xj75CLU6dwtakS6MYvyh4UwfHR8TJHniFBpxkOI&s=10', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwF4134Ns_KDhu_7XHvbuKH7lw1fVox06OKql7KiU4nQ&s=10', 
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/56/c8/99/yeedzin-guest-house.jpg?w=1800&h=-1&s=1',
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/1a/b3/de/gym-room.jpg?w=1600&h=-1&s=1'
    ],

    'Damchoe’s Homestay':
    [    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuxMJgIPcL7RVtt2vAPbKqUEsvtiQnXyOzyoscRCA-kg&s=10',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMw10emPxllE8aX_sLVv1errE6c-evYr8URiXbDlwqEg&s=10',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeCnvTwLw8d2PTQyDVxQo7H_pju8sW1v9kiqyoac43Zg&s=10'
    ],

    'Happy Homestay':
    [   'https://media.vrbo.com/lodging/35000000/34710000/34707500/34707433/332f861a.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        'https://media.vrbo.com/lodging/35000000/34710000/34707500/34707433/8c1a11d1.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        'https://media.vrbo.com/lodging/35000000/34710000/34707500/34707433/b3939563.jpg?impolicy=resizecrop&rw=1200&ra=fit'
    ],



               // lodges in thimphu
               
    'Thimphu Nature Lodge': 
    [   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTR8AtAeK9ioiy41Lxrq0i0YM-BTfa_W50Os0No9FZ5A&s=10', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdWsOdBOM57bFDQSH_PkImv6WD_s0s8re30v5mFmM0cQ&s=10', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTasSE9Ho62JoHl-Jn7DRkDk9WLjS4xeM8urRb-jGca2EtleWNuYjuZ8Q&s=10'
    ],

   'Gangtey lodge':
   [   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Ubu2ucNsYMUDxOzFz8BjHCDpvVP3egGGAp3VwP4vJQ&s=10',
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5kmPFBUpmtE-ozhf4EjyT_ZPfQ6y3VEUrY76smY4B2w&s=10',
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNCyBLemup_3c1_ccNvStB0VZB0lRSm6maK5RzkShdtA&s=10'
   ],

         //TrashiYangtse hotel

    'Tsheringma Hotel':
    [   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyTSz1g2M45a6o-NSJupjuzTpmE1L4ZQA3bi6PmH9IA&s=10',
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/4e/20/99/hotel-satyam.jpg?w=600&h=600&s=1',
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/7e/89/fe/view-from-backside-rooms.jpg?w=1800&h=1000&s=1'

    ],

    'Zongkhar Hotel':
    [   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiOzbEtO9MjCEYq53mXKXq4G2wFfzA-fH-qTac1pT5sA&s=10',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHrdK3h8BdSu-9NdxsZyK804dvSxp1MI7ohhqZeGNQxA&s=10',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8Y6nJk-N4XfdOHOm_LebSYULkMgkXtFb0Z83gzJvNw&s=10'
    ],

  

    'Karmaling Hotel': 
    [   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ86GkQ3cp9hgowhQEYOHSPW8KDGrRO-MawD1rtZJ0QOQ&s=10', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJusOH9Xw8DscqCVL9gRifBFxI4h3Ea9YDWAKiwWmeig&s=10', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTndIYvCP1KMp9-OUjgJWDEkNpwJp1kNrdbqMif15zJqg&s=10'
    ],


    // trashiyangtse guesthouse or homestay
    'Trashiyangtse Guest House': 
    [   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvMc1taAUuSPa0mvNCSsUqOplX6I_goFKl8Yt93NmROA&s=10', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qG84KV6P6WOyT6BcUKYsmN20EOvP-nnoFGHGnCxnPQ&s=10', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs6BE_LIzIrJCXW6zE3jt92_qJDBx19cGyQca3L3PG-Q&s'
    ],
    

   'Phuntsho Guest House':
   [   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7ccQK7JuRIq-PONRqTPoU6cDZGVWtRhxTTnGhdUEnw&s=10',
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9gJhuL_pDH34ItEDBP9NAetIH3BuacnfT2Ey0gzgiKA&s=10',
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhe_zfvnnQjxgoDgz4YA6yqlg8t3cHNQYXQ9MdRXObw&s=10'
   ],


   
    'Dekyil Guest House': 
    [   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6s1WPYu7IYV0D29twwXuM9bkDvwpFLHhS0xMUqY1YsQ&s=10', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQX8zEsRX7h7DuUiBlC8Cme6-JJRPsDoTvgItBVosEoA&s=10', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Njs3_P0R91D5rV2ypd93g6hsb6GueZz9dOTSQREX9EAG6Z-d-pgGkDGW&s=10'
    ],

//    trashiyangtse lodge

    'Chortenkora Lodge': 
    [    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ9YCvNg8S4VvW5nZ487EXGHmr7Tb4lu3UpgLMvOdQSA&s=10', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2QzvclTxBy-EW-wY1TT3x7zmrLQ2Fwc5thg1YDTPDuw&s=10', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLn8Kq9SymbQGPGG73gguNfwDUd_yYQWkUpB6i5psyPg&s'
    ],


    'Bumdeling Eco-Lodge':
    [   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb9pVU0KtC5L_5TshX5Ep1MGNWelJ8bgrTAK2i34vDcg&s=10',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJuVpnSQI7RSg351eEJN1K5xHrSXot8NUFdT5QHgEVbg&s=10',
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC0IWpYHf3a-yxHO0K91jIFNLNW3chkB4pWpGNuEN5hQ&s=10'
    ],

    
    'Wangdi Lodge':
    [   'https://cf.bstatic.com/xdata/images/hotel/max500/684861126.jpg?k=293636b9a399167931ebd581e60cf43189e7867067384f602a5ef6881f27c249&o=',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/574304502.jpg?k=8102d17acb3d01d9369a06f59a7e27bc09d52d5682ba8ce8414c84cf98041e3a&o=',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/684861109.jpg?k=312880d3459c61a0aefb77e4108b03c22976c10ef51125d7b92b26fd9f4e0fe8&o='
    ],



    'Pangbang lodge':
    [  'https://www.triptobhutan.com/img-hotel/panbang-ecolodge-bhutan%20(7).jpg',
        'https://www.triptobhutan.com/img-hotel/panbang-ecolodge-bhutan%20(1).jpg',
        'https://www.triptobhutan.com/img-hotel/panbang-ecolodge-bhutan%20(8).jpg',
        'https://www.triptobhutan.com/img-hotel/panbang-ecolodge-bhutan%20(7).jpg'
    ],

     //bumthang hotel

    'Ugyen Hotel':
    [   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7F7gThrA9XtrNBLqBiwLPRsfl1V4PjGgWJbHV8vP5xQ&s=10',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuJdbWtBPZLL8UPHYBNNfLXve3atJ24Uv5SmUq3uRIoQ&s',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/858784763.jpg?k=62b58ec43ff2a26cdca569a5fc19d6ba2d9302b06f91a63692a9706f4e2eb490&o='
    ],

    'Hotel Tandin':
    [  'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/24/77/35/hotel-tandin.jpg?w=500&h=400&s=1',
        'https://lh3.googleusercontent.com/grass-cs/ACvplmMW32vQpgudGdYmlrbN3T5xAX4TVtbR3jJH1w0pwDhB_oePktf7SC_pSfkATAXPdJ5OH_rfq1G8bVEmlAF9po0bGkqXe2IYNm49Ki3wDhQWhFxxb9fWDlUZPm6ukGV4_CndBoM=s1360-w1360-h1020-rw',
        'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnHyCILinXIHPnjajY92ugUcflVEncrWG22qEtz9Pvd1jJzmMn4BpSyg3tuYIU-mDp1yjEKZB1ma9awuLMMppzE2FxyILevBGz3py8Bl_q4uj6emUN3Pl6fKmE8blk5fnWssO6j=s1360-w1360-h1020-rw'
    ],



    'Hotel UgyenLing':
    [  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDvxn7ViQJ8bvp2lv26I-i1V3dEEUShh1CpnUt9Yk7gA&s=10',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLZ8VpB_8NAbIFA06lwhC7wg630PhlSxwapO6ftSbBng&s=10',
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiBaE6X9I64vAVhsq33itAUdPZBCEG8ggEpSXmmrWkAA&s=10'
    ],


                  //bumthang guesthouse and homestay
    'Rinchen Guest House': 
    [   'https://cdn.bookmytour.bt/uploads/hotels/hotel_photos/5762420b2a085_850_400.jpg', 
        'https://cdn.bookmytour.bt/uploads/hotels/hotel_photos/5762420b2a310_850_400.jpg', 
        'https://cdn.bookmytour.bt/uploads/hotels/hotel_photos/5762420b2a3a6_850_400.jpg'
    ],


    'Kaila GuestHouse':
    [   'https://images.trvl-media.com/lodging/125000000/124950000/124949600/124949563/a5d13cad.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        'https://images.trvl-media.com/lodging/125000000/124950000/124949600/124949563/6f08ad00.jpg?impolicy=resizecrop&rw=1200&ra=fit',
        'https://images.trvl-media.com/lodging/125000000/124950000/124949600/124949563/8135d105.jpg?impolicy=resizecrop&rw=1200&ra=fit'
    ],


    'Gongkhar Guest House':
    [   'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/d2/60/9f/our-huge-second-floor.jpg?w=2000&h=-1&s=1',
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/d2/60/3a/gongkhar-guesthouse.jpg?w=2000&h=-1&s=1',
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-s/01/b8/4c/2b/gongkhar-guesthouse.jpg?w=600&h=-1&s=1'
    ],


    //bumthang lodges

    'Amankora Bumthang': 
    [   'https://lh3.googleusercontent.com/grass-cs/ACvplmOCflPNd5FL9WcgS2Z0tpe3Wr8TbPvXqG3brsmP976WcuF6Qud7GD-MEZ8zauxe_VDF6j3_lhy2f865b10pcRwWlYzhEWgWYGufuy4yoeqyUEvZXe3J74PAFarKuOGtu3rViNw=w324-h312-n-k-no', 
        'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnG6xUEg31B4fpxVKpTl5rMHoDqf4pqEFQ-BIGtGuKFK3zfwmbwLUJ0JzwmI1bBrM9dmDsxQNahyCkYm0jXxQgzMHImKyW8Q-545NAz_3_IzGQGX8RRnKQqZNtzBH5IPprpQN8V=s1360-w1360-h1020-rw', 
        'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmc-X1VtIgvq5WFI4i57Jyxsi5gWEjoMvXXBuVfwcbwMwYs7uHl2aHMjZAY-MJA28OyeotgnvBAJCOqong5IYGGgVQS0lBo5hr_ePomS_9AElOpqAGfwjFe2d5j4Swvwo8Hjymnsw=s1360-w1360-h1020-rw'
    ],
 

    'Bumthang Mountain Lodge':
    [   'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/89/0a/ae/meal-nicely-presented.jpg?w=2000&h=-1&s=1',
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/80/b2/6e/dinning-room.jpg?w=1200&h=-1&s=1',
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/89/0a/dc/cozy-room.jpg?w=2000&h=-1&s=1'

    ],
};

// Track current image index for each card
const currentImageIndices = new Map();

document.addEventListener('DOMContentLoaded', () => {
    initializeCardIndices();
    setupModalStructure();
    setupFilterListeners();
});

/**
 * Initialize image trackers for each stay card
 */
function initializeCardIndices() {
    const cards = document.querySelectorAll('.stay-card');
    cards.forEach((card, index) => {
        currentImageIndices.set(card, 0);
        updateDotsUI(card, 0);
    });
}

/**
 * Filter stays based on location and type selects
 */
function searchStay() {
    const selectedCategory = document.getElementById('category').value.toLowerCase();
    const selectedType = document.getElementById('stayType').value.toLowerCase();
    const cards = document.querySelectorAll('.stay-card');
    const messageEl = document.getElementById('message');

    let visibleCount = 0;

    cards.forEach(card => {
        const cardPlace = card.getAttribute('data-place').toLowerCase();
        const cardType = card.getAttribute('data-type').toLowerCase();

        const matchPlace = (selectedCategory === 'all' || cardPlace === selectedCategory);
        const matchType = (selectedType === 'all' || cardType === selectedType);

        if (matchPlace && matchType) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.4s ease-in-out forwards';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    // Dynamic result feedback message
    //    if (visibleCount === 0) {
    //     messageEl.textContent = 'No stays match your search criteria. Try selecting "All Places" or "All Stay Types".';
    //     messageEl.style.color = '#e74c3c';
    // } else {
    //     messageEl.textContent = `Showing ${visibleCount} accommodation options across Bhutan`;
    //     messageEl.style.color = '#555';
    // }

    // Smooth scroll down to section if user is searching from hero on mobile
    document.getElementById('stays').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Change image using prev/next arrow controls
 */
function changeImage(button, direction) {
    const card = button.closest('.stay-card');
    const title = card.querySelector('h3').textContent.trim();
    const gallery = stayGalleryMap[title] || [card.querySelector('.stay-image').src];

    let currentIndex = currentImageIndices.get(card) || 0;
    currentIndex += direction;

    if (currentIndex >= gallery.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = gallery.length - 1;

    currentImageIndices.set(card, currentIndex);
    renderCardImage(card, gallery[currentIndex]);
    updateDotsUI(card, currentIndex);
}

/**
 * Jump to image using dot navigation
 */
function showImage(dot, index) {
    const card = dot.closest('.stay-card');
    const title = card.querySelector('h3').textContent.trim();
    const gallery = stayGalleryMap[title] || [card.querySelector('.stay-image').src];

    if (index >= 0 && index < gallery.length) {
        currentImageIndices.set(card, index);
        renderCardImage(card, gallery[index]);
        updateDotsUI(card, index);
    }
}

/**
 * Helper to update card image with a soft crossfade transition
 */
function renderCardImage(card, src) {
    const img = card.querySelector('.stay-image');
    img.style.opacity = '0.4';
    setTimeout(() => {
        img.src = src;
        img.style.opacity = '1';
    }, 150);
}


/**
 * Update active dot styling for a card
 */
function updateDotsUI(card, activeIndex) {
    const dots = card.querySelectorAll('.dots span');
    dots.forEach((dot, idx) => {
        if (idx === activeIndex) {
            dot.classList.add('active');
            dot.style.opacity = '1';
            dot.style.transform = 'scale(1.2)';
        } else {
            dot.classList.remove('active');
            dot.style.opacity = '0.5';
            dot.style.transform = 'scale(1)';
        }
    });
}

function openChat() {
    document.getElementById("chatbot").style.display = "block";
    document.getElementById("userInput").focus();
}

function closeChat() {
    document.getElementById("chatbot").style.display = "none";
}

function sendMessage() {
    const input = document.getElementById("userInput");
    const messages = document.getElementById("messages");
    const message = input.value.trim();

    if (message === "") return;

    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = message;
    messages.appendChild(userMessage);
    input.value = "";

    const botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    const question = message.toLowerCase();

    if (question.includes("gom kora")) {
        botMessage.textContent = "Gom Kora is a sacred pilgrimage site in Trashiyangtse, Bhutan.";
    } else if (question.includes("aja ney")) {
        botMessage.textContent = "Aja Ney is a sacred pilgrimage destination associated with Guru Rinpoche in eastern Bhutan.";
    } else if (question.includes("gasa") || question.includes("menchu") || question.includes("hot spring")) {
        botMessage.textContent = "Gasa Menchu is a natural hot spring in Gasa Dzongkhag.";
    } else if (question.includes("mebar") || question.includes("burning lake")) {
        botMessage.textContent = "Mebar Tsho is a sacred lake in Bumthang associated with the story of Terton Pema Lingpa.";
    } else if (question.includes("omba")) {
        botMessage.textContent = "Omba Ney is a sacred site in eastern Bhutan known for its natural OM rock formation.";
    } else if (question.includes("hello") || question.includes("hi")) {
        botMessage.textContent = "Hello! Welcome to Yul-Go-Ri. Ask me about Gom Kora, Aja Ney, Gasa Hot Springs, Mebar Tsho or Omba Ney.";
    } else if (question.includes("book") || question.includes("booking")) {
        botMessage.textContent = "Choose a place and press its Book Now button. This demo displays a message; a real booking form can be added later.";
    } else {
        botMessage.textContent = "I can help with Gom Kora, Aja Ney, Gasa Hot Springs, Mebar Tsho and Omba Ney. Which place would you like to know about?";
    }

    messages.appendChild(botMessage);
    messages.scrollTop = messages.scrollHeight;
}

document.getElementById("chatForm").addEventListener("submit", function (event) {
    event.preventDefault();
    sendMessage();
});


