'use strict';
angular.module('main')
        .service('MainServ', function (filterFilter) {

            this.getNewsData = function () {

                var datas =
                        [
                            {
                                id: 1,
                                title: 'Scottish Golf Awards',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam augue nibh, ornare sit amet velit a, lacinia faucibus mi. Suspendisse ac leo condimentum, volutpat diam nec, gravida velit. Cras quis mattis dolor, varius tristique metus. Nulla luctus mattis tincidunt. Etiam non nibh dui. Sed tristique dolor nec eros hendrerit dignissim id vel nibh. Phasellus a magna molestie, condimentum dui eu, sagittis sapien. Praesent eleifend lacus sed ligula venenatis tempor. Donec nec imperdiet metus. Aliquam mollis dictum urna in feugiat. Nam vulputate pellentesque dapibus. Ut risus sem, varius a consequat at, auctor sed nisi. Sed at augue efficitur, tristique metus id, scelerisque felis. Aliquam malesuada leo vitae magna commodo, vitae mattis purus vehicula. Donec ultricies vitae eros id convallis. Phasellus condimentum ornare sapien a sollicitudin. ',
                                img: 'main/assets/images/Golf-Awards.jpg',
                            },
                            {
                                id: 2,
                                title: 'Entries Open: Scottish Golf National Championships 2017',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam augue nibh, ornare sit amet velit a, lacinia faucibus mi. Suspendisse ac leo condimentum, volutpat diam nec, gravida velit. Cras quis mattis dolor, varius tristique metus. Nulla luctus mattis tincidunt. Etiam non nibh dui. Sed tristique dolor nec eros hendrerit dignissim id vel nibh. Phasellus a magna molestie, condimentum dui eu, sagittis sapien. Praesent eleifend lacus sed ligula venenatis tempor. Donec nec imperdiet metus. Aliquam mollis dictum urna in feugiat. Nam vulputate pellentesque dapibus. Ut risus sem, varius a consequat at, auctor sed nisi. Sed at augue efficitur, tristique metus id, scelerisque felis. Aliquam malesuada leo vitae magna commodo, vitae mattis purus vehicula. Donec ultricies vitae eros id convallis. Phasellus condimentum ornare sapien a sollicitudin. ',
                                img: 'main/assets/images/Mens-Stroke.jpg',
                            },
                            {
                                id: 3,
                                title: 'Scottish Golf Annual Meeting 2017',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam augue nibh, ornare sit amet velit a, lacinia faucibus mi. Suspendisse ac leo condimentum, volutpat diam nec, gravida velit. Cras quis mattis dolor, varius tristique metus. Nulla luctus mattis tincidunt. Etiam non nibh dui. Sed tristique dolor nec eros hendrerit dignissim id vel nibh. Phasellus a magna molestie, condimentum dui eu, sagittis sapien. Praesent eleifend lacus sed ligula venenatis tempor. Donec nec imperdiet metus. Aliquam mollis dictum urna in feugiat. Nam vulputate pellentesque dapibus. Ut risus sem, varius a consequat at, auctor sed nisi. Sed at augue efficitur, tristique metus id, scelerisque felis. Aliquam malesuada leo vitae magna commodo, vitae mattis purus vehicula. Donec ultricies vitae eros id convallis. Phasellus condimentum ornare sapien a sollicitudin. ',
                                img: 'main/assets/images/Mixed.jpg',
                            },
                            {
                                id: 4,
                                title: 'Munro Appointed as New Head of Events for Scottish Golf',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam augue nibh, ornare sit amet velit a, lacinia faucibus mi. Suspendisse ac leo condimentum, volutpat diam nec, gravida velit. Cras quis mattis dolor, varius tristique metus. Nulla luctus mattis tincidunt. Etiam non nibh dui. Sed tristique dolor nec eros hendrerit dignissim id vel nibh. Phasellus a magna molestie, condimentum dui eu, sagittis sapien. Praesent eleifend lacus sed ligula venenatis tempor. Donec nec imperdiet metus. Aliquam mollis dictum urna in feugiat. Nam vulputate pellentesque dapibus. Ut risus sem, varius a consequat at, auctor sed nisi. Sed at augue efficitur, tristique metus id, scelerisque felis. Aliquam malesuada leo vitae magna commodo, vitae mattis purus vehicula. Donec ultricies vitae eros id convallis. Phasellus condimentum ornare sapien a sollicitudin. ',
                                img: 'main/assets/images/Events.jpg',
                            },
                        ];

                return datas;
            }

            this.getBlogData = function () {

                var datas =
                        [
                            {
                                id: 1,
                                title: 'Handicapping',
                                description: 'Looking for advice on handicapping? We provide guidance for clubs and individual golfers',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam augue nibh, ornare sit amet velit a, lacinia faucibus mi. Suspendisse ac leo condimentum, volutpat diam nec, gravida velit. Cras quis mattis dolor, varius tristique metus. Nulla luctus mattis tincidunt. Etiam non nibh dui. Sed tristique dolor nec eros hendrerit dignissim id vel nibh. Phasellus a magna molestie, condimentum dui eu, sagittis sapien. Praesent eleifend lacus sed ligula venenatis tempor. Donec nec imperdiet metus. Aliquam mollis dictum urna in feugiat. Nam vulputate pellentesque dapibus. Ut risus sem, varius a consequat at, auctor sed nisi. Sed at augue efficitur, tristique metus id, scelerisque felis. Aliquam malesuada leo vitae magna commodo, vitae mattis purus vehicula. Donec ultricies vitae eros id convallis. Phasellus condimentum ornare sapien a sollicitudin. ',
                                img: 'main/assets/images/Golf-Awards.jpg',
                            },
                            {
                                id: 2,
                                title: 'Volunteer Opportunities',
                                description: 'Join our volunteer community, we are currently recruiting for Course Raters.',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam augue nibh, ornare sit amet velit a, lacinia faucibus mi. Suspendisse ac leo condimentum, volutpat diam nec, gravida velit. Cras quis mattis dolor, varius tristique metus. Nulla luctus mattis tincidunt. Etiam non nibh dui. Sed tristique dolor nec eros hendrerit dignissim id vel nibh. Phasellus a magna molestie, condimentum dui eu, sagittis sapien. Praesent eleifend lacus sed ligula venenatis tempor. Donec nec imperdiet metus. Aliquam mollis dictum urna in feugiat. Nam vulputate pellentesque dapibus. Ut risus sem, varius a consequat at, auctor sed nisi. Sed at augue efficitur, tristique metus id, scelerisque felis. Aliquam malesuada leo vitae magna commodo, vitae mattis purus vehicula. Donec ultricies vitae eros id convallis. Phasellus condimentum ornare sapien a sollicitudin. ',
                                img: 'main/assets/images/Mens-Stroke.jpg',
                            },
                            {
                                id: 3,
                                title: 'Get into Golf',
                                description: 'There\'s never been a better time to Get into Golf! We\'ll help you get started...',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam augue nibh, ornare sit amet velit a, lacinia faucibus mi. Suspendisse ac leo condimentum, volutpat diam nec, gravida velit. Cras quis mattis dolor, varius tristique metus. Nulla luctus mattis tincidunt. Etiam non nibh dui. Sed tristique dolor nec eros hendrerit dignissim id vel nibh. Phasellus a magna molestie, condimentum dui eu, sagittis sapien. Praesent eleifend lacus sed ligula venenatis tempor. Donec nec imperdiet metus. Aliquam mollis dictum urna in feugiat. Nam vulputate pellentesque dapibus. Ut risus sem, varius a consequat at, auctor sed nisi. Sed at augue efficitur, tristique metus id, scelerisque felis. Aliquam malesuada leo vitae magna commodo, vitae mattis purus vehicula. Donec ultricies vitae eros id convallis. Phasellus condimentum ornare sapien a sollicitudin. ',
                                img: 'main/assets/images/Mixed.jpg',
                            },
                            {
                                id: 4,
                                title: 'ClubGolf',
                                description: 'Our national junior programme is introducing thousands of youngsters to the club game',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam augue nibh, ornare sit amet velit a, lacinia faucibus mi. Suspendisse ac leo condimentum, volutpat diam nec, gravida velit. Cras quis mattis dolor, varius tristique metus. Nulla luctus mattis tincidunt. Etiam non nibh dui. Sed tristique dolor nec eros hendrerit dignissim id vel nibh. Phasellus a magna molestie, condimentum dui eu, sagittis sapien. Praesent eleifend lacus sed ligula venenatis tempor. Donec nec imperdiet metus. Aliquam mollis dictum urna in feugiat. Nam vulputate pellentesque dapibus. Ut risus sem, varius a consequat at, auctor sed nisi. Sed at augue efficitur, tristique metus id, scelerisque felis. Aliquam malesuada leo vitae magna commodo, vitae mattis purus vehicula. Donec ultricies vitae eros id convallis. Phasellus condimentum ornare sapien a sollicitudin. ',
                                img: 'main/assets/images/Events.jpg',
                            },
                            {
                                id: 5,
                                title: 'Lorem ipsum',
                                description: 'Lorem ipsum sit amet',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam augue nibh, ornare sit amet velit a, lacinia faucibus mi. Suspendisse ac leo condimentum, volutpat diam nec, gravida velit. Cras quis mattis dolor, varius tristique metus. Nulla luctus mattis tincidunt. Etiam non nibh dui. Sed tristique dolor nec eros hendrerit dignissim id vel nibh. Phasellus a magna molestie, condimentum dui eu, sagittis sapien. Praesent eleifend lacus sed ligula venenatis tempor. Donec nec imperdiet metus. Aliquam mollis dictum urna in feugiat. Nam vulputate pellentesque dapibus. Ut risus sem, varius a consequat at, auctor sed nisi. Sed at augue efficitur, tristique metus id, scelerisque felis. Aliquam malesuada leo vitae magna commodo, vitae mattis purus vehicula. Donec ultricies vitae eros id convallis. Phasellus condimentum ornare sapien a sollicitudin. ',
                                img: 'main/assets/images/Events.jpg',
                            },
                            {
                                id: 6,
                                title: 'Lorem ipsum',
                                description: 'Lorem ipsum sit amet',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam augue nibh, ornare sit amet velit a, lacinia faucibus mi. Suspendisse ac leo condimentum, volutpat diam nec, gravida velit. Cras quis mattis dolor, varius tristique metus. Nulla luctus mattis tincidunt. Etiam non nibh dui. Sed tristique dolor nec eros hendrerit dignissim id vel nibh. Phasellus a magna molestie, condimentum dui eu, sagittis sapien. Praesent eleifend lacus sed ligula venenatis tempor. Donec nec imperdiet metus. Aliquam mollis dictum urna in feugiat. Nam vulputate pellentesque dapibus. Ut risus sem, varius a consequat at, auctor sed nisi. Sed at augue efficitur, tristique metus id, scelerisque felis. Aliquam malesuada leo vitae magna commodo, vitae mattis purus vehicula. Donec ultricies vitae eros id convallis. Phasellus condimentum ornare sapien a sollicitudin. ',
                                img: 'main/assets/images/Events.jpg',
                            },
                            {
                                id: 7,
                                title: 'Lorem ipsum',
                                description: 'Lorem ipsum sit amet',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam augue nibh, ornare sit amet velit a, lacinia faucibus mi. Suspendisse ac leo condimentum, volutpat diam nec, gravida velit. Cras quis mattis dolor, varius tristique metus. Nulla luctus mattis tincidunt. Etiam non nibh dui. Sed tristique dolor nec eros hendrerit dignissim id vel nibh. Phasellus a magna molestie, condimentum dui eu, sagittis sapien. Praesent eleifend lacus sed ligula venenatis tempor. Donec nec imperdiet metus. Aliquam mollis dictum urna in feugiat. Nam vulputate pellentesque dapibus. Ut risus sem, varius a consequat at, auctor sed nisi. Sed at augue efficitur, tristique metus id, scelerisque felis. Aliquam malesuada leo vitae magna commodo, vitae mattis purus vehicula. Donec ultricies vitae eros id convallis. Phasellus condimentum ornare sapien a sollicitudin. ',
                                img: 'main/assets/images/Events.jpg',
                            },
                            {
                                id: 8,
                                title: 'Lorem ipsum',
                                description: 'Lorem ipsum sit amet',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam augue nibh, ornare sit amet velit a, lacinia faucibus mi. Suspendisse ac leo condimentum, volutpat diam nec, gravida velit. Cras quis mattis dolor, varius tristique metus. Nulla luctus mattis tincidunt. Etiam non nibh dui. Sed tristique dolor nec eros hendrerit dignissim id vel nibh. Phasellus a magna molestie, condimentum dui eu, sagittis sapien. Praesent eleifend lacus sed ligula venenatis tempor. Donec nec imperdiet metus. Aliquam mollis dictum urna in feugiat. Nam vulputate pellentesque dapibus. Ut risus sem, varius a consequat at, auctor sed nisi. Sed at augue efficitur, tristique metus id, scelerisque felis. Aliquam malesuada leo vitae magna commodo, vitae mattis purus vehicula. Donec ultricies vitae eros id convallis. Phasellus condimentum ornare sapien a sollicitudin. ',
                                img: 'main/assets/images/Events.jpg',
                            }
                        ];

                return datas;
            }

            this.getGolfData = function () {

                var datas =
                        [
                            {
                                id: 1,
                                name: 'Golspie Golf Club',
                                address: 'Ferry Road, Golspie, Sutherland, KW10 6ST',
                                par: '68',
                                sss: '71',
                                holes: '18',
                                yards: '6260',
                                region: 66,
                                phone: '01408 633266',
                                img: 'main/assets/images/golf1.jpg',
                                membership: true,
                                membershipCard: false,
                                clubGolf: false,
                                getIntoGolf: false,
                                offers: [
                                    'Twilight rate of 30 per person for play after 14.00 Monday to Thursday',
                                    'Weekday Winter Offer: 90 for a fourball and 75 for a threeball',
                                    'Weekend Winter Offer: 140 for a fourball and 120 for a threeball',
                                    'Summer Specials - Weekday green fee: 40 per person, Weekend: 60 per person (subject to availability).2 for 1 buggies for each fourball',
                                    'Packages available for groups of more than 8 golfers from 45 per person for round of golf with catering, subject to availability.',
                                    'Autumn Fourball Specials: 140 on weekdays and 200 @ 2.00 at weekends, subject to availability}'
                                ],
                                competitions: [
                                    {name: "OPEN TEXAS SCRAMBLE", start: "22, Apr 2017 07:30:00", end: "22, Apr 2017 15:30:00", fee: "£60 per team of 4"},
                                    {name: "OPEN TEXAS SCRAMBLE 2", start: "22, Apr 2017 07:30:00", end: "22, Apr 2017 15:30:00", fee: "£60 per team of 4"},
                                    {name: "OPEN TEXAS SCRAMBLE 3", start: "22, Apr 2017 07:30:00", end: "22, Apr 2017 15:30:00", fee: "£60 per team of 4"}
                                ]
                            },
                            {
                                id: 2,
                                name: 'Longniddry Golf Club',
                                address: 'Links road, Longniddry, EH32 0NL',
                                par: '68',
                                sss: '71',
                                holes: '18',
                                yards: '6260',
                                region: 65,
                                phone: '01408 633266',
                                img: 'main/assets/images/golf2.jpg',
                                membership: false,
                                membershipCard: true,
                                clubGolf: false,
                                getIntoGolf: false,
                                offers: [
                                    'Twilight rate of 30 per person for play after 14.00 Monday to Thursday',
                                    'Weekday Winter Offer: 90 for a fourball and 75 for a threeball',
                                    'Weekend Winter Offer: 140 for a fourball and 120 for a threeball',
                                    'Summer Specials - Weekday green fee: 40 per person, Weekend: 60 per person (subject to availability).2 for 1 buggies for each fourball',
                                    'Packages available for groups of more than 8 golfers from 45 per person for round of golf with catering, subject to availability.',
                                    'Autumn Fourball Specials: 140 on weekdays and 200 @ 2.00 at weekends, subject to availability}'
                                ],
                                competitions: [
                                    {name: "OPEN TEXAS SCRAMBLE", start: "22, Apr 2017 07:30:00", end: "22, Apr 2017 15:30:00", fee: "£60 per team of 4"},
                                    {name: "OPEN TEXAS SCRAMBLE 2", start: "22, Apr 2017 07:30:00", end: "22, Apr 2017 15:30:00", fee: "£60 per team of 4"},
                                    {name: "OPEN TEXAS SCRAMBLE 3", start: "22, Apr 2017 07:30:00", end: "22, Apr 2017 15:30:00", fee: "£60 per team of 4"}
                                ]
                            },
                            {
                                id: 3,
                                name: 'Tain Golf Club',
                                address: 'Chapel Road, Tain, Ross-shire, IV19 1JE',
                                par: '68',
                                sss: '71',
                                holes: '18',
                                yards: '6260',
                                region: 67,
                                phone: '01862 892314',
                                img: 'main/assets/images/golf3.jpg',
                                membership: false,
                                membershipCard: false,
                                clubGolf: true,
                                getIntoGolf: false,
                                offers: [
                                    'Twilight rate of 30 per person for play after 14.00 Monday to Thursday',
                                    'Weekday Winter Offer: 90 for a fourball and 75 for a threeball',
                                    'Weekend Winter Offer: 140 for a fourball and 120 for a threeball',
                                    'Summer Specials - Weekday green fee: 40 per person, Weekend: 60 per person (subject to availability).2 for 1 buggies for each fourball',
                                    'Packages available for groups of more than 8 golfers from 45 per person for round of golf with catering, subject to availability.',
                                    'Autumn Fourball Specials: 140 on weekdays and 200 @ 2.00 at weekends, subject to availability}'
                                ],
                                competitions: [
                                    {name: "OPEN TEXAS SCRAMBLE", start: "22, Apr 2017 07:30:00", end: "22, Apr 2017 15:30:00", fee: "£60 per team of 4"},
                                    {name: "OPEN TEXAS SCRAMBLE 2", start: "22, Apr 2017 07:30:00", end: "22, Apr 2017 15:30:00", fee: "£60 per team of 4"},
                                    {name: "OPEN TEXAS SCRAMBLE 3", start: "22, Apr 2017 07:30:00", end: "22, Apr 2017 15:30:00", fee: "£60 per team of 4"}
                                ]
                            },
                            {
                                id: 4,
                                name: 'Golspie Golf Club2',
                                address: 'Ferry Road, Golspie, Sutherland, KW10 6ST',
                                par: '68',
                                sss: '71',
                                holes: '18',
                                yards: '6260',
                                region: 68,
                                phone: '01408 633266',
                                img: 'main/assets/images/golf1.jpg',
                                membership: false,
                                membershipCard: false,
                                clubGolf: false,
                                getIntoGolf: true,
                                offers: [
                                    'Twilight rate of 30 per person for play after 14.00 Monday to Thursday',
                                    'Weekday Winter Offer: 90 for a fourball and 75 for a threeball',
                                    'Weekend Winter Offer: 140 for a fourball and 120 for a threeball',
                                    'Summer Specials - Weekday green fee: 40 per person, Weekend: 60 per person (subject to availability).2 for 1 buggies for each fourball',
                                    'Packages available for groups of more than 8 golfers from 45 per person for round of golf with catering, subject to availability.',
                                    'Autumn Fourball Specials: 140 on weekdays and 200 @ 2.00 at weekends, subject to availability}'
                                ],
                                competitions: [
                                    {name: "OPEN TEXAS SCRAMBLE", start: "22, Apr 2017 07:30:00", end: "22, Apr 2017 15:30:00", fee: "£60 per team of 4"},
                                    {name: "OPEN TEXAS SCRAMBLE 2", start: "22, Apr 2017 07:30:00", end: "22, Apr 2017 15:30:00", fee: "£60 per team of 4"},
                                    {name: "OPEN TEXAS SCRAMBLE 3", start: "22, Apr 2017 07:30:00", end: "22, Apr 2017 15:30:00", fee: "£60 per team of 4"}
                                ]
                            },
                            {
                                id: 5,
                                name: 'Tain Golf Club2',
                                address: 'Chapel Road, Tain, Ross-shire, IV19 1JE',
                                par: '68',
                                sss: '71',
                                holes: '18',
                                yards: '6260',
                                region: 69,
                                phone: '01862 892314',
                                img: 'main/assets/images/golf3.jpg',
                                membership: true,
                                membershipCard: true,
                                clubGolf: false,
                                getIntoGolf: false,
                                offers: [
                                    'Twilight rate of 30 per person for play after 14.00 Monday to Thursday',
                                    'Weekday Winter Offer: 90 for a fourball and 75 for a threeball',
                                    'Weekend Winter Offer: 140 for a fourball and 120 for a threeball',
                                    'Summer Specials - Weekday green fee: 40 per person, Weekend: 60 per person (subject to availability).2 for 1 buggies for each fourball',
                                    'Packages available for groups of more than 8 golfers from 45 per person for round of golf with catering, subject to availability.',
                                    'Autumn Fourball Specials: 140 on weekdays and 200 @ 2.00 at weekends, subject to availability}'
                                ],
                                competitions: [
                                    {name: "OPEN TEXAS SCRAMBLE", start: "22, Apr 2017 07:30:00", end: "22, Apr 2017 15:30:00", fee: "£60 per team of 4"},
                                    {name: "OPEN TEXAS SCRAMBLE 2", start: "22, Apr 2017 07:30:00", end: "22, Apr 2017 15:30:00", fee: "£60 per team of 4"},
                                    {name: "OPEN TEXAS SCRAMBLE 3", start: "22, Apr 2017 07:30:00", end: "22, Apr 2017 15:30:00", fee: "£60 per team of 4"}
                                ]
                            },
                            {
                                id: 6,
                                name: 'Longniddry Golf Club2',
                                address: 'Links road, Longniddry, EH32 0NL',
                                par: '68',
                                sss: '71',
                                holes: '18',
                                yards: '6260',
                                region: 65,
                                phone: '01408 633266',
                                img: 'main/assets/images/golf2.jpg',
                                membership: false,
                                membershipCard: false,
                                clubGolf: true,
                                getIntoGolf: true,
                                offers: [
                                    'Twilight rate of 30 per person for play after 14.00 Monday to Thursday',
                                    'Weekday Winter Offer: 90 for a fourball and 75 for a threeball',
                                    'Weekend Winter Offer: 140 for a fourball and 120 for a threeball',
                                    'Summer Specials - Weekday green fee: 40 per person, Weekend: 60 per person (subject to availability).2 for 1 buggies for each fourball',
                                    'Packages available for groups of more than 8 golfers from 45 per person for round of golf with catering, subject to availability.',
                                    'Autumn Fourball Specials: 140 on weekdays and 200 @ 2.00 at weekends, subject to availability}'
                                ],
                                competitions: [
                                    {name: "OPEN TEXAS SCRAMBLE", start: "22, Apr 2017 07:30:00", end: "22, Apr 2017 15:30:00", fee: "£60 per team of 4"},
                                    {name: "OPEN TEXAS SCRAMBLE 2", start: "22, Apr 2017 07:30:00", end: "22, Apr 2017 15:30:00", fee: "£60 per team of 4"},
                                    {name: "OPEN TEXAS SCRAMBLE 3", start: "22, Apr 2017 07:30:00", end: "22, Apr 2017 15:30:00", fee: "£60 per team of 4"}
                                ]
                            }
                        ]
                        ;
                return datas;
            };
            this.getGolf = function (id) {
                var datas = this.getGolfData();
                var filter = filterFilter(datas, {id: id})
                return filter[0] ? filter[0] : {};
            }

            this.getLeaderBoards = function () {

                var datas =
                        [
                            {
                                rank: 1,
                                name: 'Lorem Ipsum',
                                img: 'main/assets/images/character.jpg'
                            },
                            {
                                rank: 2,
                                name: 'Lorem Ipsum 2',
                                img: 'main/assets/images/character.jpg'
                            },
                            {
                                rank: 4,
                                name: 'Lorem Ipsum 4',
                                img: 'main/assets/images/character.jpg'
                            },
                            {
                                rank: 5,
                                name: 'Lorem Ipsum 5',
                                img: 'main/assets/images/character.jpg'
                            },
                            {
                                rank: 6,
                                name: 'Lorem Ipsum 6',
                                img: 'main/assets/images/character.jpg'
                            },
                            {
                                rank: 7,
                                name: 'Lorem Ipsum 7',
                                img: 'main/assets/images/character.jpg'
                            },
                            {
                                rank: 8,
                                name: 'Lorem Ipsum 8',
                                img: 'main/assets/images/character.jpg'
                            },
                            {
                                rank: 9,
                                name: 'Lorem Ipsum 9',
                                img: 'main/assets/images/character.jpg'
                            },
                            {
                                rank: 10,
                                name: 'Lorem Ipsum 10',
                                img: 'main/assets/images/character.jpg'
                            },
                            {
                                rank: 11,
                                name: 'Lorem Ipsum 11',
                                img: 'main/assets/images/character.jpg'
                            },
                            {
                                rank: 12,
                                name: 'Lorem Ipsum 12',
                                img: 'main/assets/images/character.jpg'
                            },
                            {
                                rank: 13,
                                name: 'Lorem Ipsum 13',
                                img: 'main/assets/images/character.jpg'
                            },
                            {
                                rank: 14,
                                name: 'Lorem Ipsum 14',
                                img: 'main/assets/images/character.jpg'
                            },
                            {
                                rank: 15,
                                name: 'Lorem Ipsum 15',
                                img: 'main/assets/images/character.jpg'
                            }
                        ]
                        ;
                return datas;
            };
        }
        );
