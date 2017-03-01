'use strict';
angular.module('main')
        .service('MainServ', function () {

            this.getGolfData = function () {

                var datas =
                        [
                            {
                                id: 1,
                                name: 'Golspie Golf Club',
                                address: 'Ferry Road, Golspie, Sutherland, KW10 6ST',
                                region: 66,
                                phone: '01408 633266',
                                img: 'main/assets/images/golf1.jpg',
                                membership: true,
                                membershipCard: false,
                                clubGolf: false,
                                getIntoGolf: false
                            },
                            {
                                id: 2,
                                name: 'Longniddry Golf Club',
                                address: 'Links road, Longniddry, EH32 0NL',
                                region: 65,
                                phone: '01408 633266',
                                img: 'main/assets/images/golf2.jpg',
                                membership: false,
                                membershipCard: true,
                                clubGolf: false,
                                getIntoGolf: false
                            },
                            {
                                id: 3,
                                name: 'Tain Golf Club',
                                address: 'Chapel Road, Tain, Ross-shire, IV19 1JE',
                                region: 67,
                                phone: '01862 892314',
                                img: 'main/assets/images/golf3.jpg',
                                membership: false,
                                membershipCard: false,
                                clubGolf: true,
                                getIntoGolf: false
                            },
                            {
                                id: 4,
                                name: 'Golspie Golf Club2',
                                address: 'Ferry Road, Golspie, Sutherland, KW10 6ST',
                                region: 68,
                                phone: '01408 633266',
                                img: 'main/assets/images/golf1.jpg',
                                membership: false,
                                membershipCard: false,
                                clubGolf: false,
                                getIntoGolf: true
                            },
                            {
                                id: 5,
                                name: 'Tain Golf Club2',
                                address: 'Chapel Road, Tain, Ross-shire, IV19 1JE',
                                region: 69,
                                phone: '01862 892314',
                                img: 'main/assets/images/golf3.jpg',
                                membership: true,
                                membershipCard: true,
                                clubGolf: false,
                                getIntoGolf: false
                            },
                            {
                                id: 6,
                                name: 'Longniddry Golf Club2',
                                address: 'Links road, Longniddry, EH32 0NL',
                                region: 65,
                                phone: '01408 633266',
                                img: 'main/assets/images/golf2.jpg',
                                membership: false,
                                membershipCard: false,
                                clubGolf: true,
                                getIntoGolf: true
                            }
                        ]
                        ;

                return datas;
            };
        });
