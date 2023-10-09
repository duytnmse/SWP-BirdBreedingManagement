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

export const cages = [
    {
    "id": "A01",
    "cagetype_id": 1,
    "cage_type" : {
        "id" : 1,
        "cagetype" : "Lồng đơn",
        "size" : 1
    },
    "location": "A",
    "bird_id" : "L003",
    "bird_quantity" : 1,
    "in_process" : false,
    "bird": {
        "bird_id" : "L003",
        "birdtype_id": 1,
        "bird_type" : {
            "id" : 1,
            "birdtype" : "Chích chòe lửa",
            "incubator_date" : "09/10/2023",
            "chick_period" : 60, //day
            "swingbranch_period": 120,
            "life_expactancy" : 1825,
            "description" : "none"
        },
        "isMale" : true,
        "birth_date" : "09/10/2023",
        "dad_id" : "L001",
        "mom_id" : "L002",
        "cage_id" : "A03",
        "isAlive" : true,
        "age_range" : "Chuyền",
        "mutation_note" : "none",
        "mutation_rate" : 0.15,
        "weight" : 100,
        "toather_color" : "black",
        "imageSrc": "https://via.placeholder.com/90/f8f8f8/2b2b2b",
    },
    "process_id" : "",
    "Reproduction_process" : {
        "bird_id" : "L005",
        "id": "P12345",
        "pairing_date" : "",
        "egglaid_date" : "",
        "exp_egghatch_date" : "",
        "act_egghatch_date" : "",
        "act_swingbranch_date" : "",
        "exp_swingbranch_date" : "",
        "exp_adultbird_date" : "",
        "act_adultbird_date" : "",
        "Breeding_Result": {
            "total_egg": 0,
            "fail_egg": 0, 
        },
        "cage_id" : "",
        "stage" : ""
    },
    "available" : false
}, 
{
    "id": "A02",
    "cagetype_id": 1,
    "cage_type" : {
        "id" : 1,
        "cagetype" : "Lồng đơn",
        "size" : 1
    },
    "location": "A",
    "bird_id" : "L004",
    "bird_quantity" : 1,
    "in_process" : false,
    "bird": {
        "bird_id" : "L004",
        "birdtype_id": 1,
        "bird_type" : {
            "id" : 1,
            "birdtype" : "Chích chòe lửa",
            "incubator_date" : "09/10/2023",
            "chick_period" : 60, //day
            "swingbranch_period": 120,
            "life_expactancy" : 1825,
            "description" : "none"
        },
        "isMale" : false,
        "birth_date" : "11/10/2023",
        "dad_id" : "L001",
        "mom_id" : "L002",
        "cage_id" : "A02",
        "isAlive" : true,
        "age_range" : "Trưởng thành",
        "mutation_note" : "none",
        "mutation_rate" : 0.06,
        "weight" : 120,
        "toather_color" : "gray",
        "imageSrc": "https://via.placeholder.com/90/f8f8f8/2b2b2b",
    },
    "process_id" : "",
    "Reproduction_process" : {
        "bird_id" : "L005",
        "id": "P12345",
        "pairing_date" : "",
        "egglaid_date" : "",
        "exp_egghatch_date" : "",
        "act_egghatch_date" : "",
        "act_swingbranch_date" : "",
        "exp_swingbranch_date" : "",
        "exp_adultbird_date" : "",
        "act_adultbird_date" : "",
        "Breeding_Result": {
            "total_egg": 0,
            "fail_egg": 0, 
        },
        "cage_id" : "",
        "stage" : ""
    },
    "available" : false
},

{
    "id": "A03",
    "cagetype_id": 2,
    "cage_type" : {
        "id" : 2,
        "cagetype" : "Lồng sinh sản",
        "size" : 10
    },
    "location": "A",
    "bird_id" : "L003",
    "bird_quantity" : 10,
    "in_process" : true,
    "bird": {
        "bird_id" : "L003",
        "birdtype_id": 1,
        "bird_type" : {
            "id" : 1,
            "birdtype" : "Chích chòe lửa",
            "incubator_date" : "09/10/2023",
            "chick_period" : 60, //day
            "swingbranch_period": 120,
            "life_expactancy" : 1825,
            "description" : "none"
        },
        "isMale" : true,
        "birth_date" : "09/10/2022",
        "dad_id" : "L001",
        "mom_id" : "L002",
        "cage_id" : "A03",
        "isAlive" : true,
        "age_range" : "Trưởng thành",
        "mutation_note" : "none",
        "mutation_rate" : 0.09,
        "weight" : 130,
        "toather_color" : "black",
        "imageSrc": "https://via.placeholder.com/90/f8f8f8/2b2b2b",
    },
    "process_id" : "P12345",
    "Reproduction_process" : {
        "bird_id" : "L003",
        "id": "P12345",
        "pairing_date" : "08/10/2023",
        "egglaid_date" : "10/11/2023",
        "exp_egghatch_date" : "25/11/2023",
        "act_egghatch_date" : "25/11/2023",
        "act_swingbranch_date" : "25/11/2023",
        "exp_swingbranch_date" : "28/11/2023",
        "exp_adultbird_date" : "30/12/2023",
        "act_adultbird_date" : "30/12/2023",
        "Breeding_Result": {
            "total_egg": 8,
            "fail_egg": 1, 
        },
        "cage_id" : "A03",
        "stage" : "_____"
    },
    "available" : false
},
{
    "id": "A03",
    "cagetype_id": 2,
    "cage_type" : {
        "id" : 2,
        "cagetype" : "Lồng sinh sản",
        "size" : 10
    },
    "location": "A",
    "bird_id" : "L004",
    "bird_quantity" : 10,
    "in_process" : true,
    "bird": {
        "bird_id" : "L004",
        "birdtype_id": 1,
        "bird_type" : {
            "id" : 1,
            "birdtype" : "Chích chòe lửa",
            "incubator_date" : "09/12/2022",
            "chick_period" : 60, //day
            "swingbranch_period": 120,
            "life_expactancy" : 1825,
            "description" : "none"
        },
        "isMale" : false,
        "birth_date" : "09/10/2023",
        "dad_id" : "unkhown",
        "mom_id" : "unkhown",
        "cage_id" : "A03",
        "isAlive" : true,
        "age_range" : "Trưởng thành",
        "mutation_note" : "none",
        "mutation_rate" : 0.06,
        "weight" : 115,
        "toather_color" : "dark blue",
        "imageSrc": "https://via.placeholder.com/90/f8f8f8/2b2b2b",
    },
    "process_id" : "P12345",
    "Reproduction_process" : {
        "bird_id" : "L004",
        "id": "P12345",
        "pairing_date" : "08/10/2023",
        "egglaid_date" : "10/11/2023",
        "exp_egghatch_date" : "25/11/2023",
        "act_egghatch_date" : "25/11/2023",
        "act_swingbranch_date" : "25/11/2023",
        "exp_swingbranch_date" : "28/11/2023",
        "exp_adultbird_date" : "30/12/2023",
        "act_adultbird_date" : "30/12/2023",
        "Breeding_Result": {
            "total_egg": 5,
            "fail_egg": 1, 
        },
        "cage_id" : "A03",
        "stage" : "_____"
    },
    "available" : false
},

{
    "id": "A04",
    "cagetype_id": 1,
    "cage_type" : {
        "id" : 1,
        "cagetype" : "Lồng đơn",
        "size" : 1
    },
    "location": "A",
    "bird_id" : "",
    "bird_quantity" : 0,
    "in_process" : false,
    "bird": {
        "bird_id" : "",
        "birdtype_id": "",
        "bird_type" : {
            "id" : "",
            "birdtype" : "",
            "incubator_date" : "",
            "chick_period" : "", //day
            "swingbranch_period": "",
            "life_expactancy" : "",
            "description" : ""
        },
        "isMale" : "",
        "birth_date" : "",
        "dad_id" : "",
        "mom_id" : "",
        "cage_id" : "",
        "isAlive" : "",
        "age_range" : "",
        "mutation_note" : "",
        "mutation_rate" : "",
        "weight" : "",
        "toather_color" : "",
        "imageSrc": "",
    },
    "process_id" : "",
    "Reproduction_process" : {
        "bird_id" : "",
        "id": "P12345",
        "pairing_date" : "",
        "egglaid_date" : "",
        "exp_egghatch_date" : "",
        "act_egghatch_date" : "",
        "act_swingbranch_date" : "",
        "exp_swingbranch_date" : "",
        "exp_adultbird_date" : "",
        "act_adultbird_date" : "",
        "Breeding_Result": {
            "total_egg": 0,
            "fail_egg": 0, 
        },
        "cage_id" : "",
        "stage" : ""
    },
    "available" : true
}, 
{
    "id": "B01",
    "cagetype_id": 2,
    "cage_type" : {
        "id" : 2,
        "cagetype" : "Lồng sinh sản",
        "size" : 10
    },
    "location": "B",
    "bird_id" : "",
    "bird_quantity" : 0,
    "in_process" : false,
    "bird": {
        "bird_id" : "",
        "birdtype_id": "",
        "bird_type" : {
            "id" : "",
            "birdtype" : "",
            "incubator_date" : "",
            "chick_period" : "", //day
            "swingbranch_period": "",
            "life_expactancy" : "",
            "description" : ""
        },
        "isMale" : "",
        "birth_date" : "",
        "dad_id" : "",
        "mom_id" : "",
        "cage_id" : "",
        "isAlive" : "",
        "age_range" : "",
        "mutation_note" : "",
        "mutation_rate" : "",
        "weight" : "",
        "toather_color" : "",
        "imageSrc": "",
    },
    "process_id" : "",
    "Reproduction_process" : {
        "bird_id" : "",
        "id": "",
        "pairing_date" : "",
        "egglaid_date" : "",
        "exp_egghatch_date" : "",
        "act_egghatch_date" : "",
        "act_swingbranch_date" : "",
        "exp_swingbranch_date" : "",
        "exp_adultbird_date" : "",
        "act_adultbird_date" : "",
        "Breeding_Result": {
            "total_egg": 0,
            "fail_egg": 0, 
        },
        "cage_id" : "",
        "stage" : ""
    },
    "available" : true
},

{
    "id": "B02",
    "cagetype_id": 1,
    "cage_type" : {
        "id" : 1,
        "cagetype" : "Lồng đơn",
        "size" : 1
    },
    "location": "B",
    "bird_id" : "T003",
    "bird_quantity" : 1,
    "in_process" : false,
    "bird": {
        "bird_id" : "T003",
        "birdtype_id": 2,
        "bird_type" : {
            "id" : 2,
            "birdtype" : "Chích chòe than",
            "incubator_date" : "09/07/2021",
            "chick_period" : 90, //day
            "swingbranch_period": 150,
            "life_expactancy" : 1500,
            "description" : "none"
        },
        "isMale" : true,
        "birth_date" : "09/09/2021",
        "dad_id" : "T001",
        "mom_id" : "T002",
        "cage_id" : "B02",
        "isAlive" : true,
        "age_range" : "Trưởng thành",
        "mutation_note" : "none",
        "mutation_rate" : 0.20,
        "weight" : 190,
        "toather_color" : "grey",
        "imageSrc": "https://via.placeholder.com/90/f8f8f8/2b2b2b",
    },
    "process_id" : "",
    "Reproduction_process" : {
        "bird_id" : "T003",
        "id": "P12345",
        "pairing_date" : "",
        "egglaid_date" : "",
        "exp_egghatch_date" : "",
        "act_egghatch_date" : "",
        "act_swingbranch_date" : "",
        "exp_swingbranch_date" : "",
        "exp_adultbird_date" : "",
        "act_adultbird_date" : "",
        "Breeding_Result": {
            "total_egg": 0,
            "fail_egg": 0, 
        },
        "cage_id" : "",
        "stage" : ""
    },
    "available" : false
}, 

{
    "id": "B03",
    "cagetype_id": 1,
    "cage_type" : {
        "id" : 1,
        "cagetype" : "Lồng đơn",
        "size" : 1
    },
    "location": "B",
    "bird_id" : "T004",
    "bird_quantity" : 1,
    "in_process" : false,
    "bird": {
        "bird_id" : "T004",
        "birdtype_id": 2,
        "bird_type" : {
            "id" : 2,
            "birdtype" : "Chích chòe than",
            "incubator_date" : "01/08/2021",
            "chick_period" : 80, //day
            "swingbranch_period": 160,
            "life_expactancy" : 1600,
            "description" : "none"
        },
        "isMale" : true,
        "birth_date" : "01/09/2021",
        "dad_id" : "T001",
        "mom_id" : "T002",
        "cage_id" : "B03",
        "isAlive" : true,
        "age_range" : "Trưởng thành",
        "mutation_note" : "Đuôi dài 30 cm",
        "mutation_rate" : 0.30,
        "weight" : 180,
        "toather_color" : "black",
        "imageSrc": "https://via.placeholder.com/90/f8f8f8/2b2b2b",
    },
    "process_id" : "",
    "Reproduction_process" : {
        "bird_id" : "T004",
        "id": "P12345",
        "pairing_date" : "",
        "egglaid_date" : "",
        "exp_egghatch_date" : "",
        "act_egghatch_date" : "",
        "act_swingbranch_date" : "",
        "exp_swingbranch_date" : "",
        "exp_adultbird_date" : "",
        "act_adultbird_date" : "",
        "Breeding_Result": {
            "total_egg": 0,
            "fail_egg": 0, 
        },
        "cage_id" : "",
        "stage" : ""
    },
    "available" : false
},

{
    "id": "B04",
    "cagetype_id": 2,
    "cage_type" : {
        "id" : 2,
        "cagetype" : "Lồng sinh sản",
        "size" : 10
    },
    "location": "B",
    "bird_id" : "T005",
    "bird_quantity" : 1,
    "in_process" : true,
    "bird": {
        "bird_id" : "T005",
        "birdtype_id": 2,
        "bird_type" : {
            "id" : 2,
            "birdtype" : "Chích chòe than",
            "incubator_date" : "09/07/2021",
            "chick_period" : 90, //day
            "swingbranch_period": 150,
            "life_expactancy" : 1700,
            "description" : "Chim đột biến"
        },
        "isMale" : false,
        "birth_date" : "09/09/2021",
        "dad_id" : "T001",
        "mom_id" : "T002",
        "cage_id" : "B04",
        "isAlive" : true,
        "age_range" : "Trưởng thành",
        "mutation_note" : "Lông có nhiều hơn 2 màu",
        "mutation_rate" : 0.25,
        "weight" : 150,
        "toather_color" : "dark blue",
        "imageSrc": "https://via.placeholder.com/90/f8f8f8/2b2b2b",
    },
    "process_id" : "P001",
    "Reproduction_process" : {
        "bird_id" : "T005",
        "id": "P001",
        "pairing_date" : "09/10/2023",
        "egglaid_date" : "09/11/2023",
        "exp_egghatch_date" : "15/12/2023",
        "act_egghatch_date" : "14/12/2023",
        "act_swingbranch_date" : "15/3/2024",
        "exp_swingbranch_date" : "15/3/2024",
        "exp_adultbird_date" : "1/5/2024",
        "act_adultbird_date" : "10/5/2024",
        "Breeding_Result": {
            "total_egg": 10,
            "fail_egg": 0, 
        },
        "cage_id" : "B04",
        "stage" : ""
    },
    "available" : false
}, 

{
    "id": "B04",
    "cagetype_id": 2,
    "cage_type" : {
        "id" : 2,
        "cagetype" : "Lồng sinh sản",
        "size" : 10
    },
    "location": "B",
    "bird_id" : "T006",
    "bird_quantity" : 1,
    "in_process" : true,
    "bird": {
        "bird_id" : "T003",
        "birdtype_id": 2,
        "bird_type" : {
            "id" : 2,
            "birdtype" : "Chích chòe than",
            "incubator_date" : "09/07/2021",
            "chick_period" : 90, //day
            "swingbranch_period": 150,
            "life_expactancy" : 1400,
            "description" : "none"
        },
        "isMale" : true,
        "birth_date" : "09/09/2021",
        "dad_id" : "unknown",
        "mom_id" : "unknown",
        "cage_id" : "B04",
        "isAlive" : true,
        "age_range" : "Trưởng thành",
        "mutation_note" : "none",
        "mutation_rate" : 0.11,
        "weight" : 130,
        "toather_color" : "black",
        "imageSrc": "https://via.placeholder.com/90/f8f8f8/2b2b2b",
    },
    "process_id" : "P001",
    "Reproduction_process" : {
        "bird_id" : "T006",
        "id": "P001",
        "pairing_date" : "09/10/2023",
        "egglaid_date" : "09/11/2023",
        "exp_egghatch_date" : "15/12/2023",
        "act_egghatch_date" : "14/12/2023",
        "act_swingbranch_date" : "15/3/2024",
        "exp_swingbranch_date" : "15/3/2024",
        "exp_adultbird_date" : "1/5/2024",
        "act_adultbird_date" : "10/5/2024",
        "Breeding_Result": {
            "total_egg": 10,
            "fail_egg": 0, 
        },
        "cage_id" : "B04",
        "stage" : ""
    },
    "available" : false
}, 

]