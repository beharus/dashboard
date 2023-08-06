import Oval1 from './imgs/Oval1.png'
import Oval2 from './imgs/Oval2.png'
import Oval3 from './imgs/Oval3.png'
import Oval4 from './imgs/Oval4.png'
import pl from './imgs/Placeholder.png'
import pl1 from './imgs/Placeholder (1).png'
import pl2 from './imgs/Placeholder (2).png'
import pl3 from './imgs/Placeholder (3).png'
import pl4 from './imgs/Placeholder (4).png'
import pl5 from './imgs/Placeholder (5).png'
export let Data = [
    {
        icon: 'fa-solid fa-chart-pie',
        inside: [
            {
                icon: 'fa-solid fa-universal-access',
                text: 'Sales',
                url: 'main'
            },
            {
                icon: 'fa-solid fa-chart-simple',
                text: 'Market',
                url: 'marketing'
            },
            {
                icon: 'fa-solid fa-comments-dollar',
                text: 'Business Summary',
                url: 'main'
            },
            {
                icon: 'fa-regular fa-floppy-disk',
                text: 'Saved Reports',
                url: 'main'
            },
            {
                icon: 'fa-regular fa-comment-dots',
                text: 'Feedbacks',
                url: 'main'
            },
        ]
    },
    {
        icon: 'fa-solid fa-mug-saucer',
        inside: [
            {
                icon: 'fa-solid fa-universal-access',
                text: 'Sales',
                url: 'main'
            },
            {
                icon: 'fa-solid fa-chart-simple',
                text: 'Market',
                url: 'main'
            },
            {
                icon: 'fa-solid fa-comments-dollar',
                text: 'Business Summary',
                url: 'main'
            },
            {
                icon: 'fa-regular fa-floppy-disk',
                text: 'Saved Reports',
                url: 'main'
            },
            {
                icon: 'fa-regular fa-comment-dots',
                text: 'Feedbacks',
                url: 'main'
            },
        ]
    },
    {
        icon: 'fa-solid fa-location-dot',
        inside: [
            {
                icon: 'fa-solid fa-universal-access',
                text: 'Sales',
                url: 'main'
            },
            {
                icon: 'fa-solid fa-chart-simple',
                text: 'Market',
                url: 'main'
            },
            {
                icon: 'fa-solid fa-comments-dollar',
                text: 'Business Summary',
                url: 'main'
            },
            {
                icon: 'fa-regular fa-comment-dots',
                text: 'Feedbacks',
                url: 'main'
            },
        ]
    },
    {
        icon: 'fa-solid fa-calendar-days',
        inside: [
            {
                icon: 'fa-solid fa-comments-dollar',
                text: 'Business Summary',
                url: 'main'
            },
            {
                icon: 'fa-regular fa-floppy-disk',
                text: 'Saved Reports',
                url: 'main'
            },
            {
                icon: 'fa-regular fa-comment-dots',
                text: 'Feedbacks',
                url: 'main'
            },
        ]
    },
    {
        icon: 'fa-solid fa-box',
        inside: [
            {
                icon: 'fa-solid fa-universal-access',
                text: 'Sales',
                url: 'main'
            },
        ]
    },
    {
        icon: 'fa-solid fa-gear',
        inside: [
            {
                icon: 'fa-regular fa-floppy-disk',
                text: 'Saved Reports',
                url: 'main'
            },
            {
                icon: 'fa-regular fa-comment-dots',
                text: 'Feedbacks',
                url: 'main'
            },
        ]
    }
]


