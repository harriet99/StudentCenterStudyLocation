function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function openPopup(area) {
    var contentElement = document.querySelector('.popup-content');
    var title = area.getAttribute('title');
    
    var areaInfo = {
        '1st_entrance': {
            noiseLevel: 67,
            population: '9/46',
            imgSrc: './chair_img/IMG_0528.jpg'
        },
        'food_area': {
            noiseLevel: 70,
            population: '13/40',
            imgSrc: './chair_img/IMG_0528.jpg'
        },
        'next_to_chick_fil_a': {
            noiseLevel: 74,
            population: '11/24',
            imgSrc: './chair_img/IMG_0528.jpg'
        },
        'btw_food_and_post_office': {
            noiseLevel: 72,
            population: '8/18',
            imgSrc: './chair_img/IMG_0539.jpg'
        },
        'food_bar': {
            noiseLevel: 70,
            population: '2/5',
            imgSrc: './chair_img/IMG_0540.jpg'
        },
        'in_front_of_post_office': {
            noiseLevel: 63,
            population: '6/12',
            imgSrc: './chair_img/IMG_0544.jpg'
        },
        'next_to_bowling': {
            noiseLevel: 80,
            population: '14/51',
            imgSrc: './chair_img/IMG_0548.jpg'
        },
        'next_to_eye_center': {
            noiseLevel: 69,
            population: '2/12',
            imgSrc: './chair_img/IMG_0551.jpg'
        },
        '2nd_big_food_hall': {
            noiseLevel: 68,
            population: '17/56',
            imgSrc: './chair_img/IMG_0685.jpg'
        },
        'in_front_of_gyro_chef': {
            noiseLevel: 69,
            population: '5/22',
            imgSrc: './chair_img/IMG_0686.jpg'
        },
        'pizza_bar': {
            noiseLevel: 59,
            population: '1/5',
            imgSrc: './chair_img/IMG_0564.jpg'
        },
        '2nd_back_door': {
            noiseLevel: 55,
            population: '2/18',
            imgSrc: './chair_img/IMG_0566.jpg'
        },
        '2nd_biggest_1': {
            noiseLevel: 62,
            population: '16/66',
            imgSrc: './chair_img/IMG_0528.jpg'
        },
        'side_pizza_bar': {
            noiseLevel: 65,
            population: '0/5',
            imgSrc: './chair_img/IMG_0574.jpg'
        },
        '2nd_biggest_2': {
            noiseLevel: 58,
            population: '30/102',
            imgSrc: './chair_img/IMG_0687.jpg'
        },
        '2nd_stair_sofa_area': {
            noiseLevel: 57,
            population: '3/16',
            imgSrc: './chair_img/IMG_0688.jpg'
        },
        'btw_book_store_blue_donkey': {
            noiseLevel: 72,
            population: '11/18',
            imgSrc: './chair_img/IMG_0689.jpg'
        },
        'blue_donkey_waiting': {
            noiseLevel: 63,
            population: '3/12',
            imgSrc: './chair_img/IMG_0593.jpg'
        },
        'blue_donkey_bar': {
            noiseLevel: 58,
            population: '2/4',
            imgSrc: './chair_img/IMG_0620.jpg'
        },
        'blue_donkey_front_sofa': {
            noiseLevel: 61,
            population: '7/19',
            imgSrc: './chair_img/IMG_0596.jpg'
        },
        '2nd_elevator': {
            noiseLevel: 54,
            population: '7/19',
            imgSrc: './chair_img/IMG_0600.jpg'
        },
        '2nd_student_hub_entrance': {
            noiseLevel: 56,
            population: '3/12',
            imgSrc: './chair_img/IMG_0690.jpg'
        },
        '2nd_white_board': {
            noiseLevel: 62,
            population: '25/40',
            imgSrc: './chair_img/IMG_0606.jpg'
        },
        '2nd_in_front_of_music': {
            noiseLevel: 70,
            population: '20/28',
            imgSrc: './chair_img/IMG_0614.jpg'
        },
        '2nd_small_1': {
            noiseLevel: 64,
            population: '1/12',
            imgSrc: './chair_img/IMG_0611.jpg'
        },
        '2nd_small_2': {
            noiseLevel: 59,
            population: '3/10',
            imgSrc: './chair_img/IMG_0691.jpg'
        },
        '3rd_stair_sofa_1': {
            noiseLevel: 45,
            population: '3/9',
            imgSrc: './chair_img/IMG_0622.jpg'
        },
        '3rd_stair_sofa_2': {
            noiseLevel: 52,
            population: '2/10',
            imgSrc: './chair_img/IMG_0624.jpg'
        },
        '3rd_stair_behind': {
            noiseLevel: 52,
            population: '2/6',
            imgSrc: './chair_img/IMG_0628.jpg'
        },
        'next_to_krog_boardroom': {
            noiseLevel: 53,
            population: '14/28',
            imgSrc: './chair_img/IMG_0692.jpg'
        },
        '3rd_next_to_grad_lounge': {
            noiseLevel: 62,
            population: '30/50',
            imgSrc: './chair_img/IMG_0693.jpg'
        },
        'btw_atlantic_theater_lounge': {
            noiseLevel: 53,
            population: '4/11',
            imgSrc: './chair_img/IMG_0646.jpg'
        },
        '3rd_bar': {
            noiseLevel: 56,
            population: '3/5',
            imgSrc: './chair_img/IMG_0644.jpg'
        },
        '3rd_before_student_hub': {
            noiseLevel: 56,
            population: '5/14',
            imgSrc: './chair_img/IMG_0645.jpg'
        },
        '3rd_student_hub_entrance': {
            noiseLevel: 68,
            population: '9/16',
            imgSrc: './chair_img/3rd_student_hub_entrance.png'
        },
        '3rd_white_board': {
            noiseLevel: 55,
            population: '20/40',
            imgSrc: './chair_img/IMG_0657.jpg'
        },
        '3rd_in_front_of_white_board': {
            noiseLevel: 54,
            population: '10/26',
            imgSrc: './chair_img/IMG_0695.jpg'
        },
        '3rd_individual_study': {
            noiseLevel: 49,
            population: '5/7',
            imgSrc: './chair_img/IMG_0696.jpg'
        },
        '3rd_elevator': {
            noiseLevel: 47,
            population: '10/20',
            imgSrc: './chair_img/IMG_0651.jpg'
        },
    };

    var info = areaInfo[title];
    if (info) {
        var infoHtml = `<p>Average Noise Level(dB): ${info.noiseLevel}</p>` +
                        `<p>Seats Occupied: ${info.population}</p>` +
                        `<p>Chair Image</p>` +
                        `<img src="${info.imgSrc}" alt="${info.imgAlt}" class="chair-image" />`
                        ;
    }

    contentElement.innerHTML = infoHtml;
    document.getElementById('popup').style.display = 'block';
}


function closePopup() {
    document.getElementById('popup').style.display = 'none';
}