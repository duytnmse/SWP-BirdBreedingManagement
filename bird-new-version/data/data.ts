
interface StarReview {
    crowIcons: number,
    eggIcons: number
}

interface Bird {
    id: number,
    name: string,
    specialty: string,
    imageSrc: string,
    starReview: StarReview,
    process: boolean
}

interface Staff {
    id: string,
    username?: string,
    email?: string,
    password?: string,
    fullname?: string,
    created_by?: string,
    created_date?: string,
    role_id?: string,
}


export const birds: Bird[] = [
    {
        "id": 1,
        "name": "Dr. Michael Sullivan",
        "specialty": "Endocrinologist",
        "imageSrc": "https://via.placeholder.com/90/f8f8f8/2b2b2b",
        "starReview": {
            "crowIcons": 6,
            "eggIcons": 2
        },
        "process": true,
    },
    {
        "id": 2,
        "name": "Dr. Jane Smith",
        "specialty": "Cardiologist",
        "imageSrc": "https://via.placeholder.com/90/f8f8f8/2b2b2b",
        "starReview": {
            "crowIcons": 0,
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
            "crowIcons": 0,
            "eggIcons": 0
        },
        "process": false

    },
    {
        "id": 7,
        "name": "Dr. Emily Johnson",
        "specialty": "Pediatrician",
        "imageSrc": "https://via.placeholder.com/90/f8f8f8/2b2b2b",
        "starReview": {
            "crowIcons": 0,
            "eggIcons": 0
        },
        "process": false

    },
    {
        "id": 8,
        "name": "Dr. Emily Johnson",
        "specialty": "Pediatrician",
        "imageSrc": "https://via.placeholder.com/90/f8f8f8/2b2b2b",
        "starReview": {
            "crowIcons": 0,
            "eggIcons": 0
        },
        "process": false

    },
    {
        "id": 9,
        "name": "Dr. Emily Johnson",
        "specialty": "Pediatrician",
        "imageSrc": "https://via.placeholder.com/90/f8f8f8/2b2b2b",
        "starReview": {
            "crowIcons": 0,
            "eggIcons": 0
        },
        "process": false

    },
]

export const cages = [{}, {}]

export const staffs: Staff[] = [
    {
        "id": '1',
        "username": "minhduy",
        "email": "tnmd@gmail.com",
        "password": "123456789",
        "fullname": "Tran Ngo Minh Duy",
        "created_by": '3',
        "created_date": "12/12/2000",
        "role_id": '1',
    },
    {
        "id": '2',
        "username": "quoctinh",
        "email": "mvqt@gmail.com",
        "password": "987654321",
        "fullname": "Mai Van Quoc Tinh",
        "created_by": '3',
        "created_date": "12/12/2000",
        "role_id": '1',
    },
    {
        "id": '3',
        "username": "minhduy",
        "email": "tnmd@gmail.com",
        "password": "123456789",
        "fullname": "Tran Ngo Minh Duy",
        "created_by": undefined,
        "created_date": "12/12/2000",
        "role_id": '1',
    },
] 