export let dateCards = [
    {
        text: 'Coffeetalk',
        earn: '1,432',
        percent: '3',
        color: 'border-violet-500'
    }, {
        text: 'Low n slow',
        earn: '2,124',
        percent: '5',
        color: 'border-red-500'
    }, {
        text: "Cold 'n brew",
        earn: '9,692',
        percent: '12',
        color: 'border-yellow-500'
    }, {
        text: 'Eplus space',
        earn: '0,902',
        percent: '1',
        color: 'border-lime-500'
    }, {
        text: 'Sinergy space',
        earn: '6,431',
        percent: '9',
        color: 'border-lime-400'
    },

]
export let topSellingAndGrossingItems = [
    {
        title: 'Top selling items',
        items: [
            {
                img: pl,
                text: 'Javanese Salad with Peanut Sauce and Ice Tea',
                money: '$ 2.302,00',
                percentage: '-0,5%',
                color: 'text-orange-600'
            },
            {
                img: pl1,
                text: 'Sirloin Steak Well Done with Barbeque Sauce',
                money: '$ 2.302,00',
                percentage: '+2,5%',
                color: 'text-lime-500'
            },
            {
                img: pl2,
                text: 'Chicken Crispy with Sauce Sambal ABC',
                money: '$ 2.302,00',
                percentage: '-0,5%',
                color: 'text-orange-600'
            }
        ]
    },
    {
        title: 'Top grossing items',
        items: [
            {
                img: pl3,
                text: 'Sirloin Steak Well Done with Barbeque Sauce',
                money: '$ 2.302,00',
                percentage: '+2,5%',
                color: 'text-lime-500'
            },
            {
                img: pl4,
                text: 'Javanese Salad with Peanut Sauce and Ice Tea',
                money: '$ 2.302,00',
                percentage: '-0,5%',
                color: 'text-lime-500'
            },
            {
                img: pl5,
                text: 'Chicken Crispy with Sauce Sambal ABC',
                money: '$ 2.302,00',
                percentage: '-0,5%',
                color: 'text-orange-600'
            }
        ]
    }
]
export let dateStaff = [
    {
        name: 'Nirmala Azalea',
        img: Oval1,
        percent: '+5%',
        color: 'text-lime-500',
        money: '$1,912'
    },
    {
        name: 'Bena Kane',
        img: Oval2,
        percent: '-1.2%',
        color: 'text-orange-600',
        money: '$294'
    },
    {
        name: 'Firmino Kudo',
        img: Oval3,
        percent: '+2%',
        color: 'text-lime-500',
        money: '$2,009'
    },
    {
        name: 'Beby Jovancy',
        img: Oval4,
        percent: '+1.3%',
        color: 'text-lime-500',
        money: '$1,089'
    },
]

export let dataPie = [
    {
        x: 'Coffeetalk',
        y: 685,
    },
    {
        x: 'Low in slow',
        y: 878,
    },
    {
        x: "Cold 'n brew",
        y: 608,
    },
    {
        x: "Eplus space",
        y: 787,
    },
    {
        x: "Sinergy space",
        y: 368,
    },
]
export let dataColumn = [
    {
        x: 'Coffeetalk',
        y: 685,
        color: '#FF736A'
    },
    {
        x: 'Low in slow',
        y: 878,
        color: '#FECF24'
    },
    {
        x: "Cold 'n brew",
        y: 608,
        color: '#73CB50'
    },
    {
        x: "Eplus space",
        y: 787,
        color: '#B1E71D'
    },
    {
        x: "Sinergy space",
        y: 368,
        color: '#8569F6'
    },
]


