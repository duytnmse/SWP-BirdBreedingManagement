export const birds = [
    {
        "id": 1,
        "name": "Dr. Michael Sullivan",
        "specialty": "Endocrinologist",
        "imageSrc": "https://via.placeholder.com/90/f8f8f8/2b2b2b",
        "starReview": {
            "crowIcons": 3,
            "eggIcons": 1
        },
        "process": true,
    },
    {
        "id": 2,
        "name": "Dr. Jane Smith",
        "specialty": "Cardiologist",
        "imageSrc": "https://via.placeholder.com/90/f8f8f8/2b2b2b",
        "starReview": {
            "crowIcons": 4,
            "eggIcons": 0
        },
        "process": false
    },
    {
        "id": 3,
        "name": "Dr. Emily Johnson",
        "specialty": "Pediatrician",
        "imageSrc": "https://via.placeholder.com/90/f8f8f8/2b2b2b",
        "starReview": {
            "crowIcons": 5,
            "eggIcons": 2
        },
        "process": false

    },
    {
        "id": 6,
        "name": "Dr. Emily Johnson",
        "specialty": "Pediatrician",
        "imageSrc": "https://via.placeholder.com/90/f8f8f8/2b2b2b",
        "starReview": {
            "crowIcons": 5,
            "eggIcons": 2
        },
        "process": false

    },
    {
        "id": 4,
        "name": "Dr. Emily Johnson",
        "specialty": "Pediatrician",
        "imageSrc": "https://via.placeholder.com/90/f8f8f8/2b2b2b",
        "starReview": {
            "crowIcons": 5,
            "eggIcons": 2
        },
        "process": false

    },
    {
        "id": 5,
        "name": "Dr. Emily Johnson",
        "specialty": "Pediatrician",
        "imageSrc": "https://via.placeholder.com/90/f8f8f8/2b2b2b",
        "starReview": {
            "crowIcons": 5,
            "eggIcons": 2
        },
        "process": false

    },
    {
        "id": 7,
        "name": "Dr. Emily Johnson",
        "specialty": "Pediatrician",
        "imageSrc": "https://via.placeholder.com/90/f8f8f8/2b2b2b",
        "starReview": {
            "crowIcons": 5,
            "eggIcons": 2
        },
        "process": false

    },
    {
        "id": 8,
        "name": "Dr. Emily Johnson",
        "specialty": "Pediatrician",
        "imageSrc": "https://via.placeholder.com/90/f8f8f8/2b2b2b",
        "starReview": {
            "crowIcons": 5,
            "eggIcons": 2
        },
        "process": false

    },
    {
        "id": 9,
        "name": "Dr. Emily Johnson",
        "specialty": "Pediatrician",
        "imageSrc": "https://via.placeholder.com/90/f8f8f8/2b2b2b",
        "starReview": {
            "crowIcons": 5,
            "eggIcons": 2
        },
        "process": false

    },
]

//enum
const CageTypes = {
    SINGLE_CAGE: "Lồng đơn",
    DOUBLE_CAGE: "Lồng đôi"
};

export const cages = [
    {
        "id": "A01",
        "cageType": CageTypes.SINGLE_CAGE,
        "location": "1",
        "bird_id": "L003",
        "bird_quantity": 1,
        "in_process": false,
        "bird": {
            "bird_id": "L003",
            "birdtype_id": 1,
            "bird_type": {
                "id": 1,
                "birdtype": "Chích chòe lửa",
                "incubator_date": "09/10/2023",
                "chick_period": 60, //day
                "swingbranch_period": 120,
                "life_expactancy": 1825,
                "description": "none"
            },
            "isMale": true,
            "birth_date": "09/10/2023",
            "dad_id": "L001",
            "mom_id": "L002",
            "cage_id": "A03",
            "isAlive": true,
            "age_range": "Chuyền",
            "mutation_note": "none",
            "mutation_rate": 0.15,
            "weight": 100,
            "toather_color": "black",
            "imageSrc": "https://via.placeholder.com/90/f8f8f8/2b2b2b",
        },
        "process_id": "",
        "Reproduction_process": {
            "bird_id": "L005",
            "id": "P12345",
            "pairing_date": "",
            "egglaid_date": "",
            "exp_egghatch_date": "",
            "act_egghatch_date": "",
            "act_swingbranch_date": "",
            "exp_swingbranch_date": "",
            "exp_adultbird_date": "",
            "act_adultbird_date": "",
            "Breeding_Result": {
                "total_egg": 0,
                "fail_egg": 0,
            },
            "cage_id": "",
            "stage": ""
        },
        "available": false
    },

    {
        "id": "A03",
        "cagetype_id": 2,
        "location": "",
        "bird_id": "L003",
        "bird_quantity": 10,
        "in_process": true,
        "birds": [
            {
                "bird_id": "L003",
                "birdtype_id": 1,
                "bird_type": {
                    "id": 1,
                    "birdtype": "Chích chòe lửa",
                    "incubator_date": "09/10/2023",
                    "chick_period": 60, //day
                    "swingbranch_period": 120,
                    "life_expactancy": 1825,
                    "description": "none"
                },
                "isMale": true,
                "birth_date": "09/10/2022",
                "dad_id": "L001",
                "mom_id": "L002",
                "cage_id": "A03",
                "isAlive": true,
                "age_range": "Trưởng thành",
                "mutation_note": "none",
                "mutation_rate": 0.09,
                "weight": 130,
                "toather_color": "black",
                "imageSrc": "https://via.placeholder.com/90/f8f8f8/2b2b2b",
            },
            {
                "bird_id": "L003",
                "birdtype_id": 1,
                "bird_type": {
                    "id": 1,
                    "birdtype": "Chích chòe lửa",
                    "incubator_date": "09/10/2023",
                    "chick_period": 60, //day
                    "swingbranch_period": 120,
                    "life_expactancy": 1825,
                    "description": "none"
                },
                "isMale": true,
                "birth_date": "09/10/2022",
                "dad_id": "L001",
                "mom_id": "L002",
                "cage_id": "A03",
                "isAlive": true,
                "age_range": "Trưởng thành",
                "mutation_note": "none",
                "mutation_rate": 0.09,
                "weight": 130,
                "toather_color": "black",
                "imageSrc": "https://via.placeholder.com/90/f8f8f8/2b2b2b",
            }
        ],
        "process_id": "P12345",
        "Reproduction_process": {
            "bird_id": "L003",
            "id": "P12345",
            "pairing_date": "08/10/2023",
            "egglaid_date": "10/11/2023",
            "exp_egghatch_date": "25/11/2023",
            "act_egghatch_date": "25/11/2023",
            "act_swingbranch_date": "25/11/2023",
            "exp_swingbranch_date": "28/11/2023",
            "exp_adultbird_date": "30/12/2023",
            "act_adultbird_date": "30/12/2023",
            "total_egg": 8,
            "fail_egg": 1,

        },

        "cage_id": "A03",
        "stage": "_____"
    },


]