export const dataLine = [[
    { x: ' ', y: 292, color: '#FECF24' },
    { x: 'Mon, 20', y: 335, color: '#FECF24' },
    { x: 'Tue, 21', y: 414, color: '#FECF24' },
    { x: 'Wed, 22', y: 365, color: '#FECF24' },
    { x: 'Thu, 23', y: 343, color: '#FECF24' },
    { x: 'Fri, 24', y: 357, color: '#FECF24' },
    { x: 'Sat, 25', y: 213, color: '#FECF24' },
    { x: 'Sun, 26', y: 400, color: '#FECF24' },
    { x: 'Mon, 27', y: 381, color: '#FECF24' },
    { x: 'Tue, 28', y: 404, color: '#FECF24' },
], [
    { x: ' ', y: 274, color: '#B1E71D' },
    { x: 'Mon, 20', y: 304, color: '#B1E71D' },
    { x: 'Tue, 21', y: 401, color: '#B1E71D' },
    { x: 'Wed, 22', y: 352, color: '#B1E71D' },
    { x: 'Thu, 23', y: 436, color: '#B1E71D' },
    { x: 'Fri, 24', y: 404, color: '#B1E71D' },
    { x: 'Sat, 25', y: 446, color: '#B1E71D' },
    { x: 'Sun, 26', y: 298, color: '#B1E71D' },
    { x: 'Mon, 27', y: 293, color: '#B1E71D' },
    { x: 'Tue, 28', y: 307, color: '#B1E71D' },
], [
    { x: ' ', y: 265, color: '#FF736A' },
    { x: 'Mon, 20', y: 281, color: '#FF736A' },
    { x: 'Tue, 21', y: 292, color: '#FF736A' },
    { x: 'Wed, 22', y: 341, color: '#FF736A' },
    { x: 'Thu, 23', y: 338, color: '#FF736A' },
    { x: 'Fri, 24', y: 314, color: '#FF736A' },
    { x: 'Sat, 25', y: 327, color: '#FF736A' },
    { x: 'Sun, 26', y: 423, color: '#FF736A' },
    { x: 'Mon, 27', y: 415, color: '#FF736A' },
    { x: 'Tue, 28', y: 407, color: '#FF736A' },
], [
    { x: ' ', y: 241, color: '#73CB50' },
    { x: 'Mon, 20', y: 274, color: '#73CB50' },
    { x: 'Tue, 21', y: 284, color: '#73CB50' },
    { x: 'Wed, 22', y: 271, color: '#73CB50' },
    { x: 'Thu, 23', y: 316, color: '#73CB50' },
    { x: 'Fri, 24', y: 294, color: '#73CB50' },
    { x: 'Sat, 25', y: 296, color: '#73CB50' },
    { x: 'Sun, 26', y: 378, color: '#73CB50' },
    { x: 'Mon, 27', y: 438, color: '#73CB50' },
    { x: 'Tue, 28', y: 407, color: '#73CB50' },
], [
    { x: ' ', y: 178, color: '#8569F6' },
    { x: 'Mon, 20', y: 198, color: '#8569F6' },
    { x: 'Tue, 21', y: 249, color: '#8569F6' },
    { x: 'Wed, 22', y: 310, color: '#8569F6' },
    { x: 'Thu, 23', y: 283, color: '#8569F6' },
    { x: 'Fri, 24', y: 297, color: '#8569F6' },
    { x: 'Sat, 25', y: 186, color: '#8569F6' },
    { x: 'Sun, 26', y: 316, color: '#8569F6' },
    { x: 'Mon, 27', y: 389, color: '#8569F6' },
    { x: 'Tue, 28', y: 397, color: '#8569F6' },
],]

export let dataBar = [
    {
        x: '1-2AM',
        hours: 3230,
        color: 'red'
    },
    {
        x: '2-3AM',
        hours: 2230,
        color: 'red'
    },
    {
        x: '3-4AM',
        hours: 1630,
        color: 'red'
    },
    {
        x: '4-5AM',
        hours: 1230,
        color: 'red'
    },
    {
        x: '5-6AM',
        hours: 2230,
        color: 'red'
    },
    {
        x: '6-7AM',
        hours: 1630,
        color: 'red'
    },
    {
        x: '7-8AM',
        hours: 3230,
        color: 'red'
    },
    {
        x: '8-9AM',
        hours: 4230,
        color: 'red'
    },
    {
        x: '9-10AM',
        hours: 1630,
        color: 'red'
    },
    {
        x: '10-11AM',
        hours: 1980,
        color: 'red'
    },
]


export let dateOptions = [
    {
        country: 'China',
        cities: [{
            city: 'Pekin',
        },
        {
            city: 'Shanxay',
        }, {
            city: 'Lanzhou',
        }, {
            city: 'Uxan',
        }
        ]
    }, {
        country: 'Uzbekistan',
        cities: [{
            city: 'Tashkent',
        },
        {
            city: 'Fergana',
        }, {
            city: 'Samarkand',
        }, {
            city: 'Qashqadaryo',
        }
        ]
    }, {
        country: 'England',
        cities: [{
            city: 'London',
        },
        {
            city: 'Tottenham',
        },
        ]
    }, {
        country: 'USA',
        cities: [{
            city: 'Washington',
        },
        {
            city: 'New York',
        }, {
            city: 'Los Angeles',
        },
        {
            city: 'Cansas',
        },
        {
            city: 'Atlanta',
        }
        ]
    }, {
        country: 'Russian',
        cities: [{
            city: 'Moscow',
        },
        ]
    },
]

export let cards = [
    {
        text: 'Total orders',
        icon: 'fa-solid fa-file',
        iconColor: 'text-neutral-500',
        money: '342',
        percent: "4.2%",
        percentColor: 'text-lime-500',
        trend: "fa-solid fa-arrow-up"
    },
    {
        text: 'Total sales',
        icon: 'fa-solid fa-person-rays',
        iconColor: 'text-neutral-500',
        money: '$1,290',
        percent: "2.2%",
        percentColor: 'text-lime-500',
        trend: "fa-solid fa-arrow-up"
    },
    {
        text: 'Net sales',
        icon: 'fa-solid fa-filter-circle-dollar',
        iconColor: 'text-neutral-500',
        money: '$1,940',
        percent: "4.0%",
        percentColor: 'text-lime-500',
        trend: "fa-solid fa-arrow-up"
    },
    {
        text: 'Cancelled orders',
        icon: 'fa-solid fa-circle-xmark',
        iconColor: 'text-orange-600',
        money: '12',
        percent: "1.5%",
        percentColor: 'text-orange-600',
        trend: "fa-solid fa-arrow-down"
    }
]


export let multilocation = [
    {
        country: 'China',
        cities: [{
            city: 'Pekin',
            multilocation: [
                'Kroger', 'Towne Oaks', 'Groveland', 'Groveland Chapels'
            ]
        },
        {
            city: 'Shanxay',
            multilocation: [
                'Deer Creek', 'View details', 'Mayfair', 'Goodfield', 'Carlock', 'Congerville'
            ]
        }, {
            city: 'Lanzhou',
            multilocation: ['Tianshui', 'Baoji']
        },
        {
            city: 'Uxan',
            multilocation: [
                'Eureka', 'Cruger', 'Metamora', 'Roanoke', 'Panola'
            ]
        }
        ]
    }, {
        country: 'Uzbekistan',
        cities: [{
            city: 'Tashkent',
            multilocation: [
                'Sergeli', 'Marsim Gorkiy', 'Yunisobod', 'Mirzo Ulugbek', 'Chilonzor'
            ]
        },
        {
            city: 'Fergana',
            multilocation: [
                'Koson', 'Qoqon', 'Margilan',
            ]
        }, {
            city: 'Samarkand',
            multilocation: ['Samarkand', 'Oltinsoy']
        }, {
            city: 'Surxondaryo',
            multilocation: ['Termiz', 'Denov']
        },
        {
            city: 'Qashqadaryo',
            multilocation: [
                'Qarshi', 'Chirakchi', 'Shaxrisabz', 'Kitob', 'Yakkabog'
            ]
        }
        ]
    }, {
        country: 'England',
        cities: [{
            city: 'London',
            multilocation: [
                'London City', 'Oxford', 'Manchester'
            ]
        },
        {
            city: 'Tottenham',
            multilocation: [
                'Redstone', 'Yellowrock', 'Mayfair 12', 'Goodfield',
            ]
        },
        ]
    }, {
        country: 'USA',
        cities: [{
            city: 'Washington',
            multilocation: [
                'Kroger', 'Towne Oaks', 'Groveland', 'Groveland Chapels'
            ]
        },
        {
            city: 'New York',
            multilocation: [
                'Brockleen Bringe', 'Coma', 'Arezona', 'Mottemham', 'Carlson Street', 'Congerville', 'Phoenix'
            ]
        }, {
            city: 'Los Angeles',
            multilocation: ['Silicon Valley', 'Beach']
        },
        {
            city: 'San Francisco',
            multilocation: [
                'San Jose', 'San Diego', 'Phoenix', 'Colarado', 'Panola'
            ]
        },
        {
            city: 'Cansas',
            multilocation: [
                'Wichita', 'SpringField'
            ]
        },
        {
            city: 'Atlanta',
            multilocation: [
                'New Orlean', 'Bioloxi', 'Orlandp', 'Tampa', 'Panola'
            ]
        }
        ]
    }, {
        country: 'Russian',
        cities: [{
            city: 'Moscow',
            multilocation: [
                'Odintsovo', 'Lesnoy Gorodok', 'Borodki', 'Pykhtino', 'Lyubertsy', 'Khimki', 'Zelenograd'
            ]
        },
        ]
    },
]
export let time = [
    '08:00',
    '10:00',
    '12:00',
    '14:00',
    '16:00',
    '18:00',
    '20:00',
    '22:00'
]